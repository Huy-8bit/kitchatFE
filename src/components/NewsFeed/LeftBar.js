import React from "react";
import MenuPage from "./MenuPage";
import HomeIcon from "@mui/icons-material/Home";
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
        <MenuPage Icon={HomeIcon} name={"Home"} />
        <MenuPage Icon={HomeIcon} name={"Home"} />
        <MenuPage Icon={HomeIcon} name={"Home"} />
        <MenuPage Icon={HomeIcon} name={"Home"} />
      </div>

      <div></div>
    </div>
  );
}

export default LeftBar;
