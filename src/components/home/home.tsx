import React, { Fragment, ReactElement } from 'react';
import { useMediaPredicate } from 'react-media-hook';
import { FunFact, SalesButton, useTitle } from '../../utils/common';
import { SinglePanel } from '../common/single-panel';
import { TwoColumnPanel } from '../common/two-column-panel';
import './home.scss';

export default function Home(): ReactElement {
    const title = 'Home';
    useTitle(title);
    const isTablet = useMediaPredicate('(max-width: 979px)');
    const colWidth = isTablet ? 'calc(100vw - 64px)' : 'calc(50vw - 164px)';
    const colPadding = isTablet ? '64px 64px' : '300px 64px 100px 100px';
    const colPadding2 = isTablet ? '64px 64px' : '150px 64px 100px 100px';

    const imgWidth = 'calc(50vw - 192px)';
    const imgMargin = '96px';
    const imgBorderRadius = '8px';
    const colWidthLeft = 'calc(50vw - 17px)';

    return (
        <Fragment>
            <TwoColumnPanel
                className="home-1-bg"
                padding="0"
                gutterWidth="0px"
                gutterHeight="0px"
                backgroundColor="#ffffff"
                background="url('/assets/hero/home1.webp') no-repeat"
                rightChildren={
                    !isTablet && (
                        <SinglePanel
                            width={colWidth}
                            padding={colPadding}
                            backgroundColor="rgba(0,0,0,0.3)"></SinglePanel>
                    )
                }>
                <SinglePanel
                    className="home-panel-1"
                    width={colWidth}
                    padding={colPadding}
                    backgroundColor="rgba(0,0,0,0.3)">
                    <h1 className="text-66">Build with ease</h1>
                    <p className="pt-24 text-24 text-bold">One construction productivity tool for your whole team.</p>
                    <p className="text-24 text-bold">
                        Buildsys reduces paperwork and makes field to office communication faster, trackable and mobile.
                    </p>
                    <SalesButton></SalesButton>
                </SinglePanel>
            </TwoColumnPanel>
            <TwoColumnPanel
                padding="0"
                gutterWidth="0px"
                gutterHeight="0px"
                backgroundColor="#f8f6f0"
                rightChildren={
                    <SinglePanel
                        className="home-panel-1 flex-column"
                        width={colWidth}
                        padding={colPadding2}
                        backgroundColor="#f8f6f0">
                        <h1 className="text-48">Have all project data at one place.</h1>
                        <p className="text-20">
                            Buildsys brings all you project data at one place. You can manage project tasks, documents,
                            meetings, drawings, RFIs, Submittals all at one place, while letting you use all the the
                            tools you already love.
                        </p>
                        <p className="text-20">
                            Buildsys integrates with leading softwares used by construction professionals; syncing
                            information stored in silos and with different departments and brings it all at one place.
                        </p>
                        <FunFact>
                            Project teams spend almost 45 percent of their time, simply collating data from different
                            teams.
                        </FunFact>
                    </SinglePanel>
                }>
                {!isTablet && (
                    <SinglePanel className="flex-center" width={colWidthLeft}>
                        <picture>
                            <source srcSet="/assets/hero/one-place.webp" type="image/webp" />
                            <source srcSet="/assets/hero/one-place.jpg" type="image/jpeg" />
                            <img
                                style={{ width: imgWidth, borderRadius: imgBorderRadius, margin: imgMargin }}
                                src="/assets/hero/one-place.jpg"
                                alt="All project data at one place"
                                title="All project data at one place"
                            />
                        </picture>
                    </SinglePanel>
                )}
            </TwoColumnPanel>
            <TwoColumnPanel
                padding="0"
                gutterWidth="0px"
                gutterHeight="0px"
                backgroundColor="#ffffff"
                rightChildren={
                    !isTablet && (
                        <SinglePanel className="flex-center" width={colWidthLeft}>
                            <picture>
                                <source srcSet="/assets/hero/coordination.webp" type="image/webp" />
                                <source srcSet="/assets/hero/coordination.jpg" type="image/jpeg" />
                                <img
                                    style={{ width: imgWidth, borderRadius: imgBorderRadius, margin: imgMargin }}
                                    src="/assets/hero/coordination.jpg"
                                    alt="Real time coordination"
                                    title="Real time coordination"
                                />
                            </picture>
                        </SinglePanel>
                    )
                }>
                <SinglePanel
                    className="home-panel-1 flex-column"
                    width={colWidth}
                    padding={colPadding2}
                    backgroundColor="#ffffff">
                    <h1 className="text-48">Save time spent on rework and coordination.</h1>
                    <p className="text-20">
                        Buildsys helps cuts through the clutter and follow up cycles, surfacing what matters the most.
                    </p>
                    <p className="text-20">
                        Sending drawings or meeting minutes over Buildsys is more efficient than typing long emails,
                        making a record of events on Excel or sending the information via snail mail that does not
                        happen in real-time. Buildsys takes care of all of this.
                    </p>
                    <p className="text-20">
                        Finding attachments is easy, reminding someone is easy, responding to issues is real time and
                        rework because of old drawings, very unlikely.
                    </p>
                    <FunFact>
                        A push notification about an issue sent on a users’ personal device, be that their mobile phone
                        or tablet is 90% more likely to receive an immediate response than a question sent via email.
                        Try it.
                    </FunFact>
                </SinglePanel>
            </TwoColumnPanel>
            <TwoColumnPanel
                padding="0"
                gutterWidth="0px"
                gutterHeight="0px"
                backgroundColor="#f8f6f0"
                rightChildren={
                    <SinglePanel
                        className="home-panel-1 flex-column"
                        width={colWidth}
                        padding={colPadding2}
                        backgroundColor="#f8f6f0">
                        <h1 className="text-48">You could be focusing on construction and not on paperwork. </h1>
                        <p className="text-20">
                            With Buildsys, document management becomes so simple, trackable and accountable. Sending
                            reminders about upcoming tasks and overdue items is built-in and seamless. No need for ten
                            different modes of follow ups.
                        </p>
                        <p className="text-20">
                            Receiving project updates is real-time. Buildsys will notify you about all the updates you
                            want to track, and it also timestamps and dates all actions and lets you see who did what,
                            where, and when.
                        </p>
                        <FunFact>
                            After reviewing numerous studies conducted over a 30-year period documenting levels of
                            wasted time in construction activity, one meta- analysis concluded that an average of 49.6
                            percent of time in construction is devoted to wasteful activity.
                        </FunFact>
                    </SinglePanel>
                }>
                {!isTablet && (
                    <SinglePanel className="flex-center" width={colWidthLeft}>
                        <picture>
                            <source srcSet="/assets/hero/paperwork.webp" type="image/webp" />
                            <source srcSet="/assets/hero/paperwork.jpg" type="image/jpeg" />
                            <img
                                style={{ width: imgWidth, borderRadius: imgBorderRadius, margin: imgMargin }}
                                src="/assets/hero/paperwork.jpg"
                                alt="Digitize all construction workflows"
                                title="Digitize all construction workflows"
                            />
                        </picture>
                    </SinglePanel>
                )}
            </TwoColumnPanel>
        </Fragment>
    );
}
