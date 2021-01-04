import React from "react";
import Button from "./Button";
import Download from "../images/download.jpg";
import "./SidebarInstall.css";

function SidebarInstall() {
  return (
    <div className="sidebar-install">
      {/* <div className="sidebar-install__content"> */}
      <img src={Download} alt="" className="sidebar-install__image" />
      <span className="sidebar-install-text sidebar-install-text--bold title">
        Get our free app
      </span>
      <span className="sidebar-install-text sidebar-install-text--bold sub-title">
        Seamlessly listen to music you love. Download the Spotify app for your
        computer.
      </span>
      <Button
        isDownloadButton={true}
        link="https://www.spotify.com/ph/download/windows/b/"
        title="DOWNLOAD DESKTOP APP"
      />
      {/* </div> */}
    </div>
  );
}

export default SidebarInstall;
