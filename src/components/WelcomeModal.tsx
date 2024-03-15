import React from "react";
import WhiteLogo from "@/icons/munchies-logo-white.svg";
import Image from "next/image";

interface WelcomeModalProps {
  onClose: () => void;
}

export function WelcomeModal({ onClose }: WelcomeModalProps) {
  return (
    <div className="fixed inset-0 z-10 h-screen w-screen bg-umain-green px-6 py-10">
      <div className="flex size-full flex-col justify-between">
        <Image
          src={WhiteLogo as string}
          alt="munchies logo"
          className="h-6 w-fit md:h-10"
          height={40}
        />
        <div className="flex flex-col gap-4">
          <h1 className="text-5xl font-bold text-white">
            {"Treat"}
            <br />
            {"yourself."}
          </h1>
          <p className="text-title text-white">
            {"Find the best restaurants in your city"}
            <br />
            {"and get it delivered to your place!"}
          </p>
        </div>
        <button
          onClick={onClose}
          className="h-fit w-full rounded-lg border border-white px-6 py-5 text-base font-semibold text-white transition active:bg-white active:text-umain-green"
        >
          {"Continue"}
        </button>
      </div>
    </div>
  );
}
