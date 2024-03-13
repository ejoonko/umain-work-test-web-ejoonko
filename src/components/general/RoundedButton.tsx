import { PropsWithChildren } from "react";

interface RoundedButtonProps {
  clickable?: boolean;
  background?: "offwhite" | "white" | "transparent";
  additionalClasses?: string;
  active?: boolean;
  onClickFunction?(): void;
}

export function RoundedButton({
  clickable = true,
  background = "transparent",
  additionalClasses,
  onClickFunction = () => null,
  active,
  children,
}: PropsWithChildren<RoundedButtonProps>) {
  const variantClasses = {
    offwhite: "bg-umain-off-white",
    white: "bg-white",
    transparent: "bg-transparent",
  };
  return (
    <button
      onClick={onClickFunction}
      disabled={!clickable}
      className={`w-min border px-2.5 py-2 rounded text-body text-nowrap transition ${variantClasses[background]} ${additionalClasses} ${active ? "border-blue-500" : "border-umain-stroke"}`}
    >
      {children}
    </button>
  );
}
