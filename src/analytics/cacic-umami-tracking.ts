import { startCacicUmamiTrackingFromCurrentScript } from '@cacic-fct/account-manager-privacy/umami-tracking';

startCacicUmamiTrackingFromCurrentScript({
  identifyData: {
    source: window.location.hostname,
  },
});
