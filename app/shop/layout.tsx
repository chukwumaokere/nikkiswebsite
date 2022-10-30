import React, { use } from 'react';
import prisma from '@/lib/db';
import Link from 'next/link';

async function getCollections () {
    const collections = await prisma.collection.findMany();
    return collections;
}

export default function Layout ({children}: {
    children: React.ReactNode
}) {
    const collections = use(getCollections());

    if (collections) {
        return (
            <div className='flex'>
                <h1 className='text-blue-500'>
                    <ul className='pr-10'>
                        {collections?.map((collection) => (
                            <li key={collection?.id}>
                                <Link href={{
                                    pathname: '/shop/collections/[slug]',
                                    query: { slug: collection?.slug},
                                }}>
                                    {collection?.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </h1>
                <div>{children}</div>
            </div>
        );
    } else {
        return (<></>);
    }

}
