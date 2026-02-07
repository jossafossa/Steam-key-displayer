import {
  Heading,
  NotifyProvider,
  PlayMp3,
  SteamKey,
  Confetti,
} from "./components";
import { useSteamKeys } from "./hooks";
import styles from "./App.module.scss";
import { useEnv } from "./hooks";

function App() {
  const keys = useSteamKeys();
  const { backgroundImage, backgroundSong, title, subtitle } = useEnv();

  return (
    <PlayMp3 src={backgroundSong}>
      <NotifyProvider>
        {backgroundImage && (
          <img
            className={styles.backgroundImage}
            src={backgroundImage}
            alt="Background"
          />
        )}
        <div className={styles.app}>
          {title && (
            <Heading level={1} className={styles.textCenter}>
              {title}
            </Heading>
          )}
          {subtitle && (
            <Heading level={2} className={styles.textCenter}>
              {subtitle}
            </Heading>
          )}

          <div className={styles.keys}>
            {keys.map((key) => (
              <SteamKey key={key} steamKey={key} />
            ))}
          </div>
        </div>

        <Confetti />
      </NotifyProvider>
    </PlayMp3>
  );
}

export default App;
