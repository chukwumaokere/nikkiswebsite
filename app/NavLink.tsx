'use client';

import Link from 'next/link';
import { useSelectedLayoutSegments } from 'next/navigation';

type Props = {
    href: string;
    children: React.ReactNode
}

export default function NavLink ({href, children}: Props) {
    const layoutSegments = useSelectedLayoutSegments();
    const segment = layoutSegments[0] || '';
    const active = href === `/${segment}`;

    return <Link className={
        active ? '!underline' : ''
    } href={href}>{children}</Link>;
};
