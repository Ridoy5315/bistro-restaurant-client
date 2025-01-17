import React from 'react';
import PropTypes from 'prop-types';

const MenuItem = ({item}) => {
     const {name, image, price, recipe} = item;
     return (
          <div className='flex space-x-4'>
               <div>
                    <img style={{borderRadius: '0 200px 200px 200px'}} className='w-[100px] h-[80px]' src={image} alt="" />
               </div>
               <div className=''>
                    <h3 className='uppercase text-xl font-light mb-1'>{name}-------------</h3>
                    <p className='font-thin text-sm'>{recipe}</p>
               </div>
               <div>
                    <p className='text-yellow-600'>${price}</p>
               </div>
          </div>
     );
};

MenuItem.propTypes = {
     
};

export default MenuItem;