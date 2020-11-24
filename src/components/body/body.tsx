import React, { PropsWithChildren } from 'react';
import './body.scss';

export const Body: React.FunctionComponent<unknown> = (props: PropsWithChildren<unknown>): JSX.Element => {
    return <div className="app-body">{props.children}</div>;
};
