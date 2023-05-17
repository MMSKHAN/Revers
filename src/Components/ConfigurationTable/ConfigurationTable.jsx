import React,{useState,useEffect} from 'react'
import { ArrowLeftRight } from 'react-bootstrap-icons'
import "./Config.css"
function ConfigurationTable() {
    const[values,setValues]=useState({
        Birthday:"Birthday Before Days",
        Referral:4566,
        Refer:"Type the Text that you want refer",
        Check:456,
        PointsRefer:456,
        PointsReview:876,
        Treatment:"Yes",
        BirthdayAfterDays:"Birthday After Days",
        ReferLink:"Paste the link you refer",
        ReferSend:800,
        ReferCheckin:678,




    })
    ///convertion
    const[pts,setpts]=useState(false)
    const[dollar,setDollar]=useState(false);
    const[currency1,setCurrency1]=useState(0);
    const[currencu2,setCurrency2]=useState(0);
    const conversion=()=>{
      if(pts===false){
        setDollar(true)
      setpts(true)
      }else{
        setDollar(false)
        setpts(false)
      }
    }
   let val=currency1
  //  let val2=currencu2
    useEffect(()=>{
        setValues(true);
        setCurrency2(val*0.000866)
        // setCurrency2(val2*1155.1559)
      
    },[val])
  return (
    <div className="clientContainer">
    <div className="clientChild">
    <div className="clientHeader">
          <div className="clientText">Configuration Table</div>
        </div>
        <div className="clientbody">
<div className="clientbodylieft">
<p>Redeem conversion</p>
<div className="converter">
{/* { pts? <Currency2 doll={dollar} setdol={(e)=>{setDollar(e.target.value)}} />:<Currency1/>} */}
{pts?( <p className='configbtn' > <span>pts</span> <input type="text" placeholder='dollar'value={currencu2} onChange={(e)=>{setCurrency2(e.target.value)}} /></p>):( <p className='configbtn' ><input type="text" placeholder='pts' value={currency1} onChange={(e)=>{setCurrency1(e.target.value)}} /></p>)}

    <p onClick={conversion} ><ArrowLeftRight className='arrowsize'/>  </p>
   {/* {dollar?<Currency1/>:<Currency2 pt={pts} setpt={(e)=>{setpts(e.target.value)}} />} */}
   {dollar?(<p className='configbtn' ><input type="text" placeholder='pts' value={currency1} onChange={(e)=>{setCurrency1(e.target.value)}}  /></p>):( <p className='configbtn' ><input type="text" placeholder='dollar'value={currencu2} onChange={(e)=>{setCurrency2(e.target.value)}} /></p>)}
</div>
<p>Birthday Before Days</p>
<div className='configbox' >
    <input type="text" value={values.Birthday} />
</div>
<p>Default Referral Code</p>
<div className='configbox'><input type="number"value={values.Referral} /></div>
<p>Refer Text</p>
<div className='configbox' ><input type="text"value={values.Refer} /></div>
<p>Points Check In</p>
<div className='configbox' ><input type="number"value={values.Check} /></div>
<p>Points Refer Recieve</p>
<div className='configbox' ><input type="number"value={values.PointsRefer} /></div>
<p>Points Review</p>
<div className='configbox' ><input type="number"value={values.PointsReview} /></div>
</div>

<div className="clientbodyright">
<p>Display Treatment</p>
<div className='configbox' ><input type="text"value={values.Treatment} /></div>
<p>Birthday After Days</p>
<div className='configbox'><input type="text"value={values.BirthdayAfterDays} /></div>
<p>Refer Image</p>
<div className='configbox files' >
<p>Select Image</p>
<label for="inputTag" className='fileuplod' >
  choose
  <input id="inputTag" type="file"/>
</label>
</div>
<p>Refer Link</p>
<div className='configbox' ><input type="text"value={values.ReferLink} /></div>
<p>Points for refer Send</p>
<div className='configbox' ><input type="number"value={values.ReferSend} /></div>
<p>Points Refer Checkin</p>
<div className='configbox' ><input type="number"value={values.ReferCheckin} /></div>
</div>
        </div>

    </div></div>
  )
}

export default ConfigurationTable