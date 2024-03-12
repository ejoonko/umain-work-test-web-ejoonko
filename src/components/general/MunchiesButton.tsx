import { PropsWithChildren } from 'react';

interface MunchiesButtonProps {
    clickable?: boolean,
}

export function MunchiesButton({ clickable = true, children }: PropsWithChildren<MunchiesButtonProps>) {
    return (
        <button disabled={!clickable} className="border border-umain-stroke px-3 py-2 rounded-full text-body">{children}</button>
    )
}