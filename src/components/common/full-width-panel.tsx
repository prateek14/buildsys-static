import React, { PropsWithChildren } from 'react';
import { useMediaPredicate } from 'react-media-hook';
import './full-width-panel.scss';

export type FullWidthPanelProps = PropsWithChildren<{ backgroundColor: string; className?: string }>;

export const FullWidthPanel: React.FunctionComponent<FullWidthPanelProps> = (
    props: FullWidthPanelProps,
): JSX.Element => {
    const isTablet = useMediaPredicate('(max-width: 979px)');
    const isMobile = useMediaPredicate('(max-width: 480px)');
    const className = isMobile ? 'mobile ' + props.className : isTablet ? 'tablet ' + props.className : props.className;
    return (
        <div className={'full-width flex-column ' + className} style={{ backgroundColor: props.backgroundColor }}>
            {props.children}
        </div>
    );
};
