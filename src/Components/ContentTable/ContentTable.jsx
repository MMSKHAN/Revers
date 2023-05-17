import React from 'react'
import "./Content.css";
import per from "../Assert/percentage.png"
import tato from "../Assert/tato.png";
import { PlusCircle } from 'react-bootstrap-icons';
function ContentTable() {
  return (
    <div className="clientContainer">
    <div className="clientChild">
    <div className="clientHeader">
          <div className="clientText">Content Table</div>
          <div className="Addnew">Add New</div>
        </div>
        <div className="row">
          <div className="col-sm-6">
          <div class="card cards">
  <img class="card-img-top" src={tato} alt="Card images cap"/>
  <div class="card-body">
    <div class="card-title"><span>TATTOO REMOVAL PORTLAND</span> <span className='editbtn' >Edit</span>  </div>
    <div class="card-text">
    <div className="price"> <p>Price</p><span> <p className='price2' >As low as $113/mo <img src={per} alt="percentage pic" /><span>Cherry</span> </p> </span>    </div>
<p className='discription1'>Rivière Med Spa and get your unwanted tattoo removed with our latest Q-switched Laser technology. We have brand-new state of the art equipment and well-trained caring staff for all your skin treatment needs. Moreover, we offer complimentary consults so just call us to understand your options.</p>
    <h6>  What’s Included</h6>
    <div className="div1"><p>Duration </p><p>30-60 mins</p></div>
    <div className="div1"><p>Result Day</p><p>2 days</p></div>
    <div className="div1"><p>Pain Level </p><p>4/5</p></div>
    <div className="div1"><p>Treatment Areas</p><p> Full Body</p></div>
   <h6>Description</h6>
    <div className="discription2"> Lorem ipsum dolor sit amet consectetur. Pretium risus vel quis tempor sed cursus duis. Nec lectus viverra imperdiet risus mauris ultrices sit. Sit amet at semper massa non. In sed tempus faucibus venenatis dignissim faucibus. Gravida diam ornare arcu quis non amet massa. </div>

    </div>
  </div>
</div>



          </div>
          <div className="col-sm-6  space">
            <div className="cards">
            <label for="inputTag" className='fileuplods' >
  <PlusCircle className='plus'/>
  <input id="inputTag" type="file"/>
</label>
            </div>
            <div className="save">save</div>
          </div>
        </div>
       
    </div></div>
  )
}

export default ContentTable