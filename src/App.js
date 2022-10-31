// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Form from './components/form';
import About from './components/About';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import React, { useState } from 'react'

function App() {
  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null)
  const [Colors, setColors] = useState({
    c1:'black',
    c2:'white'
  })
  const ShowAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1000);
  }
  const togglemode = () => {
    if (mode === 'dark') {
      setMode('light')
      ShowAlert("light mode enabled", "info")
      setColors('white')
      document.body.style.backgroundColor ='white'
    }
    else {
      setMode('dark')
      ShowAlert("dark mode enabled", "info")
      document.body.style.backgroundColor ='black'
    }
  }

  return (
    <>
      <Router>
        <Navbar mode={mode} title='mehul' togglemode={togglemode}/>
        <Alert alert={alert} />
        <Routes>
          <Route path='/about' element={<About />} />
          <Route path='/home' element={<Form heading='enter the text' btn_color='primary' mode={mode} color={Colors}/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
