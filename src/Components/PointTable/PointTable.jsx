import React from 'react'
import { Search,Trash } from 'react-bootstrap-icons'
import "./PointTable.css"
function PointTable() {
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

<div className="pointTable">
<p>ID</p>
<p>Points</p>
<p>Reason</p>
<p>Date Added</p>
<p>Date of Redeemed</p>
<p>Date of Expired</p>

</div>
<div className="pointTablerow">
  <p className='idcolor'>001CL</p>
  <p >569</p>
  <p>Referred a friend</p>
  <p>15/06/2002</p>
  <p>02/02/2022</p>
  <p>04/05/2023 </p>
 
<span><Trash className='pointtrachicon' /></span>
</div>
    </div></div>
  )
}

export default PointTable