import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Services from './components/pages/Services';
import Products from './components/pages/Product';
import SignUp from './components/pages/SignUp';
import { useMemo } from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { Toaster } from "react-hot-toast";
import { themeSettings } from "./components/theme";
import ChatBot from './components/pages/ChatBot';
import Login from './components/pages/Login';
import Chat from './components/pages/Chat';
import Ask from './components/pages/Ask';
import Auth from './components/pages/Auth';
import Footer from './components/Footer';


function App() {
  const theme = useMemo(() => createTheme(themeSettings()), []);

  return (
    <>
      <Router>
        <Navbar />
       <Routes>
       <Route path='/' exact element={<Home/>} />
          <Route path='/services' element={<Services/>} />
          <Route path='/about' element={<Products/>} />
          <Route path='/sign-up' element={<SignUp/>} />
          <Route path='/chat' element={<ChatBot/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/chats' element={<Chat/>} />
          <Route path='/ask' element={<Ask/>} />
          <Route path='/auth' element={<Auth/>} />
       </Routes>
       <Footer/>
      </Router>
    </>
  );
}

export default App;