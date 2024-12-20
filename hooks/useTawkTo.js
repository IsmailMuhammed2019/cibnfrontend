// hooks/useTawkTo.js
"use client"

import { useEffect } from 'react';

const useTawkTo = () => {
    useEffect(() => {
        // Declare Tawk_API and Tawk_LoadStart outside of the function
        window.Tawk_API = window.Tawk_API || {};
        window.Tawk_LoadStart = new Date();

        const tawkToScript = document.createElement('script');
        tawkToScript.async = true;
        tawkToScript.src = 'https://embed.tawk.to/6227ab221ffac05b1d7d9cfe/1ftlf96kj'; // Your Tawk.to ID
        tawkToScript.charset = 'UTF-8';
        tawkToScript.setAttribute('crossorigin', '*');

        document.body.appendChild(tawkToScript);

        return () => {
            document.body.removeChild(tawkToScript);
        };
    }, []);
};

export default useTawkTo;