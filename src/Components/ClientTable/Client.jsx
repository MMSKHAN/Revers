import React,{useState }from 'react'
import { Search,ChevronRight,Trash,PencilSquare,ChevronDown,ChevronDoubleLeft,ChevronDoubleRight } from 'react-bootstrap-icons';
import img from "../Assert/pic.png"
import "./Client.css"
function Client() {
  const [show,setShow]=useState(false);
  const [clientbody,setClientbody]=useState(false)
  const[check,setCheck]=useState(false)
  const [values,setValues]=useState({
    lastview:"05/05/2022",
    reedme:"678",
    referd:"45",
    active:"yes",
    visits:"60",
    shared:"56",
    signed:"13",
    lsttreatment:"03/03/2022",
  })
  const checkbox=()=>{
if(check===false){
  setCheck(true)
}else{
  setCheck(false)
}
  }
  const clicked=()=>{
    if(show===false){
      setShow(true)
      setValues(true)
      setClientbody(true)
      setCheck(true)
    }else{
      setShow(false)
      setCheck(false)
      setClientbody(false)
    }
  }
  return (
    <div className="clientContainer">
<div className="clientChild">
<div className="clientHeader">
      <div className="clientText">Client Table</div>
      <div className="clientSearch">
        <Search className='search'/>
        <input type="text" className='searchs' placeholder='Search By Name' />
      </div>
    </div>


    <div className="clientbody">
  <div className="tableheader">
  <p className='size' >Clients</p>
  <p className='size'>First Name</p>
  <p className='size'>Last name</p>
  <p className='size' >DOB</p>
  <p className='size' >Phone No</p>
  <p className='size' >Total Points</p>
  <p className='size2' >Member of status</p>
  
  <p></p>
  </div>
</div>


<div className={check?"info color ":"info"}>
  <div className="clientimgSection ">
    <input type="checkbox"onClick={checkbox} />
    <div className="clientimg">
      <img src={img} alt="" />
    </div>
    <div onClick={clicked}>{show? <ChevronDown/>:<ChevronRight/>}</div>
   
  </div>
  <p   className='clienttext size ' >Andrew</p>
  <p  className='clienttext size '>Jullia</p>
  <p  className='clienttext size'>05/03/2002</p>
  <p  className='clienttext  size'>+92355425211</p>
  <p  className='clienttext   size' >800</p>
  <p  className='clienttext size ' >Silver</p>

  <p className='clienticons'>
    <PencilSquare/>
    <Trash/>
  </p>
</div>
<div className={clientbody?"clientbody":"none"} >
<div className="clientbodyleft">
  <p className='clientbodyhead'>Last Visited</p>
  <input type="text"  className='clientbodytext' value={values.lastview} />
  <p className='clientbodyhead' >Number of Points Reedmeed</p>
  <input type="number"  className='clientbodytext' value={values.reedme} />
  
  <p className='clientbodyhead' >Number of friend referred</p>
  <input type="number"  className='clientbodytext' value={values.referd} />
 
  <p className='clientbodyhead' >Birthday Bonus Active</p>
  <input type="text"  className='clientbodytext' name="" id="" value={values.active} />

</div>
<div className="clientbodyright">
<p className='clientbodyhead' >Number of Visits</p>
<input type="number" className='clientbodytext'  value={values.visits} />

<p className='clientbodyhead' >Number of deal Shared</p>
<input type="number" className='clientbodytext'  value={values.shared} />

<p className='clientbodyhead' >Number of friend Signed</p>
<input type="number" className='clientbodytext'  value={values.signed} />
<p className='clientbodyhead' >Last Treatment</p>
<input type="text" className='clientbodytext'  value={values.lsttreatment} />
</div>
</div>
<div className="pagination">
<div className="leftpge"><ChevronDoubleLeft/></div>
<div className="pg1">1</div>
<div className="pg1">2</div>
<div className="pg1">3</div>
<div className="pg1">4</div>
<div className="pg1">...</div>
<div className="rightpge"><ChevronDoubleRight/></div>
</div>
</div></div>
    
  )
}

export default Client