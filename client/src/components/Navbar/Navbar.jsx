import React, { useState, useEffect} from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/cropftsadclogo.png";
import Button from "./Button";
import NavLinks from "./NavLinks";
import {BsFillMoonStarsFill, BsMoonStars} from 'react-icons/bs';
import { FaLanguage  } from "react-icons/fa";
import {RiEnglishInput, RiEmphasisCn} from "react-icons/ri";
import 'react-awesome-button/dist/styles.css';
import './Navbar.css';

const Navbar = ({state}) => {

  const scrollDirection = useScrollDirection();

  return (
    <div className={`... sticky ${ scrollDirection === "down" ? "-top-40" : "top-0"} transition-all duration-900 z-40`}>
      <nav className="pt-3 pb-3 duration-500">
          <div className="px-3 w-1280 inline-flex items-center font-medium shadow-lg rounded-2xl bg-slate-300 dark:bg-dark_primary duration-500">
            <div className="z-50 p-3 flex flex-shrink-0 justify-between">
              <img src={Logo} className="xl:cursor-pointer h-12" />  
              <div className="p-3 text-3xl xl:hidden" onClick={() => state.setOpen(!state.open)}>
                <ion-icon name={`${state.open ? "close" : "menu"}`}></ion-icon>
              </div>
              <ul>
                <li className="p-3 xl:hidden">
                  {!state.darkMode && <BsFillMoonStarsFill onClick={() => {state.setDarkMode(!state.darkMode)}} className=" cursor-pointer text-2xl"/>}
                  {state.darkMode && <BsMoonStars onClick={() => {state.setDarkMode(!state.darkMode)}} className=" cursor-pointer text-2xl"/>}
                </li>
              </ul>
              <div className="p-3 xl:hidden">
                {state.langMode && <RiEnglishInput onClick={() => {state.setLanguage(!state.langMode)}} className=" cursor-pointer text-3xl "/>}
                {!state.langMode && <RiEmphasisCn onClick={() => {state.setLanguage(!state.langMode)}} className=" cursor-pointer text-3xl "/>}
              </div>
            </div>
            <ul className="xl:flex hidden uppercase text-sm items-center gap-6 font-[Poppins]">
              <li>
                <Link to="/" className="py-7 px-3 inline-block text-center dark:text-white">
                  <div className={state.langMode ? "hidden" : "shown"} >
                    Home Page
                  </div>
                  <div className={state.langMode ? "shown" : "hidden"} >
                    首頁
                  </div>
                </Link>
              </li>
              <NavLinks state={state}/>
              <li>
                <Link to="/sponsors" className="py-7 px-3 inline-block text-center dark:text-white">
                  <div className={state.langMode ? "hidden" : "shown"}>
                    Sponsors
                  </div>
                  <div className={state.langMode ? "shown" : "hidden"} >
                    贊助商
                  </div>                
                </Link>
              </li>
              <li>
                <Link to="/contactus" className="py-7 px-3 inline-block text-center dark:text-white">
                <div className={state.langMode ? "hidden" : "shown"}>
                  Contact Us
                </div>
                <div className={state.langMode ? "shown" : "hidden"} >
                  聯絡我們
                </div>    
                </Link>
              </li>
            </ul>
            <div className="xl:block hidden">
              <Button className='btns_tailer' buttonStyle='btn--primary' buttonSize='btn--large' onClick={console.log('hey')}>
                <div className={state.langMode ? "hidden" : "shown"}>
                  SIGN IN
                </div>
                <div className={state.langMode ? "shown" : "hidden"} >
                  登入
                </div>    
              </Button>
            </div>
            <ul>
            <li className="p-3 hidden xl:block" >
              {!state.darkMode && <BsFillMoonStarsFill onClick={() => {state.setDarkMode(!state.darkMode)}} className=" cursor-pointer text-2xl"/>}
              {state.darkMode && <BsMoonStars onClick={() => {state.setDarkMode(!state.darkMode)}} className=" cursor-pointer text-2xl"/>}
            </li>
            
            </ul>
            <div className="p-3 hidden xl:block">
              {state.langMode && <RiEnglishInput onClick={() => {state.setLanguage(!state.langMode)}} className=" cursor-pointer text-3xl "/>}
              {!state.langMode && <RiEmphasisCn onClick={() => {state.setLanguage(!state.langMode)}} className=" cursor-pointer text-3xl "/>}
            </div>
            {/* Mobile nav */}
            <ul
              className={`
              z-auto xl:hidden  bg-slate-300 dark:bg-dark_third fixed w-full top-0 overflow-y-auto bottom-0 py-24 pl-4
            duration-500 ${state.open ? "left-0" : "left-[-100%]"}
            `}
            >
              <li>
                <Link to="/" className="py-4 px-4 inline-block dark:text-white">
                  <div className={state.langMode ? "hidden" : "shown"} onClick={() => state.setOpen(!state.open)}>
                    Home Page
                  </div>
                  <div className={state.langMode ? "shown" : "hidden"} onClick={() => state.setOpen(!state.open)}>
                    首頁
                  </div>
                </Link>
              </li>
              <NavLinks state={state}/>
              <li>
                <Link to="/" className="py-4 px-4 inline-block dark:text-white">
                <div className={state.langMode ? "hidden" : "shown"} onClick={() => state.setOpen(!state.open)}>
                    Sponsors
                  </div>
                  <div className={state.langMode ? "shown" : "hidden"} onClick={() => state.setOpen(!state.open)}>
                    贊助商
                  </div>   
                </Link>
              </li>
              <li>
                <Link to="/contactus" className="py-4 px-4 inline-block dark:text-white">
                <div className={state.langMode ? "hidden" : "shown"} onClick={() => state.setOpen(!state.open)}>
                  Contact Us
                </div>
                <div className={state.langMode ? "shown" : "hidden"} onClick={() => state.setOpen(!state.open)}>
                  聯絡我們
                </div>   
                </Link>
              </li>
              <div className="pl-5 pt-10">
              <Button className='btns_tailer' buttonStyle='btn--primary' buttonSize='btn--large' onClick={console.log('hey')}>
                <div className={state.langMode ? "hidden" : "shown"} onClick={() => state.setOpen(!state.open)}> 
                  SIGN IN
                </div>
                <div className={state.langMode ? "shown" : "hidden"} onClick={() => state.setOpen(!state.open)}>
                  登入
                </div>  
              </Button>
              </div>
            </ul>
          </div>
      </nav>
    </div>
  );
};



export default Navbar;

function useScrollDirection() {
  const [scrollDirection, setScrollDirection] = useState(null);

  useEffect(() => {
    let lastScrollY = window.pageYOffset;

    const updateScrollDirection = () => {
      const scrollY = window.pageYOffset;
      const direction = scrollY > lastScrollY ? "down" : "up";
      if (direction !== scrollDirection && (scrollY - lastScrollY > 10 || scrollY - lastScrollY < -10)) {
        setScrollDirection(direction);
      }
      lastScrollY = scrollY > 0 ? scrollY : 0;
    };
    window.addEventListener("scroll", updateScrollDirection); // add event listener
    return () => {
      window.removeEventListener("scroll", updateScrollDirection); // clean up
    }
  }, [scrollDirection]);

  return scrollDirection;
};