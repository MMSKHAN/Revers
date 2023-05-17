import React from 'react'
import img from "../Assert/try.png";
import "./Treatment.css"
function Treatments() {
  return (
    <div className="clientContainer">
    <div className="clientChild">
    <div className="clientHeader">
          <div className="clientText">Treatments</div>
          
        </div>
        <div className="row">
          <div className="col-sm-4">
          <div class="card">
  <img class="card-img-top" src={img} alt="pic"/>
  <div class="card-body">
    <p class="card-title">Fat Reduction</p>
    <p class="card-text">Fat reduction is the process of reducing the amount of body fat in an individual. This can be achieved through a combination of diet and exercise, as well as various medical procedures and treatments.</p>
    <p>Number of Clicks: <span>456</span> </p>
  </div>
</div>
          </div>
          <div className="col-sm-4">
          <div class="card">
  <img class="card-img-top" src={img} alt="pic"/>
  <div class="card-body">
    <p class="card-title">Fat Reduction</p>
    <p class="card-text">Fat reduction is the process of reducing the amount of body fat in an individual. This can be achieved through a combination of diet and exercise, as well as various medical procedures and treatments.</p>
    <p>Number of Clicks: <span>456</span> </p>
  </div>
</div>
          </div>
          <div className="col-sm-4">
          <div class="card">
  <img class="card-img-top" src={img} alt="pic"/>
  <div class="card-body">
    <p class="card-title">Fat Reduction</p>
    <p class="card-text">Fat reduction is the process of reducing the amount of body fat in an individual. This can be achieved through a combination of diet and exercise, as well as various medical procedures and treatments.</p>
    <p>Number of Clicks: <span>456</span> </p>
  </div>
</div>
          </div>
        
        </div>
    </div></div>
  )
}

export default Treatments