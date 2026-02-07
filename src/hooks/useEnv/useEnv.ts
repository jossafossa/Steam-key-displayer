export const useEnv = () => {
  const backgroundImage = import.meta.env.VITE_BACKGROUND_IMAGE;
  const title = import.meta.env.VITE_TITLE;
  const subtitle = import.meta.env.VITE_SUBTITLE;
  const keys = import.meta.env.VITE_KEYS;
  const backgroundSong = import.meta.env.VITE_BACKGROUND_SONG;

  if (!keys) {
    throw new Error(
      "Please first set the VITE_KEYS environment variable in the .env file",
    );
  }

  return {
    backgroundImage: backgroundImage as string | undefined,
    backgroundSong: backgroundSong as string | undefined,
    title: title as string | undefined,
    subtitle: subtitle as string | undefined,
    keys: keys as string,
  };
};
