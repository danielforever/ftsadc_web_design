import React from 'react';
import FTSArecent from '../components/FTSAActivities/FTSArecent';

function FTSAActivities({state}) {
  return (
    <div className='py-20'>
    <section id="ftsarecent">
      <FTSArecent state={state} />
    </section>
    
    </div>
  )
}

export default FTSAActivities