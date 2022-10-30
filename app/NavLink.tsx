'use client';

import Link from 'next/link';
import { useSelectedLayoutSegment } from 'next/navigation';

type Props = {
    href: string;
    children: React.ReactNode
}

export default function NavLink ({href, children}: Props) {
    const segment = useSelectedLayoutSegment() || '';
    const active = href === `/${segment}`;

    return <Link className={
        active ? '!underline' : ''
    } href={href}>{children}</Link>;
};
