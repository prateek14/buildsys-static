import React, { PropsWithChildren } from 'react';
import './single-panel.scss';

export const SinglePanel: React.FunctionComponent<PropsWithChildren<unknown>> = (
    props: PropsWithChildren<unknown>,
): JSX.Element => {
    return <div className="single-panel">{props.children}</div>;
};
