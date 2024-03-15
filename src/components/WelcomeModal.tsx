import React from 'react';
import Image from 'next/image';
import { SanityWelcomeModalData } from '@/modules/apiTypes';
import { PortableText } from '@portabletext/react';

interface WelcomeModalProps {
  cmsData: SanityWelcomeModalData;
  onClose: () => void;
}

export function WelcomeModal({ cmsData, onClose }: WelcomeModalProps) {
  return (
    <div className="fixed inset-0 z-10 h-screen w-screen bg-umain-green px-6 py-10">
      <div className="flex size-full flex-col justify-between">
        <div className="relative h-6 w-[168px] md:h-10 md:w-[280px]">
          <Image
            src={cmsData.logo.asset.url}
            alt="munchies logo"
            className="h-6 w-fit md:h-10"
            fill
          />
        </div>
        <div className="flex flex-col gap-4">
          <div className="text-white [&>*]:text-5xl">
            <PortableText value={cmsData.title} />
          </div>
          <div className="[&>*]:text-title text-white">
            <PortableText value={cmsData.subtitle} />
          </div>
        </div>
        <button
          onClick={onClose}
          className="h-fit w-full rounded-lg border border-white px-6 py-5 text-base font-semibold text-white transition active:bg-white active:text-umain-green"
        >
          {cmsData.buttonLabel}
        </button>
      </div>
    </div>
  );
}
