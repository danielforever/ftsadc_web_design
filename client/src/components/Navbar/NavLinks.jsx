import React, { useState } from "react";
import { Link } from "react-router-dom";
import { links } from "./Mylinks";
import { HashLink } from 'react-router-hash-link';

const NavLinks = ({state}) => {
  const [heading, setHeading] = useState("");
  const [subHeading, setSubHeading] = useState("");

  return (
    <>
      {links.map((link) => (
        <div className="py-2 z-6">
          <div className="px-4 text-left xl:cursor-pointer group group-hover:rotate-180 group-hover:-mt-2">
            {/* English version */}
            <h1
              className={`py-2 flex justify-between items-center text-center xl:pr-0 pr-3 group dark:text-white ${state.langMode ? "hidden" : "shown"}`}
              onClick={() => {
                heading !== link.name ? setHeading(link.name) : setHeading("");
                setSubHeading("");
              }}
            >
              <Link to={link.link}
                onClick={() => {
                  state.setOpen(!state.open);
                }}
                className="hover:text-primary">
              {link.name}
              </Link>
              <span className="text-xl xl:hidden inline">
                <ion-icon
                  name={`${
                    heading === link.name ? "chevron-up" : "chevron-down"
                  }`}
                ></ion-icon>
              </span>
              <span className="text-xl xl:mt-1 xl:ml-2  xl:block hidden ">
                <ion-icon name="chevron-down"></ion-icon>
              </span>
            </h1>
            {/* Chinese version */}
            <h1
              className={`py-2 flex justify-between items-center dark:text-white xl:pr-0 pr-3 group ${state.langMode ? "shown" : "hidden"}`}
              onClick={() => {
                heading !== link.ch_name ? setHeading(link.ch_name) : setHeading("");
                setSubHeading("");
              }}
            >
              <Link to={link.link} 
                onClick={() => {
                  state.setOpen(!state.open);
                }}              
              className="dark:text-white hover:text-primary">
              {link.ch_name}
              </Link>
              
              <span className="text-xl xl:hidden inline">
                <ion-icon
                  name={`${
                    heading === link.ch_name ? "chevron-up" : "chevron-down"
                  }`}
                ></ion-icon>
              </span>
              <span className="text-xl xl:mt-1 xl:ml-2  xl:block hidden ">
                <ion-icon name="chevron-down"></ion-icon>
              </span>
            </h1>


            {link.submenu && !state.langMode && (
              <div>
                <div className="absolute top-15 hidden group-hover:xl:block hover:xl:block">
                  <div className="py-3 ">
                    <div
                      className="w-4 h-4 left-6 absolute mt-2 shadow-lg bg-slate-300 dark:bg-dark_third rotate-45"
                    ></div>
                  </div>
                  <div className="bg-slate-300 shadow-lg dark:bg-dark_third p-4 grid grid-cols-2 gap-5 rounded-xl">
                    {link.sublinks.map((mysublinks) => (
                      <div>
                        <h1 className="text-lg font-semibold dark:text-white">
                            <HashLink smooth to={mysublinks.link} className="hover:text-primary">{mysublinks.Head}</HashLink>
                        </h1>
                        {mysublinks.sublink.map((slink) => (
                          <li className="text-sm text-gray-600 my-2.5 dark:text-white">
                            <Link
                              to={slink.link}
                              className="hover:text-primary"
                            >
                             &nbsp;&nbsp;{slink.name}
                            </Link>
                          </li>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
            {link.submenu && state.langMode && (
              <div>
                <div className="absolute top-15 hidden group-hover:xl:block hover:xl:block">
                  <div className="py-3 ">
                    <div
                      className="w-4 h-4 left-6 absolute mt-2 bg-slate-300 dark:bg-dark_third rotate-45"
                    ></div>
                  </div>
                  <div className="bg-slate-300 dark:bg-dark_third p-4 grid grid-cols-2 gap-5 rounded-xl">
                    {link.sublinks.map((mysublinks) => (
                      <div>
                        <h1 className="text-lg font-semibold dark:text-white">
                            <HashLink smooth to={mysublinks.link} className="hover:text-primary">{mysublinks.ch_Head}</HashLink>
                        </h1>
                        {mysublinks.sublink.map((slink) => (
                          <li className="text-sm text-gray-600 dark:text-white my-2.5">
                            <Link
                              to={slink.link}
                              className="hover:text-primary"
                            >
                              &nbsp;&nbsp;{slink.ch_name}
                            </Link>
                          </li>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
          {/* Mobile menus */}
          <div
            className={`${heading === link.name ? "xl:hidden" : "hidden" } ${state.langMode ? "hidden" : "shown"}`}
          >
            {/* sublinks for English version*/}
            {link.sublinks.map((slinks) => (
              <div>
                <div>
                  <h1 onClick={() =>subHeading !== slinks.Head ? setSubHeading(slinks.Head) : setSubHeading("")}
                    className={`py-4 pl-7 font-semibold flex justify-between items-center xl:pr-0 pr-9`}
                  >
                    <HashLink smooth to={slinks.link} className="dark:text-white hover:text-primary" onClick={() => state.setOpen(!state.open)}>&nbsp;&nbsp;&nbsp;&nbsp;{slinks.Head}</HashLink>
                    
                    <span className="text-xl xl:mt-1 xl:ml-2 inline">
                      <ion-icon
                        name={`${ 
                          subHeading === slinks.Head
                            ? "chevron-up"
                            : "chevron-down"
                        }`}
                      ></ion-icon>
                    </span>
                  </h1>
                  <div
                    className={`${
                      subHeading === slinks.Head ? "xl:hidden" : "hidden"
                    }`}
                  >
                    {slinks.sublink.map((slink) => (
                      <li className="py-3 pl-14 dark:text-white">
                        &nbsp;&nbsp;<Link to={slink.link} onClick={() => state.setOpen(!state.open)}>{slink.name}</Link>
                      </li>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div
            className={`${heading === link.ch_name ? "xl:hidden" : "hidden" } ${state.langMode ? "shown" : "hidden"}`}
          >
            {/* sublinks for Chinese version*/}
            {link.sublinks.map((slinks) => (
              <div>
                <div>
                  <h1 onClick={() =>subHeading !== slinks.ch_Head ? setSubHeading(slinks.ch_Head) : setSubHeading("")}
                    className={`py-4 pl-7 font-semibold flex justify-between items-center xl:pr-0 pr-9`}
                  >
                  <HashLink smooth to={slinks.link} className="dark:text-white hover:text-primary" onClick={() => state.setOpen(!state.open)}>&nbsp;&nbsp;&nbsp;&nbsp;{slinks.ch_Head}</HashLink>

                    <span className="text-xl xl:mt-1 xl:ml-2 inline">
                      <ion-icon
                        name={`${ 
                          subHeading === slinks.ch_Head
                            ? "chevron-up"
                            : "chevron-down"
                        }`}
                      ></ion-icon>
                    </span>
                  </h1>
                  <div
                    className={`${
                      subHeading === slinks.ch_Head ? "xl:hidden" : "hidden"
                    }`}
                  >
                    {slinks.sublink.map((slink) => (
                      <li className="py-3 pl-14 dark:text-white">
                        &nbsp;&nbsp;<Link to={slink.link} onClick={() => state.setOpen(!state.open)}>&nbsp;&nbsp;{slink.ch_name}</Link>
                      </li>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default NavLinks;
