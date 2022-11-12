'use client';

import { use, useMemo } from 'react';

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
    return (<>Yo client {someThing}</>);
}
