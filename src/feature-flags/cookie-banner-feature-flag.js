import { UnleashClient } from 'unleash-proxy-client';

const COOKIE_BANNER_FEATURE_FLAG = 'cookie-banner-enabled';
const DEVELOPMENT_STORAGE_KEY = 'cacic.cookieBanner.enabled';
const UNLEASH_URL = 'https://unleash.cacic.dev.br/api/frontend';
const PRODUCTION_CLIENT_KEY =
  'default:production.h8sn3hzUSF07msdHkuXubAVRxSgtAdGsBCXiXXhcs8I4boeXozEue0Tx0lwq';

export async function isCookieBannerEnabled(appName) {
  if (typeof window === 'undefined') {
    return false;
  }

  const developmentValue = readDevelopmentStorageValue();
  if (developmentValue !== null) {
    return developmentValue;
  }

  const client = new UnleashClient({
    url: UNLEASH_URL,
    clientKey: readRuntimeConfigValue('cacic-unleash-client-key') || PRODUCTION_CLIENT_KEY,
    appName,
    environment: readRuntimeConfigValue('cacic-unleash-environment') || 'production',
    refreshInterval: 60,
    disableMetrics: true,
    bootstrap: [
      {
        name: COOKIE_BANNER_FEATURE_FLAG,
        enabled: true,
        impressionData: false,
        variant: {
          name: 'enabled',
          enabled: true,
          feature_enabled: true,
        },
      },
    ],
    bootstrapOverride: false,
    fetch: fetchWithoutConsoleNoise,
  });

  try {
    await client.start();
    return client.isEnabled(COOKIE_BANNER_FEATURE_FLAG);
  } catch {
    return true;
  } finally {
    client.stop?.();
  }
}

function readDevelopmentStorageValue() {
  if (!isDevelopmentMode()) {
    return null;
  }

  try {
    const value = window.localStorage.getItem(DEVELOPMENT_STORAGE_KEY);
    if (value === null) {
      window.localStorage.setItem(DEVELOPMENT_STORAGE_KEY, 'true');
      return true;
    }

    return value !== 'false';
  } catch {
    return true;
  }
}

function isDevelopmentMode() {
  return (
    window.location.hostname === 'localhost' ||
    window.location.hostname === '127.0.0.1' ||
    window.location.hostname === '0.0.0.0' ||
    window.location.hostname.endsWith('.local')
  );
}

function readRuntimeConfigValue(metaName) {
  return document.querySelector(`meta[name="${metaName}"]`)?.content ?? '';
}

async function fetchWithoutConsoleNoise(input, init) {
  try {
    const response = await fetch(input, init);
    return response.status === 401 || response.status === 403
      ? createNotModifiedResponse()
      : response;
  } catch {
    return createNotModifiedResponse();
  }
}

function createNotModifiedResponse() {
  return new Response(null, {
    status: 304,
    statusText: 'Not Modified',
  });
}
