// import logo from './logo.svg';
import './App.css';
// import DarkMode from './components/DarkMode';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import Alert from './components/Alert';
import About from './components/About';

// import {
//   BrowserRouter,
//   Routes,
//   Route,
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }


  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'black';
      showAlert("Dark mode has been enabled", "secondary");
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "primary");

    }
  }

  return (
    <>
      {/* <Navbar title="Learn_React" homePage="Home" aboutPage="about" contactPage="contact" /> */}
      
      {/* <BrowserRouter> */}
      <Navbar title="Texty - Free Text Editor" homePage="Home" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      {/* <Routes> */}
        {/* Exact is user for exact matching...as...React also includes partial matching which can create errors...so it is always a good practice to add Exact before path */}
        {/* <Route exact path="/about" element={<About/>}> */}
        {/* </Route> */}
        {/* <Route exact path="/" element={<TextForm heading="Enter text to analyze" mode={mode} showAlert={showAlert} />}> */}
       <TextForm heading="Enter text to analyze" mode={mode} showAlert={showAlert} /> 
        {/* </Route> */}
       {/* </Routes> */}
      {/* </BrowserRouter> */}

      {/* <TextForm heading="Enter your text below to Edit.." showAlert={showAlert} mode={mode} /> */}

      {/* <DarkMode /> */}
      {/* <Navbar/> */}
    </>
  );
}

export default App;