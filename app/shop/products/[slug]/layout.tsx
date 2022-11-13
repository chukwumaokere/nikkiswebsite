import Breadcrumbs from '@/app/Breadcrumbs';

type Props = {
    children: React.ReactNode,
}

export default function Layout ({children}: Props): React.ReactElement {

    return (
        <div className='flex lg:flex-col'>
            <div className='mb-2'>
                <Breadcrumbs />
            </div>
            <div className='flex lg:flex-row gap-4 mb-2'>
                {children}
            </div>
        </div>
    );
}
