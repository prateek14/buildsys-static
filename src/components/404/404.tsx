import React from 'react';
import './404.scss';
export const NotFound: React.FunctionComponent = () => {
    return (
        <div className="flex-column not-found">
            <h3>Oops, This Page Could Not Be Found!</h3>
            <p>
                The page you are looking for might have been removed, had its name changed, or is temporarily
                unavailable.
            </p>
        </div>
    );
};
