import React from 'react'
import CropOriginalIcon from '@mui/icons-material/CropOriginal';
import InsertLinkIcon from '@mui/icons-material/InsertLink';
import InstagramIcon from '@mui/icons-material/Instagram';
import TagFacesIcon from '@mui/icons-material/TagFaces';
function PostNews() {
  return (
    <div className='post-news'>
        <div className='first'>
            <div className='img'>
                <CropOriginalIcon sx={{fontSize:'28px',color:'black'}}/>
            </div>

                <input className='input' placeholder='What’s on your mind?'/>
        </div>

        <div className='second'>
            <div className='icon'>
                <CropOriginalIcon sx={{fontSize:'28px',color:'silver'}}/>
                <InsertLinkIcon sx={{fontSize:'28px',color:'silver'}}/>
                <InstagramIcon sx={{fontSize:'28px',color:'silver'}}/>
                <TagFacesIcon sx={{fontSize:'28px',color:'silver'}}/>
            </div>
            <button>Post</button>
        </div>
    </div>
  )
}

export default PostNews