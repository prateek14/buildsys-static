import React, { PropsWithChildren } from 'react';
import './default.scss';

export type DefaultProps = PropsWithChildren<{ title: string }>;

export const Default: React.FunctionComponent<DefaultProps> = (props: DefaultProps): JSX.Element => {
    return (
        <div className="default flex-column">
            <div className="text-center">
                <h1>{props.title}</h1>
            </div>
            <div className="default-body">{props.children}</div>
        </div>
    );
};
