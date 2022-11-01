import { Arvo } from '@next/font/google';
import classNames from 'classnames';
import React from 'react';

const arvo = Arvo({
    subsets: ['latin'],
    weight: '400',
});

export default function Subheader ({children}: {children: React.ReactNode}): React.ReactElement {
    return (<h2 className={classNames(arvo.className, 'text-lg')}>{children}</h2>);
};
