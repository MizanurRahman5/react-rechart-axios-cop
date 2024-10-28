import React from 'react';


const Link = ({route}) => {
    return (
        <div>
            <li className='text-black p-2 font-bold hover:bg-yellow-500'>
                <a href={route.path}>{route.name}</a>
            </li>
        </div>
    );
};

export default Link;