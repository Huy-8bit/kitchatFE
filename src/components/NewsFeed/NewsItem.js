import React from "react";
import TagFacesIcon from "@mui/icons-material/TagFaces";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Social from "../../assets/images/socialFi.jpg"
import BtnLike from "./BtnLike";
import BtnCommon from "./BtnCommon";
import ForumIcon from '@mui/icons-material/Forum';
import TurnedInIcon from '@mui/icons-material/TurnedIn';
import ReplyIcon from '@mui/icons-material/Reply';
function NewsItem() {
  return (
    <div className="item-news">
      <div className="first">
        <div className="left">
          <div className="icon">
            <TagFacesIcon />
          </div>
          <div className="name">
            <div>Name</div>
            <div>CreatedAt</div>
          </div>
        </div>

        <div className="right">
          <MoreHorizIcon />
        </div>
      </div>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod
        tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam,
        nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit
        in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
      </p>

      <p className="hastag">
        #hastag #dhhdh
      </p>

      <div className="main-image">
          <img src={Social} alt="Social"/>
      </div>

      <div className="btn">
          <BtnLike className="btnLike"/>
          <BtnCommon className="btn-common" ComponentIcon={ForumIcon} text="Comments"/>
          <BtnCommon className="btn-common" ComponentIcon={TurnedInIcon} text="2.3K Saved"/>
          <BtnCommon className="btn-common" ComponentIcon={ReplyIcon} text="1K Share"/>
          
      </div>


    </div>
  );
}

export default NewsItem;
