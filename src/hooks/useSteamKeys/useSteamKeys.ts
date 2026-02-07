import { useEnv } from "../useEnv";

export const useSteamKeys = () => {
  const { keys } = useEnv();

  return keys.split(",").map((key) => key.trim());
};
