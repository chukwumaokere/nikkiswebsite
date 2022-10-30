import prisma from '@/lib/db';
import { use } from 'react';

async function getCollection (slug: string) {
    const collection = await prisma.collection.findFirst({
        where: {
            slug: slug,
        },
    });
    return collection;
}

export default function Page ({params}: {
    params: {
        slug: string;
    };
}) {
    const collection = use(getCollection(params.slug));
    console.log(collection);
    return (
        <h1 className='text-3xl text-yellow-500'>
            {collection?.name} Collection
        </h1>
    );
}
