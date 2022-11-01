import React from 'react';
import { Mandali } from '@next/font/google';
import classNames from 'classnames';

const mandali = Mandali({
    subsets: ['latin'],
    weight: '400',
});

export default function ParagraphText ({children}: {children: React.ReactNode}): React.ReactElement {
    return (<p className={classNames(mandali.className, 'text-md')}>{children}</p>);
}
