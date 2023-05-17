import React from 'react'
import { Search } from 'react-bootstrap-icons';
import img from "../Assert/pic.png"
import "./Active.css";
function Activities() {
  return (
    <div className="clientContainer">
    <div className="clientChild">
    <div className="clientHeader">
          <div className="clientText">Activity Table</div>
          <div className="clientSearch">
            <Search className='search'/>
            <input type="text" placeholder='Search By Name' />
          </div>
        </div>

<div className="ActiveTable">
<p style={{textAlign:"center",width:"80px"}} >Client</p>
<p style={{textAlign:"center",width:"80px"}}>Date</p>
<p style={{textAlign:"center",width:"80px"}}>Time</p>
<p style={{textAlign:"center",width:"80px"}}>Activity</p>

</div>
<div className="pointTablerow ">

  <div className="PointClientimg" style={{textAlign:"center",width:"100px"}}>
      <img src={img} alt="" />
      <p style={{textAlign:"center",width:"80px"}} >Andrew</p>
    </div>
  <p style={{textAlign:"center",width:"80px"}}>02/02/2022</p>
  <p style={{textAlign:"center",width:"80px"}}>05:36 PM</p>
  <p style={{textAlign:"center",width:"80px"}}>Checked In</p>

</div>
    </div></div>
    
    )
}

export default Activities