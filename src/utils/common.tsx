import { useEffect } from 'react';

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
