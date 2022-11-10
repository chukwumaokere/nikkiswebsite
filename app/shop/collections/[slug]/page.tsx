import Header from '@/app/Header';
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

    return (
        <>
            <Header>{collection?.name} Collection</Header>
        </>
    );
}
