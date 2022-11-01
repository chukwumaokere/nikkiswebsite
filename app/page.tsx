//import Image from 'next/image';
import React from 'react';
import classNames from 'classnames';
import Header from './Header';

export default function Home () {
    return (
        <div className='w-full flex flex-col lg:flex-row lg:items-center'>
            <div className='lg:flex lg:w-1/2 lg:h-full lg:justify-center'>
                <Header className='text-8xl'>Nikkst3rz</Header>
            </div>
            <div className='lg:flex lg:w-1/2 lg:h-full'>
                <img src='https://upload.wikimedia.org/wikipedia/commons/7/78/Jan_Matejko%2C_Stańczyk.jpg' />
            </div>
        </div>
    );
}
