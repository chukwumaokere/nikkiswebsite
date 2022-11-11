'use client';

import { use, useMemo } from 'react';

const fetchSomething = async () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('something new 2');
            return resolve('something new 2');
        }, 7000);
    });
};

const promiseValue = fetchSomething();

export default function Page () {
    const someThing = use(promiseValue);
    return (<>Yo client {someThing}</>);
}
