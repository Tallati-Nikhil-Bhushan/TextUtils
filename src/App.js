import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import Alert from './components/Alert';
import {BrowserRouter as Router,
        Routes,
        Route,
        Link} from 'react-router-dom'

function App() {

  const[mode,setMode] = useState("light");
  const[alert,setAlert] = useState(null);

  function showAlert(message,type)
  {
    setAlert({
      msg:message,
      tp:type
    })

    setTimeout(() => {
      setAlert(null)
    }, 2000);

  }

  const toggleMode = ()=>{
    if(mode==="dark")
    {
      setMode("light")
      document.body.style.backgroundColor = "white"
      showAlert("light mode is on","success")
      document.title = "Light mode is on"

      setTimeout(() => {
        document.title = 'textUtils'
      }, 2000);
    }
    else
    {
      setMode("dark")
      document.body.style.backgroundColor = "grey"
      showAlert("dark mode is on","success")

      document.title = "Dark mode is on"

      setTimeout(() => {
        document.title = 'textUtils'
      }, 2000);
    }
  }

  return (
    <>
        <Router>
        <Navbar title="TextUtils" Menit2 = "About" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert}/>
        <div className="container">
          <Routes>
            <Route path='/' element = {<TextForm title="Enter some text here" mode={mode} showAlert={showAlert}/>}/>
            <Route path='/About' element={<About/>}/>
          </Routes>
        </div>
        </Router>
    </>
  );
}

export default App;
