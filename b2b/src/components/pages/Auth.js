import React, { useState } from 'react'
import './Chat.css';
import { useNavigate } from 'react-router-dom';
const Auth = ({text1,text2,text3,text4,text5,text6,text7}) => {
    const navigate=useNavigate();
    const [text8,setText8]=useState("");
    const [text9,setText9]=useState("");
  return (
    <div className='box'>
    <div className='heading'><h1>USP and Bold Promise</h1></div>
    <div className='inputs'>
    <label>What makes your coaching stand out? Do you use a specific strategy, a proven framework?</label>
    <input type='text' placeholder='i am a dietician' value={text8} onChange={(e)=>setText8(e.target.value)} />
    <label>What outstanding results can your clients expect in what span of time?</label>
   <input placeholder='they will be fit' value={text9} onChange={(e)=>setText9(e.target.value)}/>
   <div className='btns'>
    <button className='prev' onClick={()=>navigate('/ask')}>prev</button>
    <button className='next'>Create</button>
   </div>
  </div>
    </div>
  )
}

export default Auth