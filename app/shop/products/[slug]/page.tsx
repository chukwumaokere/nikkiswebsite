import { Suspense } from 'react';
import BuySection from './BuySection';

export default function Page () {
    return (<><span>Something static loading beside a loading client component</span>
        <Suspense fallback={<div>Loading Buy Section...</div>}><BuySection /></Suspense></>);
}
