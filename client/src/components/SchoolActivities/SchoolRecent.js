import React from 'react'
import sample_activity from "../../assets/images/sample_activity.jpg";
import sample_activity2 from "../../assets/images/sample_activity2.jpg";

function SchoolRecent({state}) {
  return (
    <div>
    <div className='pb-20'>
      <p className={`mb-15 font-normal text-center text-gray-500 text-4xl px-12 sm:px-16 xl:pl-5 dark:text-gray-400 ${state.langMode ? "hidden" : "shown"}`}>RECENT ACTIVITES FOR EACH SCHOOL </p>
      <p className={`mb-15 font-normal text-center text-gray-500 text-4xl px-12 sm:px-16 xl:pl-5 dark:text-gray-400 ${state.langMode ? "shown" : "hidden"}`}>各校近期活動</p>
    </div>
    <div className='grid grid-rows-1 text-white text-4xl md:grid-cols-2'>
      <img src={sample_activity} alt="image" className='mt-10 max-w-sm md:max-w-sm md:max-h-sm lg:max-w-md lg:max-h-md mx-auto zoom-box rounded-2xl'/>
      <div className='flex h-screen items-center w-full text-black centered md:h-screen pb-10 justify-center'>
        <div class="mx-auto pt-10">
          <p className={`mb-8 font-normal text-center text-gray-500 text-3xl px-12 sm:px-16 xl:pl-5 dark:text-gray-400 `}>AANHPI EVENT</p>
          <p className={`mb-8 text-lg font-normal text-left text-gray-500 lg:text-xl px-10 sm:px-16 xl:pl-10 dark:text-gray-400`}>Hey guys! Our GMU TSA is participating in the AANHPI event on 5/6, and we have prepared some Taiwanese snacks and drinks for you all!
Take the guessing quiz in our stories to take a sneak peek at what we have on that day!</p>
          <p className={`pt-10 mb-1 text-lg font-normal text-left text-gray-500 lg:text-md px-10 sm:px-16 xl:pl-10 dark:text-gray-400 `}>TIME: 5/6 17:00</p>
          <p className={`mb-1 text-lg font-normal text-left text-gray-500 lg:text-md px-10 sm:px-16 xl:pl-10 dark:text-gray-400 `}>LOCATION: George Mason university</p>
          <p className={`mb-1 text-lg font-normal text-left text-gray-500 lg:text-md px-10 sm:px-16 xl:pl-10 dark:text-gray-400 `}>POST TIME: 5/2 19:00</p>
          <p className={`mb-1 text-lg font-normal text-left text-gray-500 lg:text-md px-10 sm:px-16 xl:pl-10 dark:text-gray-400 `}>HOST: GMU TSA</p>
        </div>
      </div>
    </div>
    </div>
  )
}

export default SchoolRecent