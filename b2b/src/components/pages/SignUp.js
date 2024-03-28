import React,{useState} from 'react';
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";



const SignUp = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate=useNavigate();
  const handleSubmitL = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/api/v1/auth/login", { email, password });
      toast.success("Login Successfully");
      localStorage.setItem("authToken", true);
      navigate("/");
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


  const handleSubmitR = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/api/v1/auth/register", { username, email, password });
      toast.success("User Register Successfully");
      navigate("/login");
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
<div className='boxi'>

<div className='main' id='ma'>
        <div className='signup'>
            <form onSubmit={handleSubmitR}>
                <label for="chk" aria-hidden="true">Sign Up</label>
                <input type='text' name='txt' value={username} onChange={(e)=>setUsername(e.target.value)} placeholder='username' required=""/>
                <input type='email' name='email' value={email} placeholder='Email' onChange={(e)=>setEmail(e.target.value)} required=""/>
                <input type='password' name='password' value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='password' required=""/>
                <button  type='submit' className='bttn'>Sign up</button>
            </form>
        </div>
        <div className='login'>
          <form onSubmit={handleSubmitL}>
            <label for="chk" aria-hidden="true" onClick={()=>navigate("/login")}>Login</label>
          </form>
        </div>
    </div>
</div>

  )
}

export default SignUp;