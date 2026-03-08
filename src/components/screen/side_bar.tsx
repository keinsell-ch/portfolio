import { useState } from "react";
import Image from "next/image";
import SideBarApp from "../base/side_bar_app";

interface SideBarProps {
  apps: { id: string; title: string; icon: string }[];
  favourite_apps: Record<string, boolean>;
  closed_windows: Record<string, boolean>;
  focused_windows: Record<string, boolean>;
  openAppByAppId: (id: string) => void;
  isMinimized: Record<string, boolean>;
  hide: boolean;
  hideSideBar: (id: string | null, hide: boolean) => void;
  showAllApps: () => void;
  allAppsView: boolean;
}

const renderApps = (props: SideBarProps): React.ReactElement[] => {
  const sideBarAppsJsx: React.ReactElement[] = [];
  props.apps.forEach((app, index: number) => {
    if (props.favourite_apps[app.id] === false) return;
    sideBarAppsJsx.push(
      <SideBarApp
        key={index}
        id={app.id}
        title={app.title}
        icon={app.icon}
        isClose={props.closed_windows}
        isFocus={props.focused_windows}
        openApp={props.openAppByAppId}
        isMinimized={props.isMinimized}
      />
    );
  });
  return sideBarAppsJsx;
};

export default function SideBar(props: SideBarProps) {
  function showSideBar() {
    props.hideSideBar(null, false);
  }

  function hideSideBar() {
    setTimeout(() => {
      props.hideSideBar(null, true);
    }, 2000);
  }

  return (
    <>
      <div
        className={
          (props.hide ? " translate-x-full " : "") +
          " absolute transform duration-300 select-none z-40 right-0 top-0 h-full pt-7 w-auto flex flex-col justify-start items-center border-black/60 bg-black/50"
        }
      >
        {Object.keys(props.closed_windows).length !== 0
          ? renderApps(props)
          : null}
        <AllApps showApps={props.showAllApps} />
      </div>
      <div
        onMouseEnter={showSideBar}
        onMouseLeave={hideSideBar}
        className={"w-1 h-full absolute top-0 right-0 bg-transparent z-50"}
      ></div>
    </>
  );
}

interface AllAppsProps {
  showApps: () => void;
}

export function AllApps(props: AllAppsProps) {
  const [title, setTitle] = useState(false);

  return (
    <div
      className={`w-10 h-10 rounded m-1 hover:bg-white/10 flex items-center justify-center transition-all duration-150 ease-in-out`}
      style={{ marginTop: "auto" }}
      onMouseEnter={() => {
        setTitle(true);
      }}
      onMouseLeave={() => {
        setTitle(false);
      }}
      onClick={props.showApps}
    >
      <div className="relative">
        <Image
          width={28}
          height={28}
          className="w-7 h-7"
          src="/images/system/view-app-grid-symbolic.svg"
          alt="Ubuntu view app"
        />
        <div
          className={
            (title ? " visible " : " invisible ") +
            " w-max py-0.5 px-1.5 absolute top-1 left-full ml-5 text-ubt-grey/90 text-sm bg-ub-grey/70 border border-gray-400/40 rounded-md"
          }
        >
          Show Applications
        </div>
      </div>
    </div>
  );
}
