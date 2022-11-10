import '@/app/globals.css';
import NavLink from '@/app/NavLink';

export default function Layout ({
    children,
}: {
  children: React.ReactNode
}) {
    return (
        <div className='background w-full h-full flex lg:flex-col'>
            <header className='p-4'>
                <nav className='flex flex-row justify-center space-x-4'>
                    <NavLink href='/'>Home</NavLink>
                    <NavLink href='/shop'>Shop</NavLink>
                    <NavLink href='/gallery' className='underline'>Gallery</NavLink>
                </nav>
            </header>
            <div className='p-4 w-full h-full'>
                {children}
            </div>
        </div>
    );
}
