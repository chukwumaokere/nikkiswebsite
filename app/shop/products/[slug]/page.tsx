import { Suspense, use } from 'react';
import BuySection from './BuySection';
import Header from '@/app/Header';
import Subheader from '@/app/Subheader';
import prisma from '@/lib/db';
import ImageWithCarousel from './ImageWithCarousel';
import ParagraphText from '@/app/ParagraphText';
import Link from 'next/link';
import Image from 'next/image';

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
}

export default function Page ({params}: Props) {
    const product = use(getProduct(params.slug));
    const relatedProducts = use(getRelatedProducts(params.slug));

    return (
        <>
            <div className='flex flex-col lg:flex-row gap-4'>
                <div className='flex lg:flex-col w-full h-full'>
                    <ImageWithCarousel images={product?.images} productName={product?.name} productImage={product?.productImage?.url}>
                        <div className='flex lg:flex-col gap-4'>
                            <div className='flex lg:flex-col'>
                                <Subheader>Artist&quot;s Descrption</Subheader>
                                <ParagraphText>Just some thoughts about this product</ParagraphText>
                            </div>
                            <div className='flex lg:flex-col'>
                                <Subheader>Materials Used</Subheader>
                                <ParagraphText>Google Chrome OMEGALUL</ParagraphText>
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
                    </ImageWithCarousel>
                </div>
            </div>
            <div className='flex lg:flex-col gap-2'>
                <Header>
                    {product?.name}
                </Header>
                <Subheader>
                    {product?.description}
                </Subheader>
                <span>Something static loading beside a loading client component</span>
                <div className='flex flex-col'>
                    <Suspense fallback={<span>Loading...</span>}>
                        <BuySection />
                    </Suspense>
                    <span>Something next to it</span>
                </div>
            </div>
        </>);
}
