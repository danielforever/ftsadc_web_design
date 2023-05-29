import React from 'react'
import {useState,useRef} from "react";
import welcome from "../assets/images/welcome.jpg";
import Introduction from '../components/AboutUs/Introduction';
import Modal from '../components/AboutUs/Modal';
import chipPower from "../assets/images/Activities/chippower.jpg";


function AboutUs({state}) {
/* 
  const aboutSection = useRef(null);
  const scrollTo = () => { window.scrollTo({ top: aboutSection.current.offsetTop, behavior: 'smooth', }); */

  const [selected, setSelected] = useState(null);

  return (
    <>
    <p class={`p-20 text-4xl text-gray-500 dark:text-gray-400 ${state.langMode ? "shown" : "hidden"}`}>關於我們</p>
    <p class={`p-20 text-4xl text-gray-500 dark:text-gray-400 ${state.langMode ? "hidden" : "shown"}`}>ABOUT US</p>

    <div class="grid grid-cols-1 gap-6 lg:grid-cols-2 pb-20">
      <img src={welcome} class="h-auto mx-auto mb-3" />
      <div class="mb-3 px-10 md:pr-20 md:pl-10 text-gray-500 dark:text-gray-400">
        <p className="px-15 py-10">
        本會係非營利、非政治、非宗教性社團組織。成立之目的在於團結大華府地區之留美臺灣學生，輔助各校臺灣同學會服務臺灣同學、增進各校臺灣同學之情誼，並促進臺灣學生與美國本土文化之互動交流。參與本學聯的臺灣同學會係以位於「駐美國代表處教育組」服務轄區內的大學為範圍，包含華盛頓特區、馬里蘭州、德拉瓦州、維吉尼亞州、西維吉尼亞州、北卡羅來納州、南卡羅來納州、喬治亞州、佛羅里達州、肯塔基州、田納西州、阿拉巴馬州等1個特區及11個州內的臺灣同學會。
        </p>
        <p className="px-15">
        FTSADC is a non-profit organization. We aim at uniting Taiwanese students, assisting each university's Taiwanese Student Associations, and enhancing the cultural interaction of our students in the U.S. Our members include the colleges that are in the range of Taipei Economic and Cultural Representative Office in the United States (TECRO)'s service area. Participants of FTSADC encompass Taiwanese Student Associations from Washington D.C., Maryland, Delaware, Virginia, West Virginia, North Carolina, South Carolina, Georgia, Florida, Kentucky, Tennessee, and Alabama.
        </p>
      </div>
    </div>
    
    <section id="ourMember">    
    <p class={`text-center p-20 text-4xl text-gray-500 dark:text-gray-400 ${state.langMode ? "shown" : "hidden"} `}>成員介紹</p>
    <p class={`text-center p-20 text-4xl text-gray-500 dark:text-gray-400 ${state.langMode ? "hidden" : "shown"} `}>MEET OUR TEAM MEMBERS</p>

    <div style ={{width: "100%"}} >
        <Introduction setSelected={setSelected}/>
        <Modal selected = {selected} setSelected={setSelected} />
    </div>
    </section>
    </>
  )
}

export default AboutUs