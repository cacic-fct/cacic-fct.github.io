import BrowserOnly from '@docusaurus/BrowserOnly';

import styles from './youtubeBroadcast.module.css';

export default function YouTubeBroadcast({
  youtubeList,
}: {
  youtubeList: string[];
}) {
  if (youtubeList.length > 0) {
    return (
      <>
        {youtubeList.map((videoId: string) => {
          return (
            <div className={styles.container} key={videoId}>
              <BrowserOnly>
                {() => {
                  const hostname = window.location.hostname;
                  return (
                    <>
                      <div className={styles.video_wrapper}>
                        <iframe
                          className={styles.video}
                          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1`}
                          title="Transmissão do YouTube"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
                      </div>
                      <div className={styles.chat_wrapper}>
                        <iframe
                          className={styles.chat}
                          src={`https://www.youtube.com/live_chat?v=${videoId}&amp;embed_domain=${hostname}`}
                          title="Chat da transmissão do YouTube"></iframe>
                      </div>
                    </>
                  );
                }}
              </BrowserOnly>
            </div>
          );
        })}
      </>
    );
  }
  return null;
}
