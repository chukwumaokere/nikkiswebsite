import prisma from '@/lib/db';
import { use } from 'react';

async function getProduct (slug: string) {
    const product = await prisma.product.findFirst({
        where: {
            slug: slug,
        },
    });
    return product;
}

export default function Page ({params}: {
    params: {
        slug: string;
    };
}) {
    const product = use(getProduct(params.slug));
    console.log(product);
    return (
        <h1 className='text-3xl text-yellow-500'>
            {product?.name} Product
        </h1>
    );
}
