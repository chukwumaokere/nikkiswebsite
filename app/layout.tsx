import './globals.css';
import { Mandali } from '@next/font/google';
import NavLink from './NavLink';
import classNames from 'classnames';
import './layout.css';

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
                <title>Nikkst3rz Art</title>
                <meta name="description" content="Niki's Art" />
                <link rel="icon" href="/favicon.ico" />
            </head>
            <body>
                <div className={'background'}>
                    <header className='p-4'>
                        <nav className='flex flex-row justify-center space-x-4'>
                            <NavLink href='/'>Home</NavLink>
                            <NavLink href='/shop'>Shop</NavLink>
                            <NavLink href='/gallery'>Gallery</NavLink>
                        </nav>
                    </header>
                    <div className='p-4'>
                        {children}
                    </div>
                </div>
            </body>
        </html>
    );
}
