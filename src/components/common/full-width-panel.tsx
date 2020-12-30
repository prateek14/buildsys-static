import React, { PropsWithChildren } from 'react';
import './full-width-panel.scss';

export type FullWidthPanelProps = PropsWithChildren<{ backgroundColor: string }>;

export const FullWidthPanel: React.FunctionComponent<FullWidthPanelProps> = (
    props: FullWidthPanelProps,
): JSX.Element => {
    return (
        <div className="full-width flex-column" style={{ backgroundColor: props.backgroundColor }}>
            {props.children}
        </div>
    );
};
