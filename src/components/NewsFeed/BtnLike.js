import React from 'react'
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
function BtnLike(props) {
    const {className} = props
  return (
    <div className={className}>
      <ThumbUpOffAltIcon/>  72K Liked
    </div>
  )
}

export default BtnLike