import React from 'react';
import chipPower from "../../assets/images/Activities/chippower.jpg";

function FTSArecent({state}) {
  return (
    
    <div>
{/*       <div>
        <p className={`p-10 mb-15 font-normal float-right text-gray-500 text-xl px-12 sm:px-16 xl:pl-5 dark:text-gray-400 ${state.langMode ? "hidden" : "shown"}`}>All FTSA Events!</p>
        <p className={`p-10 mb-15 font-normal float-right text-gray-500 text-xl px-12 sm:px-16 xl:pl-5 dark:text-gray-400 ${state.langMode ? "shown" : "hidden"}`}>更多學聯活動!</p>
      </div> */}
    <div className='pb-20'>
      <p className={`mb-15 font-normal text-center text-gray-500 text-4xl px-12 sm:px-16 xl:pl-5 dark:text-gray-400 ${state.langMode ? "hidden" : "shown"}`}>FTSADC RECENT COMING EVENT!</p>
      <p className={`mb-15 font-normal text-center text-gray-500 text-4xl sm:px-16  dark:text-gray-400 ${state.langMode ? "shown" : "hidden"}`}>FTSADC 近期活動!</p>
    </div>
    <div className="grid grid-cols-1 gap-6 xl:grid-cols-2 pb-20">
      <a href="https://ustwhack.super.site/" target="_blank">
        <img src={chipPower} alt="image" class="mt-10 max-w-sm md:max-w-xl md:max-h-xl mx-auto zoom-box shadow-lg"/>  
      </a>
      <div class="mb-3 p-10 md:pr-20 md:pl-10 text-gray-500 dark:text-gray-400">
        <div class="mx-auto pt-10">
        <a href="https://ustwhack.super.site/" target="_blank">
          <p className={`hover:text-primary mb-8 font-normal text-center text-gray-500 text-3xl sm:px-16 xl:pl-5 dark:text-gray-400 `}>2023 “USTW System Upgrade” Hackathon</p>
        </a>
          <p className={`mb-8 text-lg font-normal text-left text-gray-500 lg:text-xl px-10 sm:px-16 xl:pl-10 dark:text-gray-400`}>In recent years, with the escalating conflict between the United States and China, US-Taiwan issues have gradually heated up. The United States Taiwan Watch (USTW) hopes to uphold its original spirit by organizing the "US-Taiwan System Upgrade Hackathon." The event calls for like-minded friends from home and abroad who are interested in promoting US-Taiwan relations to gather together and jointly devise strategies for Taiwan's future!</p>
          <p className={`pt-10 mb-1 text-lg font-normal text-left text-gray-500 lg:text-md px-10 sm:px-16 xl:pl-10 dark:text-gray-400 `}>Event Date: July 1st to 3rd</p>
          <p className={`mb-1 text-lg font-normal text-left text-gray-500 lg:text-md px-10 sm:px-16 xl:pl-10 dark:text-gray-400 `}>LOCATION: West Chester University</p>
          <p className={`mb-1 text-lg font-normal text-left text-gray-500 lg:text-md px-10 sm:px-16 xl:pl-10 dark:text-gray-400 `}>POST TIME: 5/2 19:00</p>
          <p className={`mb-1 text-lg font-normal text-left text-gray-500 lg:text-md px-10 sm:px-16 xl:pl-10 dark:text-gray-400 `}>HOST: USTW</p>
        </div>
      </div>
    </div>

    </div>
  )
}

export default FTSArecent