import React, { PropsWithChildren } from 'react';
import './default.scss';

export type DefaultProps = PropsWithChildren<{ title: string }>;

export const Default: React.FunctionComponent<DefaultProps> = (props: DefaultProps): JSX.Element => {
    return (
        <div className="default flex-column">
            <div className="title">
                <h3>{props.title}</h3>
            </div>
            <div className="default-body">{props.children}</div>
        </div>
    );
};
