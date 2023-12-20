import React from "react";
import TagFacesIcon from "@mui/icons-material/TagFaces";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
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
    </div>
  );
}

export default NewsItem;
