import React from "react";
import WhiteLogo from "@/icons/munchies-logo-white.svg";
import Image from "next/image";

interface WelcomeModalProps {
  onClose: () => void;
}

export function WelcomeModal({ onClose }: WelcomeModalProps) {
  return (
    <div className="fixed inset-0 w-screen h-screen bg-umain-green z-10 px-6 py-10">
      <div className="flex flex-col w-full h-full justify-between">
        <Image
          src={WhiteLogo as string}
          alt="munchies logo"
          className="h-6 md:h-10 w-fit"
          height={40}
        />
        <div className="flex flex-col gap-4">
          <h1 className="text-white text-5xl font-bold">
            {"Treat"}
            <br />
            {"yourself."}
          </h1>
          <p className="text-white text-title">
            {"Find the best restaurants in your city"}
            <br />
            {"and get it delivered to your place!"}
          </p>
        </div>
        <button
          onClick={onClose}
          className="text-base font-semibold border border-white rounded-lg text-white h-fit w-full py-5 px-6 active:bg-white active:text-umain-green transition"
        >
          {"Continue"}
        </button>
      </div>
    </div>
  );
}
