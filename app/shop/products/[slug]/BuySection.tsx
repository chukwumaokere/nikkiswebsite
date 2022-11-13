'use client';

import { use, Suspense } from 'react';

const fetchSomething = async () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('something new 2');
            return resolve('something new 2');
        }, 15000);
    });
};

const promiseValue = fetchSomething();

export default function BuySection () {
    const someThing = use(promiseValue);
    return (
        <Suspense fallback={<div>Loading section...</div>}>
            <>Yo client {someThing}</>
        </Suspense>
    );
}
