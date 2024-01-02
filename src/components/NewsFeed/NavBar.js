import React from "react";
import ChatIcon from "@mui/icons-material/Chat";
import NightsStayIcon from "@mui/icons-material/NightsStay";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SearchIcon from "@mui/icons-material/Search";
import WbSunnyIcon from "@mui/icons-material/WbSunny";

function NavBar() {
  return (
    <div className="frame">
      <div className="div">
        <SearchIcon className="icon-instance-node" />
        <div className="text-wrapper">Search City....</div>
      </div>
      <div className="div-2">
        <div className="div-3">
          <div className="vuesax-bulk-moon-wrapper">
            <NightsStayIcon className="icon-instance-node-2" />
          </div>
          <div className="vuesax-bulk-sun-wrapper">
            <WbSunnyIcon className="icon-instance-node-2" />
          </div>
        </div>
        <div className="div-4">
          <div className="div-5">
            <NotificationsIcon className="icon-instance-node" />
          </div>
          <div className="div-5">
            <ChatIcon className="icon-instance-node" />
            <div className="div-wrapper">
              <div className="text-wrapper-2">3</div>
            </div>
          </div>
          <div className="rectangle" />
        </div>
      </div>
    </div>
  );
}

export default NavBar;
