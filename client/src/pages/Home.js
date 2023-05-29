import React, { useState } from "react";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import dcimage from "../assets/images/dcimage.jpg";
import HeroSection from '../components/Home/HeroSection';

function Home({state}) {


  return (
    <>
    <div>
      <section className="pt-10">
        <HeroSection state={state}/>
      </section>
      
      <div className='w-screen h-fit grid grid-rows-1 text-white text-4xl md:grid-cols-2'>
        <div class="hero container flex-shrink-0 max-w-screen-lg pt-10 md:pt0 mx-auto pb-20 flex justify-center pr-5">
          <img src={dcimage} alt="image" className=' h-40 sm:h-60 lg:h-80 rounded-2xl'/>  
        </div>
          <div className='flex h-screen items-center w-full text-black centered md:h-screen pb-10 justify-center'>
            <div class="mx-auto pt-10">
              <p className={`mb-8 font-normal text-center text-gray-500 text-3xl px-12 sm:px-16 xl:pl-5 dark:text-gray-200 ${state.langMode ? "hidden" : "shown"}`}>FTSADC</p>
              <p className={`mb-8 font-normal text-center text-gray-500 text-3xl px-12 sm:px-16 xl:pl-5 dark:text-gray-200 ${state.langMode ? "shown" : "hidden"}`}>大華府地區臺灣同學會聯合會</p>
              <p className={`mb-8 text-lg font-normal text-left text-gray-500 lg:text-xl px-10 sm:px-16 xl:pl-10 dark:text-gray-200 ${state.langMode ? "hidden" : "shown"}`}>Hello everyone, we are so thrilled to introduce us since FTSADC (The Federation of Taiwanese Student Association in Washington DC) is a newly founded organization. FTSADC aims at uniting Taiwanese students, assisting each university's Taiwanese Student Associations, and enhancing the cultural interaction of our students in the U.S ❣️ Our members include Taiwanese Student Associations from colleges across 11 states and District of Columbia that are in the range of 
              <Link
              to='https://www.taiwanembassy.org/us_en/index.html'
              target='_blank'
              aria-label='Facebook'
            > TECRO's (Taipei Economic and Cultural Representative Office in the United States) </Link> 
            service area. 
    Follow us on <Link
              to='https://www.facebook.com/ftsadc2022'
              target='_blank'
              aria-label='Facebook'
            >
            FB</Link>, 
            <Link
              to='https://www.instagram.com/ftsadc/'
              target='_blank'
              aria-label='Instagram'
            >
            &nbsp;IG
            </Link>, and 
            <Link
              to='https://www.linkedin.com/company/ftsadc/'
              target='_blank'
              aria-label='LinkedIn'
            >
            &nbsp;LINKEDIN
            </Link> for more updates🌱We hope to create a community with shared network and resource, we will see you soon!</p>
              <p className={`mb-8 text-lg font-normal text-left text-gray-500 lg:text-xl px-10 sm:px-16 xl:pl-10 dark:text-gray-200 ${state.langMode ? "shown" : "hidden"}`}>哈囉大家！首先要來跟各位介紹FTSADC 「大華府地區台灣同學會聯合會」🌱 我們的成立目的在於團結大華府地區的留美臺灣學生，輔助各校臺灣同學會服務臺灣同學、增進各校臺灣同學情誼，並促進臺灣學生與美國本土文化的互動交流。參與本學聯的臺灣同學會都是以位於
              <Link
              to='https://www.taiwanembassy.org/us_en/index.html'
              target='_blank'
              aria-label='Facebook'
            >「駐美國代表處教育組」</Link>
            服務轄區內的大學為範圍，包含華盛頓特區、馬里蘭州、德拉瓦州、維吉尼亞州....等，總共1個特區及11個州內的臺灣同學會。歡迎持續關注我們的            <Link
              to='https://www.facebook.com/ftsadc2022'
              target='_blank'
              aria-label='Facebook'
            >
            FB</Link>, 
            <Link
              to='https://www.instagram.com/ftsadc/'
              target='_blank'
              aria-label='Instagram'
            >
            &nbsp;IG
            </Link>和 
            <Link
              to='https://www.linkedin.com/company/ftsadc/'
              target='_blank'
              aria-label='LinkedIn'
            >
            &nbsp;LINKEDIN
            </Link>，期望與大家一起建立一個大華府地區的網絡及資源共享社群☺️</p>
            </div>
          </div>
      </div>

      {/* <Footer /> */}
    </div>
    </>
  );
};

export default Home;

{/* <div class="image-block-outer-wrapper layout-caption-below design-layout-inline combination-animation-site-default individual-animation-site-default individual-text-animation-site-default animation-loaded" data-test="image-block-inline-outer-wrapper" id="yui_3_17_2_1_1682708359860_69">…</div> */}