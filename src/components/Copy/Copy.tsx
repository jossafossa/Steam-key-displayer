import type { MouseEvent, PropsWithChildren } from "react";

type CopyProps = {
  value: string;
  onCopy?: (value: string) => void;
};

export const Copy = ({
  value,
  children,
  onCopy,
}: PropsWithChildren<CopyProps>) => {
  const handleCopy = (event: MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
    onCopy?.(value);
    navigator.clipboard.writeText(value);
  };

  return <div onClick={handleCopy}>{children}</div>;
};
