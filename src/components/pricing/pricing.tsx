import React, { Fragment, useState } from 'react';
import { useMediaPredicate } from 'react-media-hook';
import { Dictionary } from '../../abstract/interfaces';
import { SalesButton, useTitle } from '../../utils/common';
import { FullWidthPanel } from '../common/full-width-panel';
import './pricing.scss';
import Faq from 'react-faq-component';

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
              annual: string;
              monthly?: string;
              perWhat?: string;
          };
    constraints: string[];
    featureText: string;
    features: string[];
}

interface FeatureGroup {
    title: string;
    plans: Dictionary<'none' | 'quarter' | 'half' | 'almostFull' | 'full'>;
    features: Feature[];
}

interface Feature {
    title: string;
    plans: Dictionary<boolean | string>;
}

export const Currencies: Dictionary<Currency> = {
    USD: { text: 'USD', coeff: 0.0133, symbol: '$' },
    INR: { text: 'INR', coeff: 1, symbol: '₹' },
    GBP: { text: 'GBP', coeff: 0.010212418, symbol: '£' },
};

const featureGroups: FeatureGroup[] = [
    {
        title: 'Workspace',
        plans: {
            Basic: 'half',
            Pro: 'almostFull',
            Enterprise: 'full',
        },
        features: [
            // {
            //     title: 'Contributor or Admin Accounts',
            //     plans: {
            //         Basic: 'Unlimited',
            //         Pro: 'Unlimited',
            //         Enterprise: 'Unlimited',
            //     },
            // },
            // {
            //     title: 'Reader Accounts',
            //     plans: {
            //         Basic: 'Unlimited',
            //         Pro: 'Unlimited',
            //         Enterprise: 'Unlimited',
            //     },
            // },
            {
                title: 'Projects',
                plans: {
                    Basic: 'Unlimited',
                    Pro: 'Unlimited',
                    Enterprise: 'Unlimited',
                },
            },
        ],
    },
    {
        title: 'Drawings',
        plans: {
            Basic: 'full',
            Pro: 'full',
            Enterprise: 'full',
        },
        features: [
            {
                title: 'Schedule & Track Planned Drawings',
                plans: {
                    Basic: true,
                    Pro: true,
                    Enterprise: true,
                },
            },
            {
                title: 'Upload & Publish Drawings',
                plans: {
                    Basic: true,
                    Pro: true,
                    Enterprise: true,
                },
            },
            {
                title: 'Title Block OCR (Optical Character Recognition)',
                plans: {
                    Basic: true,
                    Pro: true,
                    Enterprise: true,
                },
            },
            {
                title: 'Version Control',
                plans: {
                    Basic: true,
                    Pro: true,
                    Enterprise: true,
                },
            },
            {
                title: 'Automatic Slip Sheeting',
                plans: {
                    Basic: true,
                    Pro: true,
                    Enterprise: true,
                },
            },
            {
                title: 'View Drawings (Web)',
                plans: {
                    Basic: true,
                    Pro: true,
                    Enterprise: true,
                },
            },
            {
                title: 'View Drawings (Mobile)',
                plans: {
                    Basic: true,
                    Pro: true,
                    Enterprise: true,
                },
            },
            {
                title: 'Compare differences between versions of drawing sheets',
                plans: {
                    Basic: true,
                    Pro: true,
                    Enterprise: true,
                },
            },
            {
                title: 'Add shapes or text notes to drawing sheets',
                plans: {
                    Basic: true,
                    Pro: true,
                    Enterprise: true,
                },
            },
            {
                title: 'Add linear or area measurements to drawing sheets',
                plans: {
                    Basic: true,
                    Pro: true,
                    Enterprise: true,
                },
            },
            {
                title: 'Add links to other drawings, RFIs or specs to drawing sheets',
                plans: {
                    Basic: true,
                    Pro: true,
                    Enterprise: true,
                },
            },
            {
                title: 'Pin issues on drawing sheets and assign to team members to resolve',
                plans: {
                    Basic: true,
                    Pro: true,
                    Enterprise: true,
                },
            },
        ],
    },
    {
        title: 'Meeting Minutes',
        plans: {
            Basic: 'full',
            Pro: 'full',
            Enterprise: 'full',
        },
        features: [
            {
                title: 'Create meetings and share agenda',
                plans: {
                    Basic: true,
                    Pro: true,
                    Enterprise: true,
                },
            },
            {
                title: 'Generate meeting minutes',
                plans: {
                    Basic: true,
                    Pro: true,
                    Enterprise: true,
                },
            },
            {
                title: 'Rich text editor for agenda/minutes with tasks, links, mentions and tags',
                plans: {
                    Basic: true,
                    Pro: true,
                    Enterprise: true,
                },
            },
            {
                title: 'Assign tasks directly from minutes',
                plans: {
                    Basic: true,
                    Pro: true,
                    Enterprise: true,
                },
            },
            {
                title: 'Follow-up meetings with task forwarding',
                plans: {
                    Basic: true,
                    Pro: true,
                    Enterprise: true,
                },
            },
        ],
    },
    {
        title: 'Tasks',
        plans: {
            Basic: 'full',
            Pro: 'full',
            Enterprise: 'full',
        },
        features: [
            {
                title: 'Organize and manage tasks by stage, discipline, priority, trade and tags',
                plans: {
                    Basic: true,
                    Pro: true,
                    Enterprise: true,
                },
            },
            {
                title: 'Add updates to tasks and view task history',
                plans: {
                    Basic: true,
                    Pro: true,
                    Enterprise: true,
                },
            },
            {
                title: 'Send automatic reminders and overdue notices',
                plans: {
                    Basic: true,
                    Pro: true,
                    Enterprise: true,
                },
            },
        ],
    },
    {
        title: 'RFIs',
        plans: {
            Basic: 'none',
            Pro: 'full',
            Enterprise: 'full',
        },
        features: [
            {
                title:
                    'Create, assign, and manage RFIs, including workflow routing and visibility into status and approvals',
                plans: {
                    Basic: false,
                    Pro: true,
                    Enterprise: true,
                },
            },
            {
                title: 'Maintain complete audit trail of RFIs',
                plans: {
                    Basic: false,
                    Pro: true,
                    Enterprise: true,
                },
            },
            {
                title: 'Advanced search',
                plans: {
                    Basic: false,
                    Pro: true,
                    Enterprise: true,
                },
            },
            {
                title: 'Organize and manage RFIs by stage, discipline, priority, trade and tags',
                plans: {
                    Basic: false,
                    Pro: true,
                    Enterprise: true,
                },
            },
            {
                title: 'Respond to RFIs by email',
                plans: {
                    Basic: false,
                    Pro: true,
                    Enterprise: true,
                },
            },
        ],
    },
    {
        title: 'Submittals',
        plans: {
            Basic: 'none',
            Pro: 'full',
            Enterprise: 'full',
        },
        features: [
            {
                title: 'Create submittal packages',
                plans: {
                    Basic: false,
                    Pro: true,
                    Enterprise: true,
                },
            },
            {
                title: 'Review, approval and distribution workflows for submittal packages',
                plans: {
                    Basic: false,
                    Pro: true,
                    Enterprise: true,
                },
            },
            {
                title: 'Advanced search',
                plans: {
                    Basic: false,
                    Pro: true,
                    Enterprise: true,
                },
            },
            {
                title: 'Organize and manage Submittals by stage, discipline, priority, trade and tags',
                plans: {
                    Basic: false,
                    Pro: true,
                    Enterprise: true,
                },
            },
            {
                title: 'Respond to Submittals by email',
                plans: {
                    Basic: false,
                    Pro: true,
                    Enterprise: true,
                },
            },
        ],
    },
    {
        title: 'Enterprise',
        plans: {
            Basic: 'none',
            Pro: 'none',
            Enterprise: 'full',
        },
        features: [
            {
                title: 'Integrations with third party tools',
                plans: {
                    Basic: false,
                    Pro: false,
                    Enterprise: true,
                },
            },
            {
                title: 'API Access',
                plans: {
                    Basic: false,
                    Pro: false,
                    Enterprise: true,
                },
            },
            {
                title: 'SSO (SAML)',
                plans: {
                    Basic: false,
                    Pro: false,
                    Enterprise: true,
                },
            },
        ],
    },
];

export const Pricing: React.FunctionComponent = (): JSX.Element => {
    const title = 'Pricing';
    useTitle(title);

    const [currencyId, setCurrency] = useState('INR');
    const currency = Currencies[currencyId];
    const slabs: PricingSlab[] = [
        {
            title: 'Basic',
            desc: 'Drawings & document management',
            color: '#212121',
            price: {
                annual: currency.symbol + Math.round(0 * currency.coeff),
                monthly: currency.symbol + Math.round(0 * currency.coeff),
                perWhat: 'user',
            },
            constraints: ['Up to 25 Contributors', 'Up to 1000 Drawings', 'Unlimited Projects'],
            //constraints: [],
            featureText: 'Key Features',
            features: ['Drawings', 'Meetings', 'Files', 'Photos', 'Tasks'],
        },
        {
            title: 'Pro',
            desc: 'Workflows & integrations',
            color: '#ffcb02',
            price: {
                annual: currency.symbol + Math.round(2083 * currency.coeff),
                monthly: currency.symbol + Math.round(2500 * currency.coeff),
                perWhat: 'user',
            },
            // constraints: ['Up to 100 Contributors', 'Unlimited Drawings', 'Unlimited Projects'],
            constraints: [],
            featureText: 'Everything in Basic, plus',
            features: ['RFIs', 'Submittals'],
        },
        {
            title: 'Enterprise',
            desc: 'Advanced admin & security',
            color: '#3079cd',
            price: {
                annual: currency.symbol + Math.round(4167 * currency.coeff),
                monthly: currency.symbol + Math.round(5000 * currency.coeff),
                perWhat: 'contributor',
            },
            // constraints: ['Unlimited Contributors', 'Unlimited Drawings', 'Unlimited Projects'],
            constraints: [],
            featureText: 'Everything in Pro, plus',
            features: ['Unlimited Free Readers', 'SSO (SAML)', 'API Access', 'Integrations'],
        },
    ];
    return (
        <Fragment>
            <FullWidthPanel backgroundColor="#f8f6f0">
                <h2 className="text-center">Choose the plan that’s right for you &amp; your team.</h2>
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
                <PricingContainer slabs={slabs}></PricingContainer>
            </FullWidthPanel>
            <OnlyContributorsContainer></OnlyContributorsContainer>
            <ComparePlans slabs={slabs}></ComparePlans>
            <FAQs></FAQs>
        </Fragment>
    );
};

export const PricingContainer: React.FunctionComponent<{ slabs: PricingSlab[] }> = ({
    slabs,
}: {
    slabs: PricingSlab[];
}): JSX.Element => {
    const isMobile = useMediaPredicate('(max-width: 979px)');

    return (
        <div className={isMobile ? 'flex-column pricing-mobile' : 'flex-column'}>
            <div className="pricing-container">
                {slabs.map((v, i) => (
                    <PricingPanel key={i} slab={v}></PricingPanel>
                ))}
            </div>
        </div>
    );
};

export const Price: React.FunctionComponent<{ slab: PricingSlab }> = ({ slab }: { slab: PricingSlab }): JSX.Element => {
    let isStringPrice = true;
    let annualPrice = '';
    let monthlyPrice = '';
    let perWhat = '';
    if (slab.price instanceof Object) {
        isStringPrice = false;
        annualPrice = slab.price.annual;
        monthlyPrice = slab.price.monthly ? slab.price.monthly : '';
        perWhat = slab.price.perWhat ? slab.price.perWhat : '';
    }
    return (
        <div className="price flex-center pv-24">
            {isStringPrice && <div className="text-28 text-bold">{slab.price}</div>}
            {!isStringPrice && (
                <div className="flex-column">
                    <div className="flex-center">
                        <div className="text-42 text-bold">{annualPrice}</div>
                        <div className="pl-8 text-14 flex-column">
                            {!perWhat && <span>per mo,</span>}
                            {perWhat && <span>per {perWhat}/ mo,</span>}
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
    );
};

export const PricingPanel: React.FunctionComponent<{ slab: PricingSlab }> = ({
    slab,
}: {
    slab: PricingSlab;
}): JSX.Element => {
    return (
        <div className="pricing-panel" style={{ borderTopColor: slab.color }}>
            <div>
                <h3>{slab.title}</h3>
                <div>{slab.desc}</div>
                <Price slab={slab}></Price>
            </div>
            <hr />
            {slab.constraints.length > 0 && (
                <Fragment>
                    <div>
                        <div className="text-16 flex-column">
                            {slab.constraints.map((v, i) => (
                                <div key={i}>{v}</div>
                            ))}
                        </div>
                    </div>
                    <hr />
                </Fragment>
            )}
            <div>
                <div className="text-16 text-bold">{slab.featureText}</div>
                <div className="text-16 flex-column middle-div">
                    {slab.features.map((v, i) => (
                        <div key={i}>{v}</div>
                    ))}
                </div>
                <SalesButton></SalesButton>
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
                    <div className="flex-column left-cont justify-content-center">
                        <h3>Account Types</h3>
                        <div>
                            Buildsys has different kinds of accounts for members of your team - Admins, Contributors
                            &amp; Readers. Admins &amp; Contributors can create new drawings, tasks, meetings, RFIs etc.
                            However, Readers can only view and comment on existing data on Buildsys.
                        </div>
                    </div>
                    <div className="flex-column flex-justify-center right-cont">
                        <div className="bg-offwhite px-24 py-6 flex-grow md:px-36 md:py-18 lg:px-64">
                            <div className="account-type flex-center flex-justify pv-24">
                                <div className="account-type-info">
                                    <h4>Admin accounts</h4>
                                    <div className="text-14">Have full access to all available features</div>
                                </div>
                                {/* <p className="account-type-price active text-14">Paid</p> */}
                            </div>
                            <div className="account-type flex-center flex-justify pv-24">
                                <div className="account-type-info">
                                    <h4>Contributor accounts</h4>
                                    <div className="text-14">
                                        Can upload drawings, files &amp; photos and can create tasks, meetings, RFIs,
                                        submittals and forms.
                                    </div>
                                </div>
                                {/* <p className="account-type-price active text-14">Paid</p> */}
                            </div>
                            <div className="account-type flex-center flex-justify pv-24">
                                <div className="account-type-info">
                                    <h4>Reader accounts</h4>
                                    <div className="text-14">
                                        Can view and comment on uploaded drawings, files, photos, tasks, RFIs,
                                        submittals and forms.
                                        {/* <p className="no-margin-imp">
                                            <sub>Free on Enterprise plan only</sub>
                                        </p> */}
                                    </div>
                                </div>
                                {/* <p className="account-type-price text-14">Free</p> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </FullWidthPanel>
    );
};

export const ComparePlans: React.FunctionComponent<{ slabs: PricingSlab[] }> = ({
    slabs,
}: {
    slabs: PricingSlab[];
}): JSX.Element => {
    const isMobile = useMediaPredicate('(max-width: 979px)');
    if (isMobile) {
        return <Fragment></Fragment>;
    }
    return (
        <FullWidthPanel backgroundColor="#ffffff">
            <div className="compare-plans-container">
                <article>
                    <table className="sticky">
                        <thead>
                            <tr>
                                <th className="hide pv-24 ph-18"></th>
                                {slabs.map((slab, index) => (
                                    <th key={index} className="pv-24 ph-18" style={{ borderTopColor: slab.color }}>
                                        <div className="text-28 text-bold">{slab.title}</div>
                                        <Price slab={slab}></Price>
                                        {/* <SalesButton></SalesButton> */}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                    </table>
                    <table>
                        <tbody>
                            {featureGroups.map((fg, index) => {
                                const plans: string[] = Object.keys(fg.plans);
                                return (
                                    <Fragment key={index}>
                                        {index > 0 && (
                                            <tr>
                                                <td className="empty ph-18" colSpan={plans.length + 1}></td>
                                            </tr>
                                        )}
                                        <tr>
                                            <td className="text-bold ph-18 text-20" colSpan={plans.length + 1}>
                                                {fg.title}
                                            </td>
                                        </tr>
                                        {fg.features.map((feature, index) => {
                                            const plans2: string[] = Object.keys(feature.plans);
                                            return (
                                                <tr key={index}>
                                                    <td className="ph-18 text-14">{feature.title}</td>
                                                    {plans2.map((k, index) => {
                                                        const val = feature.plans[k];
                                                        const isTrue = val && val === true;
                                                        const isFalse = !val;
                                                        const isString = !isTrue && !isFalse;
                                                        const className = isFalse ? 'sep' : '';
                                                        return (
                                                            <td className={'ph-18 text-14 ' + className} key={index}>
                                                                {isTrue && <span className="tick">&#10004;</span>}
                                                                {isString && <span>{val}</span>}
                                                            </td>
                                                        );
                                                    })}
                                                </tr>
                                            );
                                        })}
                                    </Fragment>
                                );
                            })}
                        </tbody>
                    </table>
                </article>
            </div>
        </FullWidthPanel>
    );
};

/*
title: 'What are my payment options?',
content: You can pay monthly or save 20% by choosing annual billing. We currently accept debit and credit payments but can accept alternative payment methods like ACH for Business or Enterprise plans if you email us at invoicing@loom.com. We charge per Workspace.


title: 'How does the 5-minute recording limit on Starter work?
You will see count down timer when you start recording. When the timer reaches 0 your recording will stop and create a 5-minute Loom video.



title: 'What are Workspaces and who can I add to my Workspace?
All our plans now include a Workspace with a Personal, Shared, and Team Library where you can create, edit, and organize videos and screenshots and collaborate with the rest of your team. You can invite people to your Workspace in your Workspace settings. You can invite up to 25 Creators on Starter, 100 Creators on Business, and unlimited Creators on Enterprise. Loom for Education is limited to 1 Creator. All plans have unlimited Viewers.


How do Screenshots work?
All our plans now include screenshots. If you take a screenshot, we'll generate an instantly shareable link, and the screenshot will live in its own section of your Workspace, just as regular videos in Loom do. Read more about how to take a screenshot here.

Is there a free plan for Education?
Yes. We have a dedicated free plan for teachers and students called Loom for Education. Learn more on how to get verified for a Loom for Education account here.

What happened to the old plans?
Loom introduced new plans to simplify our pricing and give our users more value. Learn more.
*/
export const FAQs: React.FunctionComponent = (): JSX.Element => {
    const data = {
        title: 'FAQs',
        rows: [
            {
                title: 'Can I start a free trial of paid plans?',
                content: `Yes, you can try our Pro plan free for 14 days. 
                Please contact sales for your free 14-day trial.`,
            },
            {
                title: 'What is the difference between monthly and annualy billing?',
                content: `You can choose to pay monthly or save 16.7% by choosing annual billing. With annual billing, you make a one-time for 1 year of access to Buildsys. 
                With monthly billing, payments are due in the first week of every month`,
            },
            // {
            //     title: 'What happens when I hit my 1000 drawing limit on the Basic plan?',
            //     content: `Our Basic plan has a limit of 1000 drawings. Once you hit the limit of 1000 drawings, you will not be able to upload new drawings.
            //     To upload more drawings, you will need to upgrade to either the Pro or the Enterprise plan.`,
            // },
            {
                title: 'What happens when I reach the User limit on Basic or Pro?',
                content: `When a your account reaches its limit you will no longer be able to add new Users. You will need to upgrade to add more Users.`,
            },
            {
                title: 'What happens when I reach the Contributor limit on Enterprise?',
                content: `When a your account reaches its limit you will no longer be able to add new Contributors. You will need to upgrade to add more Contributors.`,
            },
            {
                title: 'Do I get a refund if I deactivate members from my account?',
                content: `We'll apply a prorated credit to your account for any paid members (Admins or Contributors) who are deactivated. This credit will be applied to future charges for your account.`,
            },
        ],
    };

    const styles = {
        bgColor: 'transparent',
        titleTextColor: 'black',
        rowTitleColor: 'black',
        titleTextSize: '36px',
        // rowContentColor: 'grey',
        // arrowColor: "red",
    };

    const config = {
        animate: true,
        // arrowIcon: "V",
        // tabFocus: true
    };
    return (
        <FullWidthPanel backgroundColor="#ffffff">
            <div className="faq-container">
                <Faq data={data} styles={styles} config={config} />
            </div>
        </FullWidthPanel>
    );
};
