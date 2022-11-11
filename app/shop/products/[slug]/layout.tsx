import Header from '@/app/Header';
import Subheader from '@/app/Subheader';
import prisma from '@/lib/db';
import Image from 'next/image';
import { use } from 'react';
import Breadcrumbs from '@/app/Breadcrumbs';
import ParagraphText from '@/app/ParagraphText';
import Link from 'next/link';

async function getProduct (slug: string) {
    const product = await prisma.product.findFirst({
        where: {
            slug: slug,
        },
    });
    return product;
}

async function getRelatedProducts (slug: string) {
    const products = await prisma.product.findMany(
        {
            where: {
                slug: {
                    not: slug,
                },
            },
        }
    );
    return products;
}

type Props = {
    params: {
        slug: string;
    },
    children: React.ReactNode,
}

export default function Layout ({params, children}: Props): React.ReactElement {

    const product = use(getProduct(params.slug));
    const relatedProducts = use(getRelatedProducts(params.slug));

    return (
        <div className='flex lg:flex-col'>
            <div className='flex lg:flex-row gap-4'>
                <div className='flex flex-col gap-4'>
                    <Breadcrumbs />
                    <Image
                        width={1000}
                        height={1000}
                        alt={`${product?.name} product image`}
                        src={product?.productImage?.url || ''} />
                    <div className='flex flex-row space-x-2 justify-center w-full'>
                        {product?.images?.map((image, index) => {
                            return (
                                <div key={index} className='flex w-20 h-20 relative'>
                                    <Image
                                        fill={true}
                                        style={{objectFit: 'contain'}}
                                        src={image.url}
                                        alt={`${product?.name} carousel image`} />
                                </div>
                            );
                        })}
                    </div>
                    <div className='flex lg:flex-col'>
                        <Subheader>Artist&quot;s Descrption</Subheader>
                        <ParagraphText>Just some thoughts about this product</ParagraphText>
                    </div>
                    <div className='flex lg:flex-col'>
                        <Subheader>Materials Used</Subheader>
                        <ParagraphText>Google Chrome OMEGALUL</ParagraphText>
                    </div>
                </div>
                <div className='flex lg:flex-col gap-2'>
                    <Header>
                        {product?.name}
                    </Header>
                    <Subheader>
                        {product?.description}
                    </Subheader>
                    {children}
                </div>
            </div>
            <div className='flex lg:flex-col'>
                <Subheader>Related Products</Subheader>
                <div className='flex flex-col lg:flex-row gap-2 h-full'>
                    {relatedProducts.map((product) => (
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
}
