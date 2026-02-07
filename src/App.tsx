import { Heading, NotifyProvider, SteamKey } from "./components";
import { useSteamKeys } from "./hooks";
import styles from "./App.module.scss";
import { useEnv } from "./hooks";

function App() {
  const keys = useSteamKeys();
  const { backgroundImage, title, subtitle } = useEnv();

  return (
    <NotifyProvider>
      <img
        className={styles.backgroundImage}
        src={backgroundImage}
        alt="Background"
      />
      <div className={styles.app}>
        {title && <Heading level={1}>{title}</Heading>}
        {subtitle && <Heading level={2}>{subtitle}</Heading>}

        <div className={styles.keys}>
          {keys.map((key) => (
            <SteamKey key={key} steamKey={key} />
          ))}
        </div>
      </div>
    </NotifyProvider>
  );
}

export default App;
