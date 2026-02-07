import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Copy } from "../Copy";
import styles from "./SteamKey.module.scss";
import { faCopy } from "@fortawesome/free-solid-svg-icons";
import { Button } from "../Button";
import { useNotify } from "../../hooks";

type SteamKeyProps = {
  steamKey: string;
};

export const SteamKey = ({ steamKey }: SteamKeyProps) => {
  const { notify } = useNotify();

  const handleNotify = (value: string) => {
    notify(`Copied ${value} to clipboard!`);
  };

  return (
    <Copy value={steamKey} onCopy={handleNotify}>
      <div className={styles.steamKey}>
        <input type="text" value={steamKey} readOnly />
        <Button>
          <FontAwesomeIcon icon={faCopy} />
        </Button>
      </div>
    </Copy>
  );
};
