import React, { useEffect, useRef, useState } from "react";
import TagFacesIcon from "@mui/icons-material/TagFaces";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Social from "../../assets/images/socialFi.jpg";
import BtnLike from "./BtnLike";
import BtnCommon from "./BtnCommon";
import ForumIcon from "@mui/icons-material/Forum";
import TurnedInIcon from "@mui/icons-material/TurnedIn";
import ReplyIcon from "@mui/icons-material/Reply";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import GifBoxIcon from '@mui/icons-material/GifBox';
import SendIcon from '@mui/icons-material/Send';
function NewsItem() {
  const textAreaRef = useRef(null);
  const [val, setVal] = useState();
  const resizeTextArea = () => {
    textAreaRef.current.style.height = "auto";
    textAreaRef.current.style.height = textAreaRef.current.scrollHeight + "px";
  };

  useEffect(resizeTextArea, [val]);
  const onChange = (e) => {
    setVal(e.target.value);
  };
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

      <p className="hastag">#hastag #dhhdh</p>

      <div className="main-image">
        <img src={Social} alt="Social" />
      </div>

      <div className="btn">
        <BtnLike className="btnLike" />
        <BtnCommon
          className="btn-common"
          ComponentIcon={ForumIcon}
          text="Comments"
        />
        <BtnCommon
          className="btn-common"
          ComponentIcon={TurnedInIcon}
          text="2.3K Saved"
        />
        <BtnCommon
          className="btn-common"
          ComponentIcon={ReplyIcon}
          text="1K Share"
        />
      </div>

      <div className="comment-bar ">
        <div className="avatar" style={{ fontSize: "24px !important" }}>
          <TagFacesIcon />
        </div>
        <div className="text-input">
          <textarea
            placeholder="Write a comment..."
            spellCheck={false}
            required
            fullWidth={true}
            ref={textAreaRef}
            value={val}
            onChange={onChange}
            rows={1}
          ></textarea>
          <div className="send-comment">
            <div className="icon">
              <InsertEmoticonIcon />
              <CameraAltIcon />
              <GifBoxIcon/>
            </div>

            <div>
              <SendIcon sx={{fontSize:'28px'}}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewsItem;
