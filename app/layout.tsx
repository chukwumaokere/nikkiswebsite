/* eslint-disable @next/next/no-head-element */
import '@/app/globals.css';
import { Mandali } from '@next/font/google';
import classNames from 'classnames';
import '@/app/layout.css';

const mandali = Mandali({
    subsets: ['latin'],
    weight: '400',
});

export default function RootLayout ({
    children,
}: {
  children: React.ReactNode
}) {
    const styles = classNames(mandali.className, 'bg-gray-900 text-gray-100 antialiased');
    return (
        <html lang="en" className={styles}>
            <head>
                <meta name="description" content="Niki's Art" />
                <link rel="icon" href="/favicon.ico" />
            </head>
            <body>
                {children}
            </body>
        </html>
    );
}
