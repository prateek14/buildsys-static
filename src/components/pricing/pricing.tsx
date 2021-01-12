import React, { Fragment, useState } from 'react';
import { useMediaPredicate } from 'react-media-hook';
import { Dictionary } from '../../abstract/interfaces';
import { useTitle } from '../../utils/common';
import { FullWidthPanel } from '../common/full-width-panel';
import './pricing.scss';
import { LoremIpsum } from '../../constants';

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
            <ComparePlans></ComparePlans>
            <div>
                <p>{LoremIpsum}</p>
                <p>{LoremIpsum}</p>
            </div>
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
            constraints: ['Up to 25 Contributors', 'Up to 1000 Drawings', 'Unlimited Projects'],
            featureText: 'Key Features',
            features: ['Drawings', 'Meetings', 'Files', 'Photos', 'Tasks'],
        },
        {
            title: 'Pro',
            desc: 'Workflows & integrations',
            color: '#ffcb02',
            price: { annual: Math.round(2083 * currency.coeff), monthly: Math.round(2500 * currency.coeff) },
            constraints: ['Up to 100 Contributors', 'Unlimited Drawings', 'Unlimited Projects'],
            featureText: 'Everything in Basic, plus',
            features: ['RFIs', 'Submittals', 'Custom Forms', 'Integrations'],
        },
        {
            title: 'Enterprise',
            desc: 'Advanced admin & security',
            color: '#3079cd',
            price: { annual: Math.round(4167 * currency.coeff), monthly: Math.round(5000 * currency.coeff) },
            constraints: ['Unlimited Contributors', 'Unlimited Drawings', 'Unlimited Projects'],
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
                <a className="lm-button-primary text-center mt-24" href="/contact" id="basic-plan-card-button">
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
                            Buildsys has different kinds of accounts for members of your team - Admins, Contributors
                            &amp; Readers. Admins &amp; Contributors can create new drawings, tasks, meetings, RFIs etc.
                            However, Readers can only view and comment on existing data on Buildsys. We only charge for
                            the people who create or upload data to Buildsys.
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

export const ComparePlans: React.FunctionComponent = (): JSX.Element => {
    const isMobile = useMediaPredicate('(max-width: 979px)');
    if (isMobile) {
        return <Fragment></Fragment>;
    }
    return (
        <div className="compare-plans-container">
            <article>
                <table className="sticky">
                    <thead>
                        <tr>
                            <th className="hide"></th>
                            <th className="bg-purple">Self-Employed</th>
                            <th className="bg-blue">Simple Start</th>
                            <th className="bg-blue default">Essentials</th>
                            <th className="bg-blue">Plus</th>
                        </tr>
                    </thead>
                </table>
                <table>
                    <tbody>
                        <tr>
                            <td>Monthly price</td>
                            <td>
                                <span className="txt-l">6</span>
                            </td>
                            <td>
                                <span className="txt-l">7</span>
                            </td>
                            <td className="default">
                                <span className="txt-l">15</span>
                            </td>
                            <td>
                                <span className="txt-l">25</span>
                            </td>
                        </tr>
                        <tr>
                            <td colSpan={5} className="sep">
                                Get started easily
                            </td>
                        </tr>
                        <tr>
                            <td>Includes free updates and new features as they become available</td>
                            <td>
                                <span className="tick">&#10004;</span>
                            </td>
                            <td>
                                <span className="tick">&#10004;</span>
                            </td>
                            <td className="default">
                                <span className="tick">&#10004;</span>
                            </td>
                            <td>
                                <span className="tick">&#10004;</span>
                            </td>
                        </tr>
                        <tr>
                            <td>No software to install — sign up online in moments</td>
                            <td>
                                <span className="tick">&#10004;</span>
                            </td>
                            <td>
                                <span className="tick">&#10004;</span>
                            </td>
                            <td className="default">
                                <span className="tick">&#10004;</span>
                            </td>
                            <td>
                                <span className="tick">&#10004;</span>
                            </td>
                        </tr>
                        <tr>
                            <td>Import customer &amp; supplier details from Excel, Outlook and .csv</td>
                            <td></td>
                            <td>
                                <span className="tick">&#10004;</span>
                            </td>
                            <td className="default">
                                <span className="tick">&#10004;</span>
                            </td>
                            <td>
                                <span className="tick">&#10004;</span>
                            </td>
                        </tr>
                        <tr>
                            <td>Accept card payments in QuickBooks Online</td>
                            <td></td>
                            <td>
                                <span className="tick">&#10004;</span>
                            </td>
                            <td className="default">
                                <span className="tick">&#10004;</span>
                            </td>
                            <td>
                                <span className="tick">&#10004;</span>
                            </td>
                        </tr>
                        <tr>
                            <td colSpan={5} className="sep">
                                Stay protected and get support
                            </td>
                        </tr>
                        <tr>
                            <td>Free telephone and online support</td>
                            <td></td>
                            <td>
                                <span className="tick">&#10004;</span>
                            </td>
                            <td className="default">
                                <span className="tick">&#10004;</span>
                            </td>
                            <td>
                                <span className="tick">&#10004;</span>
                            </td>
                        </tr>
                        <tr>
                            <td>Strong encryption protects your business data</td>
                            <td>
                                <span className="tick">&#10004;</span>
                            </td>
                            <td>
                                <span className="tick">&#10004;</span>
                            </td>
                            <td className="default">
                                <span className="tick">&#10004;</span>
                            </td>
                            <td>
                                <span className="tick">&#10004;</span>
                            </td>
                        </tr>
                        <tr>
                            <td>Automatic data backups</td>
                            <td>
                                <span className="tick">&#10004;</span>
                            </td>
                            <td>
                                <span className="tick">&#10004;</span>
                            </td>
                            <td className="default">
                                <span className="tick">&#10004;</span>
                            </td>
                            <td>
                                <span className="tick">&#10004;</span>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </article>
        </div>
    );
};
