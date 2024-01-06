import React from "react";
import MenuPage from "./MenuPage";
import HomeIcon from "@mui/icons-material/Home";
import FeedIcon from '@mui/icons-material/Feed';
import ExploreIcon from '@mui/icons-material/Explore';
import StorefrontIcon from '@mui/icons-material/Storefront';
import GroupIcon from '@mui/icons-material/Group';
import Shortcut from "./Shortcut";
function LeftBar() {
  return (
    <div className="left-bar">
      <div className="top">
        <div className="logo">
          <img
            src="https://logos-world.net/wp-content/uploads/2020/05/Facebook-Logo.png"
            alt="aaa"
          />
        </div>
        <div className="profile">
          <div>
            <img
              src="https://png.pngtree.com/png-vector/20191101/ourmid/pngtree-cartoon-color-simple-male-avatar-png-image_1934459.jpg"
              alt="aaaa"
            />
          </div>
          <p>John Done</p>
        </div>
      </div>
      <div className="container-center">
        <MenuPage classNameProps={'active'} Icon={HomeIcon} name={"Home"} />
        <MenuPage Icon={HomeIcon} name={"Home"} />
        <MenuPage Icon={FeedIcon} name={"Latest"} />
        <MenuPage Icon={ExploreIcon} name={"Explore"} />
        <MenuPage Icon={StorefrontIcon} name={"Marketplace"} />
        <MenuPage Icon={GroupIcon} name={"Group"} />
      </div>

      <div>
        <p style={{fontSize:"16px",marginBottom:'24px'}}>Your Shortcut</p>
        <Shortcut/>
      </div>
    </div>
  );
}

export default LeftBar;
