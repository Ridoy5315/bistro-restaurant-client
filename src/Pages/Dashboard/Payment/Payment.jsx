import React from 'react';
import PropTypes from 'prop-types';
import SectionTitle from '../../../components/SectionTitle';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
const Payment = props => {
     return (
          <div>
               <SectionTitle heading='Payment' subHeading='Please pay to eat'></SectionTitle>
               <div>
                    <Elements stripe={stripePromise}>
                         <CheckoutForm></CheckoutForm>
                    </Elements>
               </div>
          </div>
     );
};

Payment.propTypes = {
     
};

export default Payment;