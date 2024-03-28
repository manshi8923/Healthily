import React, { useState } from 'react'
import axios from 'axios';
import toast from "react-hot-toast";
import {Link} from 'react-router-dom';
import {
  Box,
  Typography,
  useTheme,
  useMediaQuery,
  TextField,
  Button,
  Alert,
  Collapse,
  Card,
} from "@mui/material";

import { useNavigate } from 'react-router-dom';
import './Chat.css';
import Ask from './Ask';
const Chat = () => {
  const [text1,setText1]=useState("");
  const [text2,setText2]=useState("");
  const [text3,setText3]=useState("");
  const [text4,setText4]=useState("");
  const [text5,setText5]=useState("");
  const [text6,setText6]=useState("");
  const [text7,setText7]=useState("");
  const [text8,setText8]=useState("");
  const [text9,setText9]=useState("");
  const [loading,setLoading]=useState(false);
  const navigate=useNavigate();
  const theme = useTheme();
 

  const isNotMobile = useMediaQuery("(min-width: 1000px)");
  // states
  const [response, setResponse] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    setLoading(true);
    const text=`I am a Dietician and i want to create a diet plan for my patient
     who is a ${text1} of age ${text2}, My patient goes through ${text4} challenges
      daily and faces ${text5} emotional challenges on normal basis and they want to
       achieve ${text6} goals. Also the person is looking for attaining ${text7} positive emotions.
        I want a course chart to be prepared for my patient with ${text3} specialization.
         I use ${text8} as a strategy which is proven  framework that makes my course chart stand out.
          Directly give the diet chart for the patient so he can achieve his goals in exact ${text9} days. 
         Make sure the diet chart is divided into 5 phases and separate each phase with ###.`
    e.preventDefault();
    try {
      const { data } = await axios.post("/api/v1/openai/chatbot", { text });
      console.log(data);
      setResponse(data);
    } catch (err) {
      console.log(error);
      if (err.response.data.error) {
        setError(err.response.data.error);
      } else if (err.message) {
        setError(err.message);
      }
      setTimeout(() => {
        setError("");
      }, 5000);
    }
  };
  
  return (
    <div className='box'>
        <div className='heading'>
          <h1>Understading Your Audience</h1>
        </div>
        <div className='inputs'>
        <label>What do your audience do for a living ?</label>
          <input type='text' placeholder='Teachers, Doctors , Dietician' value={text1} onChange={(e)=>setText1(e.target.value)} />
          <label>How old is your typical client?</label>
          <input type='text' placeholder='Eg- 22,23' value={text2} onChange={(e)=>setText2(e.target.value)} />
          <label>What is the main area this course will specialize in?</label>
          <input type='text' placeholder='Give me diet chart' value={text3} onChange={(e)=>setText3(e.target.value)} />
          <label>What real-world problems do your audience face?</label>
          <input type='text' placeholder='Teachers, Doctors , Dietician' value={text4} onChange={(e)=>setText4(e.target.value)} />
          <label>What emotional challenges do your audience go through?</label>
          <input type='text' placeholder='Eg- 22,23' value={text5} onChange={(e)=>setText5(e.target.value)} />
          <label>What concrete goals do your clients want to achieve?</label>
          <input type='text' placeholder='Give me diet chart' value={text6} onChange={(e)=>setText6(e.target.value)} />
          <label>What positive emotions are your clients looking for?</label>
          <input type='text' placeholder='Give me diet chart' value={text7} onChange={(e)=>setText7(e.target.value)} />
          <label>What makes your coaching stand out? Do you use a specific strategy, a proven framework?</label>
          <input type='text' placeholder='i am a dietician' value={text8} onChange={(e)=>setText8(e.target.value)} />
          <label>What outstanding results can your clients expect in what span of time?</label>
          <input placeholder='they will be fit' value={text9} onChange={(e)=>setText9(e.target.value)}/>
          <div className='btns'>
          <button className='next'onClick={handleSubmit}>Create</button>
          </div>
          {loading
          ? <Box
          width={isNotMobile ? "40%" : "80%"}
          p={"2rem"}
          m={"2rem auto"}
          borderRadius={5}
          sx={{ boxShadow: 5 }}
          backgroundColor={theme.palette.background.alt}
        >
          <Collapse in={error}>
            <Alert severity="error" sx={{ mb: 2 }}>
              {error}
            </Alert>
          </Collapse>
          <form>
            <Typography mt={2}>
              not this tool ? <Link to="/">GO BACK</Link>
            </Typography>
          </form>
    
          {response ? (
            <Card
              sx={{
                mt: 4,
                border: 1,
                boxShadow: 0,
                height: "1000px",
                borderRadius: 5,
                borderColor: "natural.medium",
                bgcolor: "background.default",
              }}
            >
              <Typography p={2}>{response}</Typography>
            </Card>
          ) : (
            <Card
              sx={{
                mt: 4,
                border: 1,
                boxShadow: 0,
                height: "1000px",
                borderRadius: 5,
                borderColor: "natural.medium",
                bgcolor: "background.default",
              }}
            >
              <Typography
                variant="h5"
                color="natural.main"
                sx={{
                  textAlign: "center",
                  verticalAlign: "middel",
                  lineHeight: "1000px",
                }}
              >
                Bot Response
              </Typography>
            </Card>
          )}
        </Box>
          
          
          :<></>}
        </div>
    </div>
  )
}

export default Chat