'use client';

import classNames from 'classnames';
import Link from 'next/link';
import { useSelectedLayoutSegment } from 'next/navigation';

type Props = {
    href: string;
    className?: string;
    children: React.ReactNode;
}

export default function NavLink ({href, children, className}: Props) {

    const segment = useSelectedLayoutSegment() ?? '';
    const active = href === `/${segment}`;

    return <Link className={classNames(className)} href={href}>{children}</Link>;
};
