import React,{useState} from 'react'
import Chart from "./Chart"
import { Search,ChevronDown,ChevronRight,PinAngle,Paperclip,ChatLeftText } from 'react-bootstrap-icons'
import "./Campaign.css"
import img from "../Assert/pic.png";
function CampaignTable() {
  const[show,setShow]=useState(false);
  const[show2,setShow2]=useState(false);
  const clicked=()=>{
    if(show===false){
      setShow(true);
    }else{
      setShow(false);
    }
  }
  const clicked2=()=>{
    if(show2===false){
      setShow2(true);
    }else{
      setShow2(false);
    }
  }
  return (
    <div className="clientContainer">
    <div className="clientChild">
    <div className="clientHeader">
          <div className="clientText">Points Table</div>
          <div className="clientSearch">
            <Search className='search'/>
            <input type="text" placeholder='Search By Name' />
          </div>
        </div>
<div className="compaginheader">
  <p>ID</p>
  <p>Profile</p>
  <p>Date start</p>
  <p>Date End</p>
  <p>Sticky</p>
  <p>Actions</p>
</div>

<div className="compaginrow">
  <p className='IDcamp' >001CL</p>
  <p className='clientimg' > <div className="img"><img src={img} alt="client" /></div> <span onClick={clicked2} > {show2?<ChevronDown className='crew' />:<ChevronRight/> }  </span> </p>
  <p>07/05/2022</p>
  <p>07/05/2023</p>
  <p><PinAngle className='pin' /></p>
  <p className='chatclip' > <span  className='chat' > <ChatLeftText /> </span>  <span className='clip' ><Paperclip /></span> </p>
</div>

<div className={show2?"compaginclientinfo":"none"}>
  <div className="compaginleft">
<p>Type</p>
<div className="promotion">
  <p >Promotion</p>
  <p onClick={clicked} > {show? <ChevronDown/>:<ChevronRight/>}  </p>
</div>
<div className={show?"grapharea":"none"}>
  <div className="leftgraph">
<p>Number Of Displayed</p>
<div className="activeinactive">
  <div className="activespace">
    <div className="activecolor"></div>
    <p className='activetext' >Active Users</p>
  </div>
  <div className="inactive">
  <div className="inactivecolor"></div>
    <p className='activetext' >Inactive Users</p>
  </div>
</div>
<div className="charts">
<Chart/>
</div>

  </div>
  <div className="rightgraph">

  <p>Number Of Clicked</p>
<div className="activeinactive">
  <div className="activespace">
    <div className="activecolor"></div>
    <p className='activetext' >Clicked Users</p>
  </div>
  <div className="inactive">
  <div className="inactivecolor"></div>
    <p className='activetext' >Unclicked Users</p>
  </div>
</div>
<div className="charts">
<Chart/>
</div>
  </div>
</div>



  </div>

{/* ////rightside */}
  <div className="compaginright">
<p>Distribution List</p>
<div className="all">
  <p>All</p>
  <p><ChevronDown/></p>
</div>

  </div>
</div>
    </div></div>
  )
}

export default CampaignTable