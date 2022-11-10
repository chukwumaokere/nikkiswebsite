import Header from '@/app/Header';
import Subheader from '@/app/Subheader';
import prisma from '@/lib/db';
import Image from 'next/image';
import { use } from 'react';
import Breadcrumbs from '@/app/Breadcrumbs';

async function getProduct (slug: string) {
    const product = await prisma.product.findFirst({
        where: {
            slug: slug,
        },
    });
    return product;
}

type Props = {
    params: {
        slug: string;
    },
    children: React.ReactNode,
}

export default function Layout ({params, children}: Props): React.ReactElement {

    const product = use(getProduct(params.slug));

    return (
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
                                    fill
                                    style={{objectFit: 'contain'}}
                                    src={image.url}
                                    alt={`${product?.name} carousel image`} />
                            </div>
                        );
                    })}
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
    );
}
