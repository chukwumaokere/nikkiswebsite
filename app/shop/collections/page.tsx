import Image from 'next/image';
import Link from 'next/link';
import prisma from '@/lib/db';
import { use } from 'react';
import Subheader from '@/app/Subheader';

async function getCollections () {
    const collections = await prisma.collection.findMany();
    return collections;
}


export default function Page () {
    const collections = use(getCollections());
    return (
        <div className='flex flex-col'>
            <Subheader>Collections</Subheader>
            <div className='flex flex-col lg:flex-row gap-2 h-full'>
                {collections.map((collection) => (
                    <Link key={collection.id} href={`/shop/collections/${collection.slug}`} className='relative w-28 h-28'>
                        <Image
                            style={{objectFit: 'contain'}}
                            sizes='(max-width: 768px) 100vw, 50vw'
                            priority={true}
                            fill={true}
                            alt={`${collection.name} collection image`}
                            src={collection.collectionImage?.url || ''} />
                    </Link>
                ))}
            </div>
        </div>
    );
}
