//import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
// import About from "./components/About";
// import { BrowserRouter as Router, Routes, Route} from "react-router-dom";


function App() {
  const [mode, setmode] = useState("light");
  const [alert, setalert] = useState(null);

  const togglealert = (message, type) => {
    setalert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setalert(null);
    }, 2000);
  };

  const togglemode = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "black";
      document.body.style.color = "white";
      togglealert("Dark Mode has been enabled", "success");
    } else {
      setmode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      togglealert("Light Mode has been enabled", "warning");
    }
  };

  return (
    <>
    {/* <Router>
      <Navbar
        title="TextUtils"
        about="About"
        mode={mode}
        togglemode={togglemode}
      />
      <Alert alert={alert} />
      <Routes>
        <Route exact path = "/about" element={<About/>}/>
        <Route exact path = "/" element={<TextForm heading="Enter Your Text Below :" togglealert={togglealert} />}/>
      </Routes>
    </Router> */}

    <Navbar
        title="TextUtils"
        about="About"
        mode={mode}
        togglemode={togglemode}
      />
    <Alert alert={alert} />
    <div className="container">
      <TextForm heading="Enter Your Text Below :" togglealert={togglealert} />
    </div>
    </>
  );
}

export default App;
