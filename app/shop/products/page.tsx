import Subheader from '@/app/Subheader';
import prisma from '@/lib/db';
import Image from 'next/image';
import Link from 'next/link';
import { ReactElement, use } from 'react';

async function getProducts () {
    const products = await prisma.product.findMany();
    return products;
}

export default function Page (): ReactElement {
    const products = use(getProducts());
    return (
        <div className='flex flex-col'>
            <Subheader>Products</Subheader>
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
    );
}
