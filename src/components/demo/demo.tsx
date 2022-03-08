import React, { Fragment, useState } from 'react';
import { useMediaPredicate } from 'react-media-hook';
import { Dictionary } from '../../abstract/interfaces';
import { sendEmail, useTitle } from '../../utils/common';
import { ToastUtils } from '../../utils/toast';
import { FormEntry, Form, FormEntryToElement } from '../common/form';
import { SinglePanel } from '../common/single-panel';
import { TwoColumnPanel } from '../common/two-column-panel';
import './demo.scss';

export const Demo: React.FunctionComponent = (): JSX.Element => {
    const title = 'Schedule a Demo';
    useTitle(title);
    const [errors, setErrors] = useState<Dictionary<string>>({});
    const entries: Dictionary<FormEntry> = {
        name: {
            type: 'text',
            placeholder: 'First Name',
            label: 'First Name',
            required: true,
            size: 'half',
        },
        lastName: {
            type: 'text',
            placeholder: 'Last Name',
            label: 'Last Name',
            required: true,
            size: 'half',
        },
        phone: {
            type: 'tel',
            placeholder: 'Phone',
            label: 'Phone',
            required: true,
            size: 'half',
        },
        email: {
            type: 'email',
            placeholder: 'Email',
            label: 'Email',
            required: true,
            size: 'half',
        },
        company: {
            type: 'text',
            placeholder: 'Company',
            label: 'Company',
            required: true,
            size: 'full',
        },
        message: {
            type: 'textarea',
            placeholder: 'Message',
            label: 'Message',
            required: true,
            size: 'full',
        },
    };

    const onSubmit = (data: FormData, target: HTMLFormElement) => {
        const object: Dictionary<string> = {};
        data.forEach((value, key) => {
            object[key] = value as string;
        });
        let message = 'New message on Contact Form' + '\r\n';
        message += 'Name: ' + object['name'] + ' ' + object['lastName'] + '\r\n';
        message += 'Phone: ' + object['phone'] + '\r\n';
        message += 'Email: ' + object['email'] + '\r\n';
        message += 'Company: ' + object['company'] + '\r\n';
        message += 'Message:\r\n ' + object['message'] + '\r\n';

        sendEmail(message)
            .then((data) => {
                console.log(data);
                ToastUtils.success('Message sent successfully.');
                target.reset();
            })
            .catch(() => {
                ToastUtils.error('Failed to submit message.');
            });
    };

    const isTablet = useMediaPredicate('(max-width: 979px)');
    const colPadding = isTablet ? '64px 24px' : '64px 100px';

    return (
        <Fragment>
            <TwoColumnPanel
                gutterWidth="72px"
                gutterHeight="64px"
                backgroundColor="#f8f6f0"
                padding={colPadding}
                rightChildren={
                    <SinglePanel>
                        <div style={{ maxWidth: '500px' }}>
                            <div className="demo-form">
                                <h2 className="text-center">Sign up for a demo</h2>
                                <p className="text-center">All demos come with a free 15 day trial.</p>
                                {/* <Form data={entries} onError={setErrors} onSubmit={onSubmit}>
                                    {Object.keys(entries).map((key) => {
                                        return (
                                            <div key={key} className={entries[key].size}>
                                                {FormEntryToElement(key, entries[key], errors[key])}
                                            </div>
                                        );
                                    })}
                                    <div className="full text-center">
                                        <input type="submit" value="Schedule Demo Now" />
                                    </div>
                                </Form> */}
                                {/* <input type="button" value="Sign up"/> */}
                                <a target="blank" className="signup-link" href="https://app.buildsys.co/account/signup">
                                    Sign up
                                </a>
                            </div>
                        </div>
                    </SinglePanel>
                }>
                <SinglePanel className="buildsys-in-action">
                    <h1>See Buildsys in Action</h1>
                    <p className="text-20">Sign up for a personalized demo today</p>
                    <hr className="buildsys"></hr>
                    <p className="text-16">See how Buildsys connects the field to the office to help you achieve:</p>
                    <ul className="text-16">
                        <li>Ultimate project visibility</li>
                        <li>Document control that is simple, trackable and accountable</li>
                        <li> One updated workspace for your team</li>
                    </ul>
                    <picture>
                        <source srcSet="/assets/hero/demo1.webp" type="image/webp" />
                        <source srcSet="/assets/hero/demo1.jpg" type="image/png" />
                        <img
                            src="/assets/hero/demo1.jpg"
                            style={{ maxWidth: '500px', borderRadius: '15px' }}
                            alt="Schedule demo"
                            title="Schedule demo"
                        />
                    </picture>
                </SinglePanel>
            </TwoColumnPanel>
        </Fragment>
    );
};
