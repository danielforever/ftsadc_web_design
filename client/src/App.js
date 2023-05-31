import React, { useState, useEffect } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from "./pages/Home";
import Activities from './pages/Activities';
import FTSAActivities from './pages/FTSAActivities';
import SchoolActivities from './pages/SchoolActivities';
import AboutUs from './pages/AboutUs';
import HandBook from './pages/HandBook';
import AllTSA from './pages/AllTSA';
import Sponsors from './pages/Sponsors';
import ContactUs from './pages/ContactUs';
import SignIn from './pages/SignIn';

import Navbar from "./components/Navbar/Navbar";
import Footer from './components/Footer/Footer';

const App = () => {


  const [Open, setOpenFunc] = useState(false);
  
  const [darkMode, setDarkModeFunc] = useState(false);
  const [langMode,setLanguageFunc] = useState(false);

  const state = {
    setDarkMode: setDarkModeFunc, 
    darkMode: darkMode,
    setLanguage: setLanguageFunc, 
    langMode: langMode,
    setOpen: setOpenFunc,
    open: Open
  }
  const stateRead = {
    darkMode: darkMode,
    langMode: langMode
  };


  return (
    <div className={darkMode ? "dark": ""} >
      <div className="App bg-neutral-100 dark:bg-dark_third duration-500"> 
        <Router>
          <Navbar state={state}/>
          <Routes>
            <Route path="/" element={<Home state={state} />} />
            <Route path="/activities" element={<Activities state={state} />} />
            <Route path="/ftsaactivities" element={<FTSAActivities state={state} />} />
            <Route path="/schoolactivities" element={<SchoolActivities state={state} />} />
            <Route path="/aboutus" element={<AboutUs state={state} />} />
            <Route path="/handbook" element={<HandBook state={state} />} />
            <Route path="/alltsa" element={<AllTSA state={state} />} />
            <Route path="/sponsors" element={<Sponsors state={state} />} />
            <Route path="/contactus" element={<ContactUs state={state} />} />
            <Route path="/signin" element={<SignIn state={state} />} />
          </Routes>
        <Footer state={state}/>
        </Router> 
      </div>
    </div>

  );
};

export default App;

{/* <Router>
      {<Navbar />}
      <div className="App">
{        <header>
          <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <a className="navbar-brand">React Axios Tutorial</a>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                  <Link className="nav-link" to={'/create-user'}>
                    Create User
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={'/users'}>
                    Users List
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </header>}
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <Routes>
                <Route exact path="/" element={<CreateUser />} />
                <Route path="/create-user" element={<CreateUser />} />
                <Route path="/users" element={<Users />} />
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </Router> */}