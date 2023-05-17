import React from 'react'
// import bell from "../Assert/bell.png"
import { Bell,BoxArrowRight } from 'react-bootstrap-icons'
import avatar from "../Assert/Avatar.png"
// import right from "../Assert/right logo.png"
import "./Topbar.css";
function TopBar() {
  return (
    <div className="containers">
        <div className="top">
        <div className="left">
            <p className='name' >Reyan Aryan</p>
            <p className='time' >4:45 pm 17 Feb 2023</p>
        </div>
        <div className="right">
          <div className="righting">
<Bell className='bell'/>
<div className="img">
<img src={avatar} className='avatar' alt="avatar" />
</div>
<BoxArrowRight className='bell'/>
        </div></div>
    </div></div>
  )
}

export default TopBar