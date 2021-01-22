import React, { PropsWithChildren, ReactNode } from 'react';
import { useMediaPredicate } from 'react-media-hook';

import './two-column-panel.scss';

export type TwoColumnPanelProps = PropsWithChildren<{ backgroundColor: string }> & {
    gutterWidth?: string;
    gutterHeight?: string;
    marginTop?: string;
    marginBottom?: string;
    rightChildren?: ReactNode;
};

export const TwoColumnPanel: React.FunctionComponent<TwoColumnPanelProps> = (
    props: TwoColumnPanelProps,
): JSX.Element => {
    const isTablet = useMediaPredicate('(max-width: 979px)');
    const isMobile = useMediaPredicate('(max-width: 480px)');
    const className = isMobile ? 'mobile' : isTablet ? 'tablet' : '';
    return (
        <div
            className={'two-col flex ' + className}
            style={{
                backgroundColor: props.backgroundColor,
                paddingTop: props.marginTop || '64px',
                paddingBottom: props.marginBottom || '64px',
            }}>
            <div className="col-1">{props.children}</div>
            <div
                className="gutter"
                style={{ width: props.gutterWidth || '56px', height: props.gutterHeight || '64px' }}></div>
            <div className="col-2">{props.rightChildren}</div>
        </div>
    );
};
