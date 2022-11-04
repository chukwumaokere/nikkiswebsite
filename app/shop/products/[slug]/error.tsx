'use client';

import { useCallback, useEffect } from 'react';


export default function Error ({error, reset}: {
    error: any,
    reset: any
}): React.ReactNode {
    useEffect(() => {
        console.error(error);
    }, [error]);

    const resetError = useCallback(() => {
        reset();
    }, [reset]);

    return (
        <div>
            <p>Something went wrong!</p>
            <button onClick={resetError}>Reset error bounds</button>;
        </div>
    );
}
