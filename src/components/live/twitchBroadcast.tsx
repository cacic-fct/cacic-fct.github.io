import { TwitchEmbed } from 'react-twitch-embed';

import styles from './twitchBroadcast.module.css';

export default function TwitchBroadcast({
  twitchList,
}: {
  twitchList: string[];
}) {
  if (twitchList.length > 0) {
    return (
      <>
        {twitchList.map((channel: string) => {
          return (
            <div className={styles.container}>
              <TwitchEmbed
                channel={channel}
                id={channel}
                width="100%"
                height={600}
                muted={true}
              />
            </div>
          );
        })}
      </>
    );
  }
}
