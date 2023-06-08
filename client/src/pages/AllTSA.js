import React from 'react';
import StateCardTSA from '../components/AllTSA/StateCardTSA';


function AllTSA({state}) {
  return (
    <div>
        <StateCardTSA  state={state}/>
    </div>
    
  )
}

export default AllTSA