import React from 'react'

import '../styles/common_component/CountExperience.css'

function CountExperince() {
  return (
    <>
      <div className="container">
           
           <div className="row">
               <div className="col-md-3 col-6">
                   
                   <div className="count_main_div">
                       <p className="count_val">
                           06
                       </p>
              
                       <p className="count_name">
                           Of Yachts
                       </p>
                   </div>
               </div>

               <div className="col-md-3 col-6">
                   <div className="count_main_div">
                       <p className="count_val">
                           22
                       </p>

                       <p className="count_name long_name">
                           Years of Experience
                       </p>
                   </div>
               </div>

               <div className="col-md-3 col-6">
                   <div className="count_main_div">
                       <p className="count_val active_count">
                           15<span>+</span>
                       </p>

                       <p className="count_name long_name">
                           Professional Crew
                       </p>
                   </div>
               </div>

               <div className="col-md-3 col-6">
                   <div className="count_main_div">
                       <p className="count_val">
                           10K
                       </p>

                       <p className="count_name long_name">
                          Happy Clients
                       </p>
                   </div>
               </div>
           </div>
       </div>
    </>
  )
}

export default CountExperince
