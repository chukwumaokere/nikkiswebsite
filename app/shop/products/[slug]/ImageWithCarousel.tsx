'use client';

import Image from 'next/image';
import { SyntheticEvent, useCallback, useState } from 'react';

type CarouselProps = {
    images: { url: string }[] | undefined,
    productImage: string | undefined,
    productName: string | undefined,
    children: React.ReactNode,
};

export default function ImageWithCarousel ({images, productImage, productName, children}: CarouselProps): React.ReactElement {
    const [currentImage, setCurrentImage] = useState<string>(productImage || '');
    const onImageClick = useCallback((e: SyntheticEvent) => {
        console.log(e);
        setCurrentImage(e.target['data-loaded-src']);
    }, []);

    return (
        <div className='flex flex-col lg:flex-row gap-4'>
            <div className='flex flex-row lg:flex-col space-x-2 justify-start lg:items-center gap-2'>
                {images?.map((image, index) => {
                    return (
                        <div key={index} className='flex w-20 h-20 !m-0 relative' onClick={onImageClick}>
                            <Image
                                fill={true}
                                style={{objectFit: 'contain', cursor: 'pointer'}}
                                src={image.url}
                                alt={`${productName} carousel image`} />
                        </div>
                    );
                })}
            </div>
            <div className='flex flex-col w-full gap-2'>
                <Image
                    width={1000}
                    height={1000}
                    alt={`${productName} product image`}
                    src={currentImage} />
                {children}
            </div>
        </div>
    );
};
