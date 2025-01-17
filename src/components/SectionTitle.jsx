import React from 'react';
import PropTypes from 'prop-types';

const SectionTitle = ({heading, subHeading}) => {
     return (
          <div className='w-4/12 mx-auto text-center mt-20 mb-6'>
               <p className='text-yellow-600 text-sm mb-2'>---{subHeading}---</p>
               <h3 className='text-3xl uppercase border-y-4 py-4'>{heading}</h3>
          </div>
     );
};

SectionTitle.propTypes = {
     
};

export default SectionTitle;