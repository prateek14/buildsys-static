import React, { PropsWithChildren } from 'react';
import './single-panel.scss';

export const SinglePanel: React.FunctionComponent<
    PropsWithChildren<{
        width?: string;
        padding?: string;
        backgroundColor?: string;
        background?: string;
        className?: string;
    }>
> = (
    props: PropsWithChildren<{
        width?: string;
        padding?: string;
        backgroundColor?: string;
        background?: string;
        className?: string;
    }>,
): JSX.Element => {
    return (
        <div
            className={'single-panel ' + props.className}
            style={{
                background: props.background || 'none',
                backgroundColor: props.backgroundColor || 'transparent',
                padding: props.padding || undefined,
                width: props.width || undefined,
            }}>
            {props.children}
        </div>
    );
};
