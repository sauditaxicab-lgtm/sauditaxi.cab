'use client';

import { useEffect } from 'react';

/**
 * DeferredStyles component
 * Loads non-critical CSS after the page has rendered to prevent blocking
 */
export function DeferredStyles() {
    useEffect(() => {
        // Load deferred styles after initial render
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = '/_next/static/css/deferred.css';
        link.media = 'print';
        link.onload = function () {
            // @ts-ignore
            this.media = 'all';
        };

        document.head.appendChild(link);
    }, []);

    return null;
}
