import {React, useState} from 'react';
/* import Statecard from '../components/State/Statecard';
import allstates from "../components/State/data"; */
import FTSArecent from '../components/FTSAActivities/FTSArecent';
import SchoolRecent from '../components/SchoolActivities/SchoolRecent';

function Activities({state}) {

  const [selected, setSelected] = useState(null);
// -mt-10 md:-mt-16 ml-3 md:ml-0 h-20 w-20 md:h-32 md:w-32 border-[6px] border-white bg-white
  return (
  <div className='py-20'>
    <FTSArecent state={state} />
    <SchoolRecent state={state} />
    <section id="allState"> 

{/*     <div style ={{width: "100%"}} >
        <Statecard setSelected={setSelected}/>
    </div> */}
    </section>
{/*     <div className='grid grid-rows-1 text-white text-4xl md:grid-cols-2'>
      <img src={sample_activity2} alt="image" className=' w-10/12 mx-auto object-cover items-center rounded-2xl'/>  
      <div className='flex h-screen items-center w-full text-black centered md:h-screen pb-10 justify-center'>
        <div class="mx-auto pt-10">
          <p className={`mb-8 font-normal text-center text-gray-500 text-3xl px-12 sm:px-16 xl:pl-5 dark:text-gray-400 `}>AANHPI EVENT</p>
          <p className={`mb-8 text-lg font-normal text-left text-gray-500 lg:text-xl px-10 sm:px-16 xl:pl-10 dark:text-gray-400`}>Hey guys! Our GMU TSA is participating in the AANHPI event on 5/6, and we have prepared some Taiwanese snacks and drinks for you all!
Take the guessing quiz in our stories to take a sneak peek at what we have on that day!</p>
          <p className={`pt-10 mb-1 text-lg font-normal text-left text-gray-500 lg:text-md px-10 sm:px-16 xl:pl-10 dark:text-gray-400 `}>TIME: 5/6 17:00</p>
          <p className={`mb-1 text-lg font-normal text-left text-gray-500 lg:text-md px-10 sm:px-16 xl:pl-10 dark:text-gray-400 `}>LOCATION: George Mason university</p>
          <p className={`mb-1 text-lg font-normal text-left text-gray-500 lg:text-md px-10 sm:px-16 xl:pl-10 dark:text-gray-400 `}>POST TIME: 5/2 19:00</p>
          <p className={`mb-1 text-lg font-normal text-left text-gray-500 lg:text-md px-10 sm:px-16 xl:pl-10 dark:text-gray-400 `}>POST TIME: 5/2 19:00</p>
        </div>
      </div>
    </div> */}
  </div>
  
  )
}

export default Activities