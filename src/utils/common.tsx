import { useEffect, useState } from 'react';
import React from 'react';

export const useTitle = (title: string): void => {
    title = title + ' | Buildsys - Construction Productivity App';
    useEffect(() => {
        const prevTitle = document.title;
        document.title = title;
        return () => {
            document.title = prevTitle;
        };
    });
};

export interface PostBody {
    email: string;
    message: string;
}

export const sendEmail = async (message: string): Promise<unknown> => {
    const opts: PostBody = { email: 'hello@buildsys.co', message: message };
    const response = await fetch('/api/sendEmail', {
        method: 'post',
        body: JSON.stringify(opts),
    });
    return response.json();
};

export const useWindowSize = (): { width?: number; height?: number } => {
    // Initialize state with undefined width/height so server and client renders match
    // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
    const [windowSize, setWindowSize] = useState<{ width?: number; height?: number }>({
        width: undefined,
        height: undefined,
    });

    useEffect(() => {
        // Handler to call on window resize
        function handleResize() {
            // Set window width/height to state
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        }

        // Add event listener
        window.addEventListener('resize', handleResize);

        // Call handler right away so state gets updated with initial window size
        handleResize();

        // Remove event listener on cleanup
        return () => window.removeEventListener('resize', handleResize);
    }, []); // Empty array ensures that effect is only run on mount

    return windowSize;
};

export const SalesButton: React.FunctionComponent = (): JSX.Element => {
    return (
        <a className="lm-button-primary text-center mt-24" href="/schedule-demo" id="basic-plan-card-button">
            Schedule Demo
        </a>
    );
};
