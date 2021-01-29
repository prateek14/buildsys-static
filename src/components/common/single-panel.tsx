import React, { PropsWithChildren } from 'react';
import './single-panel.scss';

export const SinglePanel: React.FunctionComponent<
    PropsWithChildren<{
        width?: string;
        padding?: string;
        backgroundColor?: string;
    }>
> = (
    props: PropsWithChildren<{
        width?: string;
        padding?: string;
        backgroundColor?: string;
    }>,
): JSX.Element => {
    return (
        <div
            className="single-panel"
            style={{
                backgroundColor: props.backgroundColor || 'transparent',
                padding: props.padding || '0px',
                width: props.width || '500px',
            }}>
            {props.children}
        </div>
    );
};
