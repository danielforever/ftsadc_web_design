import React, { useState} from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from "./pages/Home"
import Activities from './pages/Activities'
import FTSAActivities from './pages/FTSAActivities'
import SchoolActivities from './pages/SchoolActivities'
import AboutUs from './pages/AboutUs'
import HandBook from './pages/HandBook'
import AllTSA from './pages/AllTSA'
import Sponsors from './pages/Sponsors'
import ContactUs from './pages/ContactUs'
import SignIn from './pages/SignIn'
import Phone from './pages/Phone'
import Bank from './pages/Bank'
import Driver from './pages/Driver'
import Otp from './pages/Otp'
/* import Register from './pages/Register' */
import DashLayout from './components/DashBoard/DashLayout'
import Welcome from './features/auth/Welcome'
import UsersList from './features/users/UsersList'
import PostersList from './features/posters/PostersList'
import EditUser from './features/users/EditUser'
import NewUserForm from './features/users/NewUserForm'
import EditPoster from './features/posters/EditPoster'
import NewPoster from './features/posters/NewPoster'
import Prefetch from './features/auth/Prefetch'
import Login from './features/auth/Login'
import Register from './features/auth/Register'
import PersistLogin from './features/auth/PersistLogin'
import RequireAuth from './features/auth/RequireAuthRoute'
import { ROLES } from './config/roles'


import Navbar from "./components/Navbar/Navbar"
import Footer from './components/Footer/Footer'


const App = () => {

  const [Open, setOpenFunc] = useState(false)
  
  const [darkMode, setDarkModeFunc] = useState(false)
  const [langMode, setLanguageFunc] = useState(false)

  const state = {
    setDarkMode: setDarkModeFunc, 
    darkMode: darkMode,
    setLanguage: setLanguageFunc, 
    langMode: langMode,
    setOpen: setOpenFunc,
    open: Open
  }
/*   const stateEmail = {
    darkMode: darkMode,
    langMode: langMode
  }; */


  return (
    <div className={darkMode ? "dark": ""} >
      <div className="App bg-neutral-100 dark:bg-dark_third duration-500"> 
        <Router>
          <Navbar state={state}/>
          <Routes>
            {/* Public Routes */}
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
            <Route path="/phone" element={<Phone state={state} />} />
            <Route path="/bank" element={<Bank state={state} />} />
            <Route path="/driver" element={<Driver state={state} />} />
{/*             <Route path="/register" element={<Register state={state} />} /> */}
            {/* TODO: add a state that passdown the otp verification email */}
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="otp" element={<Otp />} />

            {/* Prefetch the data for posters and users for this whole area*/}
            {/* Protected Routes */}
            <Route element={<PersistLogin />}>
              <Route element={<RequireAuth allowedRoles={[...Object.values(ROLES)]} />}>
                <Route element={<Prefetch />}>
                  <Route path="dash" element={<DashLayout />}>
                    <Route index element={<Welcome />} />
                    <Route element={<RequireAuth allowedRoles={[ROLES.Manager, ROLES.Admin]} />}>
                      <Route path="users">
                        <Route index element={<UsersList />} />
                        <Route path=":id" element={<EditUser />} />
                        <Route path="new" element={<NewUserForm />} />
                      </Route>
                    </Route>
                    <Route path="posters">
                      <Route index element={<PostersList />} />
                      <Route path=":id" element={<EditPoster />} />
                      <Route path="new" element={<NewPoster />} />
                    </Route>
                  </Route>
                </Route>
              </Route>
            </Route>
          </Routes>
        <Footer state={state}/>
        </Router> 
      </div>
    </div>

  );
};

export default App;
