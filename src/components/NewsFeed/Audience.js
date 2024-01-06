import React from 'react'
import PublicIcon from '@mui/icons-material/Public';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
function Audience(props) {
    const{setIsAudience} = props
  return (
    <section className="audience">
                <header>
                  <div onClick={()=>setIsAudience(false)} className="arrow-back">
                   <ArrowBackIcon/>
                  </div>
                  <p>Select Audience</p>
                </header>
                <div className="content">
                  <p>Who can see your post?</p>
                  <span>
                    Your post will show up in News Feed, on your profile and in
                    search results.
                  </span>
                </div>
                <ul className="list">
                  <li>
                    <div className="column">
                      <div className="icon">
                        <PublicIcon/>
                      </div>
                      <div className="details">
                        <p>Public</p>
                        <span>Anyone on or off Facebook</span>
                      </div>
                    </div>
                    <div className="radio"></div>
                  </li>
                  {/* Add similar li elements for other options */}
                </ul>
              </section>
  )
}

export default Audience