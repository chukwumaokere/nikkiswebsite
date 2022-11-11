import React, { use } from 'react';
import prisma from '@/lib/db';
import Link from 'next/link';
import Image from 'next/image';
import Subheader from '@/app/Subheader';

export const dynamic = 'auto',
    dynamicParams = true,
    revalidate = 0,
    fetchCatche = 'auto',
    runtime = 'nodejs',
    preferredRegion = 'auto';

async function getCollections () {
    const collections = await prisma.collection.findMany();
    return collections;
}

async function getProducts () {
    const products = await prisma.product.findMany();
    return products;
}

export default function Page () {

    const collections = use(getCollections());
    const products = use(getProducts());

    if (collections.length > 0) {
        return (
            <div className='h-full flex lg:flex-col'>
                <div className='flex flex-col'>
                    <Link href='/shop/collections'>
                        <Subheader>Collections</Subheader>
                    </Link>
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
                <div className='flex flex-col'>
                    <Link href='/shop/products'>
                        <Subheader>Products</Subheader>
                    </Link>
                    <div className='flex flex-col lg:flex-row gap-2 h-full'>
                        {products.map((product) => (
                            <Link key={product.id} href={`/shop/products/${product.slug}`} className='relative w-28 h-28'>
                                <Image
                                    style={{objectFit: 'contain'}}
                                    sizes='(max-width: 768px) 100vw, 50vw'
                                    priority={true}
                                    fill={true}
                                    alt={`${product.name} product image`}
                                    src={product.productImage?.url || ''} />
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        );
    } else {
        return (<></>);
    }
}
