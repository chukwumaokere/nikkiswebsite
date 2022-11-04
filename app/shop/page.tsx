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
            <div>
                <div className='flex flex-col'>
                    <Subheader>Collections</Subheader>
                    <div className='flex flex-col lg:flex-row'>
                        {collections.map((collection) => (
                            <Link key={collection.id} href={{
                                pathname: '/shop/collections/[slug]',
                                query: { slug: collection.slug},
                            }}>
                                <Image
                                    width={200}
                                    height={100}
                                    alt={`${collection.name} collection image`}
                                    src={collection.collectionImage?.url || ''} />
                            </Link>
                        ))}
                    </div>
                </div>
                <div className='flex flex-col'>
                    <Subheader>Products</Subheader>
                    <div className='flex flex-col lg:flex-row'>
                        {products.map((product) => (
                            <Link key={product.id} href={{
                                pathname: '/shop/products/[slug]',
                                query: { slug: product.slug },
                            }}>
                                <Image
                                    width={200}
                                    height={100}
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
