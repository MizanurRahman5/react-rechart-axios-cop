import React from 'react';
import PriceOption from './PriceOption';

const PriceOptions = () => {

   const priceOption = [
    {
      "id": 1,
      "name": "Basic Membership",
      "feature": ["Access to gym equipment", "Locker facility", "One personal training session per month"],
      "price": 19.99
    },
    {
      "id": 2,
      "name": "Standard Membership",
      "feature": ["Access to gym equipment", "Locker facility", "Weekly personal training session", "Access to group classes"],
      "price": 39.99
    },
    {
      "id": 3,
      "name": "Premium Membership",
      "feature": ["Unlimited access to gym equipment", "Private locker", "Daily personal training sessions", "Access to all group classes", "Free health and fitness assessment"],
      "price": 59.99
    }
  ]
  
      


    return (
        <div>
            <h1 className='text-7xl'>basic price in the tawn</h1>
            <div className='grid md:grid-cols-3 m-5'>
            {
              priceOption.map(option => <PriceOption option={option} key={option.id}></PriceOption>)
            }
            </div>
        </div>
    );
};

export default PriceOptions;