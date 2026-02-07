import { createContext } from "react";

export const NotifyContext = createContext<{
  notify: (message: string) => void;
}>({
  notify: () => {},
});
