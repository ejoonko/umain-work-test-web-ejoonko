import { PropsWithChildren } from 'react';

interface RoundedButtonProps {
  clickable?: boolean;
  background?: 'offwhite' | 'white' | 'transparent';
  additionalClasses?: string;
  active?: boolean;
  onClickFunction?(): void;
}

export function RoundedButton({
  clickable = true,
  background = 'transparent',
  additionalClasses,
  onClickFunction = () => null,
  active,
  children,
}: PropsWithChildren<RoundedButtonProps>) {
  const variantClasses = {
    offwhite: 'bg-umain-off-white',
    white: 'bg-white',
    transparent: '',
  };
  return (
    <button
      onClick={onClickFunction}
      disabled={!clickable}
      className={`text-body w-min text-nowrap rounded border px-2.5 py-2 transition ${additionalClasses} ${active ? 'border-blue-500 bg-blue-500 text-white' : `border-umain-stroke ${variantClasses[background]}`}`}
    >
      {children}
    </button>
  );
}
