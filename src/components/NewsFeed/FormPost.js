import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Logo from "../../assets/images/users/avatar-1.jpg";
import Emoji from "../../assets/images/emoji.png";
import Theme from "../../assets/images/theme.png";
import Gallery from "../../assets/images/gallery.png";
import Tag from "../../assets/images/tag.png";
import Emoji2 from "../../assets/images/emoji2.png";
import Location from "../../assets/images/location.png";
import PeopleIcon from "@mui/icons-material/People";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { useState } from "react";
import Audience from "./Audience";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
};

export default function FormPost(props) {
  const [isAudience, setIsAudience] = useState(false)
  const { open, setOpen } = props;

  const handleClose = () => setOpen(false);

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        slotProps={{
          backdrop: {
            timeout: 500,
            sx: {
              backgroundColor: "#FFFFFF",
              opacity: "0.5 !important",
            },
          },
        }}
      >
        <Box sx={style}>
          <div className={`container ${isAudience&&"active"}`}>
            <div className="wrapper">
              <section className="post">
                <header>Create Post</header>
                <form action="#">
                  <div className="content">
                    <img src={Logo} style={{borderRadius:'50%'}} alt="logo" />
                    <div className="details">
                      <p>SocialFI</p>
                      <div onClick={()=>setIsAudience(true)}  className={`privacy `}>
                        <PeopleIcon/>
                        <span>Friends</span>
                        <ArrowDropDownIcon/>
                      </div>
                    </div>
                  </div>
                  <textarea
                    placeholder="What's on your mind, SocialFI?"
                    spellCheck={false}
                    required
                  ></textarea>
                  <div className="theme-emoji">
                    <img src={Theme} alt="theme" style={{width:'28px'}} />
                    <img src={Emoji} alt="smile" />
                  </div>
                  <div className="options">
                    <p>Add to Your Post</p>
                    <ul className="list">
                      <li>
                        <img src={Gallery} alt="gallery" />
                      </li>
                      <li>
                        <img src={Tag} alt="Tag" />
                      </li>
                      <li>
                        <img src={Emoji2} alt="gallery" />
                      </li>
                      <li>
                        <img src={Location} alt="gallery" />
                      </li>
                      <li>
                        <MoreHorizIcon/>
                      </li>
                    </ul>
                  </div>
                  <button>Post</button>
                </form>
              </section>
             <Audience setIsAudience={setIsAudience}/>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}