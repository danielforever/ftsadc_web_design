import React from 'react'
import { allstates } from './data';
import { motion } from "framer-motion";

const Card = ({setSelected, item}) => {
  return (
    <div className='inline-block w-full mb-4'>
      <motion.img 
        whileHover={{
          scale: 1.025,
          transition: {
            duration: 0.2,
          },
        }}
        whileTap={{
          scale: 0.95,
        }}
        onClick={() => {
          setSelected(item);
        }}
        layoutId={`card-${item.id}`}
        /* src={imagetest}  */
        src={item.src} 
        className="w-full bg-base-100 shadow-xl image-full cursor-pointer rounded-3xl"
      />
      <p className='pt-3 text-center'>{item.school}</p>
    </div>
  );
};
export default function Statecard( {setSelected} ) {
  return (
    <div className='p-4'>
      <div className='columns-2 sm:columns-2 md:columns-3 lg:columns-3 xl:columns-4 2xl:columns-5 gap-5'>
      {allstates.map((item) => (
        <Card key={item.id} setSelected={setSelected} item={item} />
      ))}
    </div>
  </div>
  )
}
