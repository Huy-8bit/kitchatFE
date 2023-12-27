import React, { useState } from "react";
import CropOriginalIcon from "@mui/icons-material/CropOriginal";
import InsertLinkIcon from "@mui/icons-material/InsertLink";
import InstagramIcon from "@mui/icons-material/Instagram";
import TagFacesIcon from "@mui/icons-material/TagFaces";
import FormPost from "./FormPost";
function PostNews() {
  const [openModal, setOpenModal] = useState(false);
  return (
    <>
    <FormPost open={openModal} setOpen={setOpenModal}/>
      <div className="post-news">
        <div className="first">
          <div className="img">
            <CropOriginalIcon sx={{ fontSize: "28px", color: "black" }} />
          </div>

          <input onClick={()=>setOpenModal(true)} className="input" placeholder="What’s on your mind?" />
        </div>

        <div className="second">
          <div className="icon">
            <CropOriginalIcon sx={{ fontSize: "28px", color: "silver" }} />
            <InsertLinkIcon sx={{ fontSize: "28px", color: "silver" }} />
            <InstagramIcon sx={{ fontSize: "28px", color: "silver" }} />
            <TagFacesIcon sx={{ fontSize: "28px", color: "silver" }} />
          </div>
          <button>Post</button>
        </div>
      </div>
    </>
  );
}

export default PostNews;
