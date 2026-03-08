import Image from "next/image";
import React, { useState, useCallback } from "react";

interface SideBarAppProps {
  id: string;
  icon: string;
  title: string;
  isMinimized: Record<string, boolean>;
  isClose: Record<string, boolean>;
  isFocus: Record<string, boolean>;
  openApp: (id: string) => void;
}

export default function SideBarApp({ 
  id, 
  icon, 
  title, 
  isMinimized, 
  isClose, 
  isFocus, 
  openApp 
}: SideBarAppProps) {
  const [showTitle, setShowTitle] = useState(false);
  const [scaleImage, setScaleImage] = useState(false);

  const scaleImageHandler = useCallback(() => {
    setTimeout(() => {
      setScaleImage(false);
    }, 1000);
    setScaleImage(true);
  }, []);

  const openAppHandler = useCallback(() => {
    if (!isMinimized[id] && isClose[id]) {
      scaleImageHandler();
    }
    openApp(id);
    setShowTitle(false);
  }, [id, isMinimized, isClose, openApp, scaleImageHandler]);

  return (
    <div
      tabIndex={0}
      onClick={openAppHandler}
      onMouseEnter={() => {
        setShowTitle(true);
      }}
      onMouseLeave={() => {
        setShowTitle(false);
      }}
      className={
        (isClose[id] === false && isFocus[id]
          ? "bg-white/10"
          : "") +
        " w-auto p-2 outline-none relative transition hover:bg-white/10 rounded m-1 transition-all duration-150 ease-in-out"
      }
      id={"sidebar-" + id}
    >
      <Image
        width={28}
        height={28}
        className="w-7 h-7"
        src={icon}
        alt="Ubuntu App Icon"
      />
      <Image
        width={28}
        height={28}
        className={
          (scaleImage ? " scale " : "") +
          " scalable-app-icon w-7 h-7 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        }
        src={icon}
        alt=""
      />
      {isClose[id] === false ? (
        <div className=" w-1 h-1 absolute left-0 top-1/2 bg-ub-orange rounded-sm"></div>
      ) : null}
      <div
        className={
          (showTitle ? " visible " : " invisible ") +
          " w-max py-0.5 px-1.5 absolute top-1.5 right-full ml-3 m-1 text-ubt-grey text-opacity-90 text-sm bg-ub-grey/70 border-gray-400/40 border rounded-md"
        }
      >
        {title}
      </div>
    </div>
  );
}
