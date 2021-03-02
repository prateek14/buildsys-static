import React, { PropsWithChildren, ReactNode } from 'react';
import { useMediaPredicate } from 'react-media-hook';

import './two-column-panel.scss';

export type TwoColumnPanelProps = PropsWithChildren<{ backgroundColor: string; background?: string }> & {
    gutterWidth?: string;
    gutterHeight?: string;
    padding?: string;
    rightChildren?: ReactNode;
    className?: string;
};

export const TwoColumnPanel: React.FunctionComponent<TwoColumnPanelProps> = (
    props: TwoColumnPanelProps,
): JSX.Element => {
    const isTablet = useMediaPredicate('(max-width: 979px)');
    const isMobile = useMediaPredicate('(max-width: 480px)');
    const className = isMobile ? 'mobile' : isTablet ? 'tablet' : '';
    const col2Style: React.CSSProperties = isTablet
        ? {
              paddingTop: props.gutterHeight,
          }
        : { paddingLeft: props.gutterWidth };
    return (
        <div
            className={'two-col flex ' + className + ' ' + props.className}
            style={{
                background: props.background || props.backgroundColor,
                padding: props.padding || '64px 100px',
            }}>
            <div className="col-1">{props.children}</div>
            <div className="col-2" style={col2Style}>
                {props.rightChildren}
            </div>
        </div>
    );
};
