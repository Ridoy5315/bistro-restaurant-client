import React from 'react';
import PropTypes from 'prop-types';
import chef from '../../assets/home/chef-service.jpg'
const BestroBoss = props => {
     return (
          <div className='mb-20'>
               <div className='p-28' style={{background: `url(${chef})`}}>
                    <div className='bg-white px-36 py-24 text-center'>
                         <h2 className='uppercase text-5xl mb-5'>Bistro Boss</h2>
                         <p className='font-thin'>We take pride in serving a diverse menu crafted with the finest ingredients, offering a perfect blend of traditional and modern culinary delights. Whether you're here for a quick bite, a family dinner, or a special celebration, our warm ambiance, attentive service, and mouthwatering dishes are sure to leave you satisfied.</p>
                    </div>
               </div>
          </div>
     );
};

BestroBoss.propTypes = {
     
};

export default BestroBoss;