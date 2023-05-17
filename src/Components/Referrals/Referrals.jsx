import React from 'react'
import { Search } from 'react-bootstrap-icons'
function Referrals() {
  return (
    <div className="clientContainer">
    <div className="clientChild">
    <div className="clientHeader">
          <div className="clientText">Referrals</div>
          <div className="clientSearch">
            <Search className='search'/>
            <input type="text" placeholder='Search By Name' />
          </div>
        </div>

<div className="pointTable">
<p>ID</p>
<p>Referrer Id</p>
<p>Referred Name</p>
<p>Phone No</p>
<p>Referred date </p>
<p>Sign In date</p>
<p>Visit date</p>
</div>
<div className="pointTablerow">
  <p className='idcolor'>001CL</p>
  <p >56459</p>
  <p>Chris</p>
  <p>03554250211</p>
  <p>02/02/2022</p>
  <p>04/05/2023 </p>
  <p>04/05/2023</p>
</div>
    </div></div>
  )
}

export default Referrals