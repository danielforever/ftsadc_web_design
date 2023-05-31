import React from 'react';
import Sign from "../components/Sign/Sign";

function SignIn({state}) {
  return (
    <div class="flex">
{/*       {!state.open && (<section className="py-10 hidden md:block">
        < Sign/>
      </section>)} */}
      <section className="py-10 hidden md:block">
        < Sign/>
      </section>
      <section className="py-10 block md:hidden">
        <p>This is for the phone</p>
      </section>        
    </div>

  );
}

export default SignIn;