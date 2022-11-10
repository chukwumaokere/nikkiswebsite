import React from 'react';
import NavLink from '@/app/NavLink';
import Header from './Header';
import Image from 'next/image';
import Subheader from './Subheader';

export default function Home () {
    return (
        <div className={'background flex flex-col'}>
            <header className='p-4'>
                <nav className='flex flex-row justify-center space-x-4'>
                    <NavLink href='/' className='underline'>Home</NavLink>
                    <NavLink href='/shop'>Shop</NavLink>
                    <NavLink href='/gallery'>Gallery</NavLink>
                </nav>
            </header>
            <div className='p-4 h-full flex'>
                <div className='w-full flex flex-col lg:flex-row lg:items-center h-full'>
                    <div className='lg:flex lg:flex-col lg:w-1/2 lg:h-full lg:justify-center lg:items-center'>
                        <Header className='text-8xl'>Nikkst3rz</Header>
                        <Subheader>Testing</Subheader>
                    </div>
                    <div className='lg:flex lg:w-1/2 lg:h-full relative'>
                        <Image
                            fill
                            priority
                            placeholder='empty'
                            sizes='(max-width: 768px) 100vw, 50vw'
                            style={{objectFit: 'contain'}}
                            alt='Nikkst3rz hero image'
                            src='https://upload.wikimedia.org/wikipedia/commons/7/78/Jan_Matejko%2C_Stańczyk.jpg' />
                    </div>
                </div>
            </div>
        </div>
    );
}
