import React,{useState} from 'react';
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";


const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

   //register ctrl
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
  return (
    <div className='boxi'>
        <div className='main' id='ma'>
        <div className='sign'>
                <label for="chk" aria-hidden="true" onClick={()=>navigate('/sign-up')}>Sign Up</label>
        </div>
        <div className='logn'>
          <form onSubmit={handleSubmitL}>
            <label for="chk" aria-hidden="true">Login</label>
            <input type='email' value={email} name='email' onChange={(e)=>setEmail(e.target.value)} placeholder='Email' required="" />
            <input type='Password' value={password} name='password' onChange={(e)=>setPassword(e.target.value)} placeholder='Password' required=""/>
            <button type='submit' className='bttn'>Login</button>
          </form>
        </div>
        </div>
    </div>
  )
}

export default Login