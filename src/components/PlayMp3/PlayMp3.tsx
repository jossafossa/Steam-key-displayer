import { useRef, useState, type PropsWithChildren } from "react";
import { Button } from "../Button";
import styles from "./PlayMp3.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPause, faPlay } from "@fortawesome/free-solid-svg-icons";

type PlayMp3Props = {
  src?: string;
};

export const PlayMp3 = ({ src, children }: PropsWithChildren<PlayMp3Props>) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);
  const [initialClick, setInitialClick] = useState(false);

  if (!src) return children;

  const handleInitialClick = () => {
    if (initialClick) return;
    setInitialClick(true);
    startAudio();
  };

  const startAudio = () => {
    audioRef.current?.play();
    setPlaying(true);
  };

  const stopAudio = () => {
    audioRef.current?.pause();
    setPlaying(false);
  };

  const toggleAudio = () => {
    if (playing) {
      stopAudio();
    } else {
      startAudio();
    }
  };

  if (!src) return null;

  return (
    <div onClick={handleInitialClick}>
      <audio
        ref={audioRef}
        src={src}
        autoPlay
        loop
        preload="auto"
        onPlay={() => setPlaying(true)}
      />
      {children}
      <div className={styles.floatingMenu}>
        <Button onClick={toggleAudio}>
          {playing ? (
            <FontAwesomeIcon icon={faPause} />
          ) : (
            <FontAwesomeIcon icon={faPlay} />
          )}
        </Button>
      </div>
    </div>
  );
};
