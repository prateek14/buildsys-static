import React, { Fragment, useState } from 'react';
import { useMediaPredicate } from 'react-media-hook';
import { Dictionary } from '../../abstract/interfaces';
import { useTitle } from '../../utils/common';
import { FullWidthPanel } from '../common/full-width-panel';
import './pricing.scss';

interface Currency {
    text: string;
    symbol: string;
    coeff: number;
}

interface PricingSlab {
    title: string;
    desc: string;
    color: string;
    price:
        | string
        | {
              annual: number;
              monthly?: number;
          };
    constraints: string[];
    featureText: string;
    features: string[];
}

export const Currencies: Dictionary<Currency> = {
    USD: { text: 'USD', coeff: 0.0133, symbol: '$' },
    INR: { text: 'INR', coeff: 1, symbol: '₹' },
    GBP: { text: 'GBP', coeff: 0.010212418, symbol: '£' },
};

export const Pricing: React.FunctionComponent = (): JSX.Element => {
    const title = 'Pricing';
    useTitle(title);

    return (
        <Fragment>
            <PricingContainer></PricingContainer>
            <OnlyContributorsContainer></OnlyContributorsContainer>
        </Fragment>
    );
};

export const PricingContainer: React.FunctionComponent = (): JSX.Element => {
    const isMobile = useMediaPredicate('(max-width: 979px)');
    const [currencyId, setCurrency] = useState('INR');
    const currency = Currencies[currencyId];

    const slabs: PricingSlab[] = [
        {
            title: 'Basic',
            desc: 'Drawings & document management',
            color: '#212121',
            price: { annual: Math.round(1250 * currency.coeff), monthly: Math.round(1500 * currency.coeff) },
            constraints: ['Up to 25 Creators', 'Up to 100 videos & screenshots', 'Up to 5 mins recording length'],
            featureText: 'Key Features',
            features: ['Drawings', 'Meetings', 'Files', 'Photos', 'Tasks'],
        },
        {
            title: 'Pro',
            desc: 'Workflows & integrations',
            color: '#ffcb02',
            price: { annual: Math.round(2083 * currency.coeff), monthly: Math.round(2500 * currency.coeff) },
            constraints: ['Up to 25 Creators', 'Up to 100 videos & screenshots', 'Up to 5 mins recording length'],
            featureText: 'Everything in Basic, plus',
            features: ['RFIs', 'Submittals', 'Custom Forms', 'Integrations'],
        },
        {
            title: 'Enterprise',
            desc: 'Advanced admin & security',
            color: '#3079cd',
            price: { annual: Math.round(4167 * currency.coeff), monthly: Math.round(5000 * currency.coeff) },
            constraints: ['Up to 25 Creators', 'Up to 100 videos & screenshots', 'Up to 5 mins recording length'],
            featureText: 'Everything in Pro, plus',
            features: ['SSO (SAML)', 'API Access'],
        },
    ];

    return (
        <FullWidthPanel backgroundColor="#f8f6f0">
            <h2 className="text-center">Choose the plan that’s right for you &amp; your team.</h2>

            <div className={isMobile ? 'flex-column pricing-mobile' : 'flex-column'}>
                <div className="currency-widget text-center">
                    {Object.keys(Currencies).map((key, i) => {
                        const curr = Currencies[key];
                        const isActive = key === currencyId;
                        return (
                            <span onClick={() => setCurrency(key)} className={isActive ? 'active' : ''} key={i}>
                                {curr.text}
                            </span>
                        );
                    })}
                </div>
                <div className="pricing-container">
                    {slabs.map((v, i) => (
                        <PricingPanel key={i} slab={v} currency={currency}></PricingPanel>
                    ))}
                </div>
            </div>
        </FullWidthPanel>
    );
};

export const PricingPanel: React.FunctionComponent<{ slab: PricingSlab; currency: Currency }> = ({
    slab,
    currency,
}: {
    slab: PricingSlab;
    currency: Currency;
}): JSX.Element => {
    let isStringPrice = true;
    let annualPrice = '';
    let monthlyPrice = '';
    if (slab.price instanceof Object) {
        isStringPrice = false;
        annualPrice = currency.symbol + slab.price.annual;
        monthlyPrice = currency.symbol + slab.price.monthly;
    }
    return (
        <div className="pricing-panel" style={{ borderTopColor: slab.color }}>
            <div>
                <h3>{slab.title}</h3>
                <div>{slab.desc}</div>
                <div className="price flex-center">
                    {isStringPrice && <div className="text-28 text-bold">{slab.price}</div>}
                    {!isStringPrice && (
                        <div className="flex-column">
                            <div className="flex-center">
                                <div className="text-42 text-bold">{annualPrice}</div>
                                <div className="pl-8 text-14 flex-column">
                                    <span>per Contributor/mo,</span>
                                    <span>billed anually</span>
                                </div>
                            </div>
                            {monthlyPrice && (
                                <div className="flex-center">
                                    <span className="text-grey">or {monthlyPrice}/mo, billed monthly</span>
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </div>
            <hr />
            <div>
                <div className="text-16 flex-column">
                    {slab.constraints.map((v, i) => (
                        <div key={i}>{v}</div>
                    ))}
                </div>
            </div>
            <hr />
            <div>
                <div className="text-16 text-bold">{slab.featureText}</div>
                <div className="text-16 flex-column middle-div">
                    {slab.features.map((v, i) => (
                        <div key={i}>{v}</div>
                    ))}
                </div>
                <a
                    className="lm-button-primary text-center mt-24"
                    href="https://www.loom.com/signup"
                    id="basic-plan-card-button">
                    Contact Sales
                </a>
            </div>
        </div>
    );
};

export const OnlyContributorsContainer: React.FunctionComponent = (): JSX.Element => {
    const isMobile = useMediaPredicate('(max-width: 979px)');
    return (
        <FullWidthPanel backgroundColor="#ffffff">
            <div className={isMobile ? 'contrib-mobile' : ''}>
                <div className="contrib-container">
                    <div className="flex-column left-cont">
                        <h3>You only pay for Contributors</h3>
                        <div>
                            Buildsys has different kinds of accounts for members of your team - Contributors &amp;
                            Readers. Contributors can create new drawings, tasks, meetings, RFIs etc. However, Readers
                            can only view and comment on existing data on Buildsys. We only charge for the people who
                            create or upload data to Buildsys.
                        </div>
                    </div>
                    <div className="flex-column flex-justify-center right-cont">
                        <div className="bg-offwhite px-24 py-6 flex-grow md:px-36 md:py-18 lg:px-64">
                            <div className="account-type flex-center flex-justify pv-18">
                                <div className="account-type-info">
                                    <h4>Admin accounts</h4>
                                    <div className="text-14">Have full access to all available features</div>
                                </div>
                                <p className="account-type-price active text-14">Paid</p>
                            </div>
                            <div className="account-type flex-center flex-justify pv-18">
                                <div className="account-type-info">
                                    <h4>Contributor accounts</h4>
                                    <div className="text-14">
                                        Can upload drawings, files &amp; photos and can create tasks, meetings, RFIs,
                                        submittals and forms.
                                    </div>
                                </div>
                                <p className="account-type-price active text-14">Paid</p>
                            </div>
                            <div className="account-type flex-center flex-justify pv-18">
                                <div className="account-type-info">
                                    <h4>Reader accounts</h4>
                                    <div className="text-14">
                                        Can view and comment on uploaded drawings, files, photos, tasks, RFIs,
                                        submittals and forms.
                                    </div>
                                </div>
                                <p className="account-type-price text-14">Free</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </FullWidthPanel>
    );
};
