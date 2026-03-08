import Image from "next/image";
import React from "react";

interface UbuntuAppProps {
  id: string;
  name: string;
  icon: string;
  openApp: (id: string) => void;
}

export default function UbuntuApp({ id, name, icon, openApp }: UbuntuAppProps) {
  const handleOpenApp = () => {
    openApp(id);
  };

  return (
    <div
      className="p-1 m-px z-10 bg-white/0 hover:bg-white/20 focus:bg-ub-orange/50 focus:border-yellow-700 border border-transparent outline-none rounded select-none w-24 h-20 flex flex-col justify-start items-center text-center text-xs font-normal text-white transition-all duration-150 ease-in-out"
      id={`app-${id}`}
      onDoubleClick={handleOpenApp}
      tabIndex={0}
    >
      <Image
        width={40}
        height={40}
        className="mb-1 w-10 h-10"
        src={icon}
        alt={`Ubuntu ${name}`}
      />
      {name}
    </div>
  );
}
