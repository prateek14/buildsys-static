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
