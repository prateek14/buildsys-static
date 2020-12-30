import React, { Fragment } from 'react';
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
              currency: string;
          };
    constraints: string[];
    featureText: string;
    features: string[];
}

export const Currencies: Dictionary<Currency> = {
    USD: { text: 'USD', coeff: 0.0133, symbol: '$' },
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
    const slabs: PricingSlab[] = [
        {
            title: 'Basic',
            desc: 'Drawings & document management',
            color: '#212121',
            price: { annual: 17, currency: 'USD', monthly: 20 },
            constraints: ['Up to 25 Creators', 'Up to 100 videos & screenshots', 'Up to 5 mins recording length'],
            featureText: 'Key Features',
            features: ['Drawings', 'Meetings', 'Files', 'Photos', 'Tasks'],
        },
        {
            title: 'Pro',
            desc: 'Workflows & integrations',
            color: '#ffcb02',
            price: { annual: 28, currency: 'USD', monthly: 33 },
            constraints: ['Up to 25 Creators', 'Up to 100 videos & screenshots', 'Up to 5 mins recording length'],
            featureText: 'Everything in Basic, plus',
            features: ['RFIs', 'Submittals', 'Custom Forms', 'Integrations'],
        },
        {
            title: 'Enterprise',
            desc: 'Advanced admin & security',
            color: '#3079cd',
            price: { annual: 56, currency: 'USD', monthly: 67 },
            constraints: ['Up to 25 Creators', 'Up to 100 videos & screenshots', 'Up to 5 mins recording length'],
            featureText: 'Everything in Pro, plus',
            features: ['SSO (SAML)', 'API Access'],
        },
    ];
    return (
        <FullWidthPanel backgroundColor="#f8f6f0">
            <h2 className="text-center">Choose the plan that’s right for you or your team.</h2>
            <br />
            <div className={isMobile ? 'pricing-mobile' : ''}>
                <div className="pricing-container">
                    {slabs.map((v, i) => (
                        <PricingPanel key={i} slab={v}></PricingPanel>
                    ))}
                </div>
            </div>
        </FullWidthPanel>
    );
};

export const PricingPanel: React.FunctionComponent<{ slab: PricingSlab }> = ({
    slab,
}: {
    slab: PricingSlab;
}): JSX.Element => {
    let isStringPrice = true;
    let annualPrice = '';
    let monthlyPrice = '';
    if (slab.price instanceof Object) {
        isStringPrice = false;
        const currency = Currencies[slab.price.currency];
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
                            It takes two (or more) to communicate with Loom. One person creates a video message and
                            others watch, share, and react to it. We only charge for the people who create videos.
                        </div>
                    </div>
                    <div className="flex-column right-cont"></div>
                </div>
            </div>
        </FullWidthPanel>
    );
};
