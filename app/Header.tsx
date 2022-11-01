import React from 'react';
import { Comfortaa } from '@next/font/google';
import classNames from 'classnames';


const comfortaa = Comfortaa({
    subsets: ['latin'],
    weight: '700',
});

export default function Header ({children, className}: {children: React.ReactNode, className?: any}): React.ReactElement {
    return (<h1 className={classNames(comfortaa.className, 'text-2xl', className)}>{children}</h1>);
}
