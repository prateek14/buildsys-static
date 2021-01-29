import React, { Fragment } from 'react';
import { useMediaPredicate } from 'react-media-hook';
import { useTitle } from '../../utils/common';
import { FullWidthPanel } from '../common/full-width-panel';
import { SinglePanel } from '../common/single-panel';
import { TwoColumnPanel } from '../common/two-column-panel';
import './about.scss';

export const About: React.FunctionComponent = (): JSX.Element => {
    const title = 'About Us';
    useTitle(title);
    const isTablet = useMediaPredicate('(max-width: 979px)');
    const colWidth = isTablet ? 'calc(100vw - 64px)' : 'calc(50vw - 100px)';
    const colPadding = isTablet ? '64px 64px' : '192px 0px 64px 100px';
    return (
        <Fragment>
            <TwoColumnPanel
                padding="0px"
                gutterWidth="0px"
                gutterHeight="64px"
                backgroundColor="#f8f6f0"
                rightChildren={<SinglePanel width={colWidth} padding={colPadding}></SinglePanel>}>
                <SinglePanel width={colWidth} padding={colPadding} backgroundColor="#ffee6c">
                    <h1>Free up your project team’s time</h1>
                    <p className="text-20">
                        We are on a mission to get back your time, so you can focus on construction and not on paperwork
                    </p>
                </SinglePanel>
            </TwoColumnPanel>
            <FullWidthPanel backgroundColor="#ffffff">
            </FullWidthPanel>
            <FullWidthPanel backgroundColor="#f8f6f0">
                <h2 className="text-center">Our Leadership</h2>
            </FullWidthPanel>
        </Fragment>
    );
};
