import React, { Fragment } from 'react';
import { useTitle } from '../../utils/common';
import { FullWidthPanel } from '../common/full-width-panel';

export const Support: React.FunctionComponent = (): JSX.Element => {
    const title = 'Support Center';
    useTitle(title);

    return (
        <Fragment>
            <FullWidthPanel backgroundColor="#f8f6f0">
                <h2 className="text-center">Choose the plan that’s right for you &amp; your team.</h2>
            </FullWidthPanel>
        </Fragment>
    );
};
