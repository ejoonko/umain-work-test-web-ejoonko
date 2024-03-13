import { PropsWithChildren } from "react";

interface FullRoundedButtonProps {
  clickable?: boolean;
}

export function FullRoundedButton({
  clickable = true,
  children,
}: PropsWithChildren<FullRoundedButtonProps>) {
  return (
    <button
      disabled={!clickable}
      className="border border-umain-stroke px-3 py-2 rounded-full text-body"
    >
      {children}
    </button>
  );
}
