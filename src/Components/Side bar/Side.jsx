import React from 'react'
import Sidearray from './Sidearray.jsx';
import logo from "../Assert/logo.png"
import "./Sidebar.css"
import { NavLink } from 'react-router-dom';
function Side() {
  return (
    <>
    <div className="container">
        
            <div className="logo">
               <img src={logo} alt="logo" />
            </div>
            <div className="content">
           {
           Sidearray.map((items)=>{
            return(<>
            <NavLink activeClassName="active" to={items.to} className='navicons'>
              
                    <div className="icons"><img src={items.icons} alt="icons" /></div>
                    <div className="text">{items.text}</div>
                    </NavLink>
                    </>   )  })}
                
            </div>
        </div>
   
    </>
  )
}

export default Side