'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Breadcrumbs () {
    const pathname = usePathname();
    const breadcrumbs = pathname?.split('/').filter((segment) => segment !== '') ?? [];

    return (
        <div className='flex flex-row'>
            {breadcrumbs.map((breadcrumb, index) => (
                <span key={index}>
                    <span>&nbsp;/&nbsp;</span>
                    <Link href={`/${breadcrumbs.slice(0, index + 1).join('/')}`}>
                        {breadcrumb}
                    </Link>
                </span>
            ))}
        </div>
    );
}

