// hooks/useTawkTo.js
import { useEffect } from 'react';

const useTawkTo = () => {
    useEffect(() => {
        const tawkToScript = document.createElement('script');
        tawkToScript.src = `https://embed.tawk.to/${process.env.TAWKTO_ID}/default`; // Use the environment variable
        tawkToScript.async = true;
        tawkToScript.setAttribute('crossorigin', '*');
        document.body.appendChild(tawkToScript);

        return () => {
            document.body.removeChild(tawkToScript);
        };
    }, []);
};

export default useTawkTo;