import { PropsWithChildren } from 'react';

interface RoundedButtonProps {
    clickable?: boolean,
    background?: "offwhite" | "white" | "transparent"
}

export function RoundedButton({ clickable = true, background = "transparent", children }: PropsWithChildren<RoundedButtonProps>) {
    const variantClasses = {
        offwhite: 'bg-umain-off-white',
        white: 'bg-white',
        transparent: 'bg-transparent',
    };
    return (
        <button disabled={!clickable} className={`border border-umain-stroke px-3 py-2 rounded text-body ${variantClasses[background]}`}>{children}</button>
    )
}