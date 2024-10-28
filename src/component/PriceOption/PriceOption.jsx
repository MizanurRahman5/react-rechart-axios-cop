import React from 'react';

const PriceOption = ({option}) => {
    const {name, price, feature} = option;
    return (
        <div>
            <h1>
            <span className='text-5xl'>{price}</span>
            <span >/mon</span>
            </h1>
            <h1>
                <p className='text-3xl'>{name}</p>
            </h1>
        </div>
    );
};

export default PriceOption;