import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './Chat.css';
const Ask = ({text1,text2,text3}) => {
  const [text4,setText4]=useState("");
  const [text5,setText5]=useState("");
  const [text6,setText6]=useState("");
  const [text7,setText7]=useState("");
  const navigate=useNavigate();
  return (
    <div className='box'>
        <div className='heading'>
          <h1>Identify pain points and future aspirations</h1>
        </div>
        <div className='inputs'>
        <label>What real-world problems do your audience face?</label>
          <input type='text' placeholder='Teachers, Doctors , Dietician' value={text4} onChange={(e)=>setText4(e.target.value)} />
          <label>What emotional challenges do your audience go through?</label>
          <input type='text' placeholder='Eg- 22,23' value={text5} onChange={(e)=>setText5(e.target.value)} />
          <label>What concrete goals do your clients want to achieve?</label>
          <input type='text' placeholder='Give me diet chart' value={text6} onChange={(e)=>setText6(e.target.value)} />
          <label>What positive emotions are your clients looking for?</label>
          <input type='text' placeholder='Give me diet chart' value={text7} onChange={(e)=>setText7(e.target.value)} />
          <div className='btns'>
            <button className='prev' onClick={()=>navigate('/chats')}> Prev</button>
          <button className='next' onClick={()=>navigate('/auth')}>Next</button>
          </div>
        </div>
    </div>
  )
}

export default Ask