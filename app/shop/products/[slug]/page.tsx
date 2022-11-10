'use client';

import { use } from 'react';

const fetchSomething = async () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('something new 2');
            return resolve('something new 2');
        }, 7000);
    });
};

export default function Page () {
    const someThing = use(fetchSomething());
    return (<>Yo client {someThing}</>);
}
