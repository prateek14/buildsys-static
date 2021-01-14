declare module 'react-faq-component' {
    export const Faq: React.FunctionComponent<{
        data: {
            title: string;
            rows: {
                title: string;
                content: string | React.ReactNode;
            }[];
        };
        styles: {
            titleTextColor: string;
            rowTitleColor: string;
        };
        config: {
            animate: boolean;
        };
    }>;
    export default Faq;
}
