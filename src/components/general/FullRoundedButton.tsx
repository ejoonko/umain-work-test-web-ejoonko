import { PropsWithChildren } from 'react';

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
      className="text-body rounded-full border border-umain-stroke px-3 py-2"
    >
      {children}
    </button>
  );
}
