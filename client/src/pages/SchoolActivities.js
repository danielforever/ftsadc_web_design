import React from 'react';
import SchoolRecent from '../components/SchoolActivities/SchoolRecent';

function SchoolActivities({state}) {
  return (
    <div className='py-20'>
        <SchoolRecent state={state} />
    </div>
    
    
  )
}

export default SchoolActivities