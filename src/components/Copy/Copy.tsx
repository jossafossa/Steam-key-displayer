import type { PropsWithChildren } from "react";

type CopyProps = {
  value: string;
  onCopy?: (value: string) => void;
};

export const Copy = ({
  value,
  children,
  onCopy,
}: PropsWithChildren<CopyProps>) => {
  const handleCopy = () => {
    onCopy?.(value);
    navigator.clipboard.writeText(value);
  };

  return <div onClick={handleCopy}>{children}</div>;
};
