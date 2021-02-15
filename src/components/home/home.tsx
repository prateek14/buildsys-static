import React, { Fragment, ReactElement } from 'react';
import { useMediaPredicate } from 'react-media-hook';
import { SalesButton, useTitle } from '../../utils/common';
import { SinglePanel } from '../common/single-panel';
import { TwoColumnPanel } from '../common/two-column-panel';
import './home.scss';

export default function Home(): ReactElement {
    const title = 'Home';
    useTitle(title);
    const isTablet = useMediaPredicate('(max-width: 979px)');
    const colWidth = isTablet ? 'calc(100vw - 64px)' : 'calc(50vw - 164px)';
    const colPadding = isTablet ? '64px 64px' : '300px 64px 64px 100px';
    return (
        <Fragment>
            <TwoColumnPanel
                padding="0"
                gutterWidth="0px"
                gutterHeight="0px"
                backgroundColor="#ffffff"
                rightChildren={!isTablet && <SinglePanel width={colWidth} padding={colPadding}></SinglePanel>}>
                <SinglePanel className="home-panel-1" width={colWidth} padding={colPadding} backgroundColor="#f8f6f0">
                    <h1>What is Buildsys?</h1>
                    <p className="text-24">
                        Construction productivity app that reduces paperwork and makes field-to-office communication
                        <strong> faster, trackable and mobile.</strong>
                    </p>
                    <SalesButton></SalesButton>
                </SinglePanel>
            </TwoColumnPanel>
        </Fragment>
    );
}
