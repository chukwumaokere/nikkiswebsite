type Props = {
    children: React.ReactNode,
}

export default function Layout ({children}: Props): React.ReactElement {

    return (
        <div className='flex lg:flex-col'>
            {children}
        </div>
    );
}
