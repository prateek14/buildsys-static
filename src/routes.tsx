import React, { useLayoutEffect } from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import { NotFound } from './components/404/404';
import { Support } from './components/support/support';
import { Default } from './components/default/default';
import { Pricing } from './components/pricing/pricing';
import { Terms, Privacy } from './components/terms/terms';
import { LoremIpsum } from './constants';
import { useTitle } from './utils/common';
import { Demo } from './components/demo/demo';
import { About } from './components/about/about';
import Home from './components/home/home';
import { Blog, BlogItem } from './components/blog/blog';

const func: (x: string) => React.FunctionComponent = (x: string) => {
    const A: React.FunctionComponent = () => {
        useTitle(x);
        return <Default title={x}>{LoremIpsum}</Default>;
    };
    return A;
};

export const Routes: React.FunctionComponent = () => {
    const location = useLocation();
    // Scroll to top if path changes
    useLayoutEffect(() => {
        window.scrollTo(0, 0);
        if (location.hash) {
            document.getElementById(location.hash.substr(1, location.hash.length - 1))?.scrollIntoView();
        }
    }, [location.pathname]);

    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/product" component={func('Product')} />
            <Route exact path="/us" component={About} />
            <Route exact path="/pricing" component={Pricing} />
            <Route exact path="/support-center" component={Support} />
            <Route exact path="/schedule-demo" component={Demo} />
            <Route exact path="/terms" component={Terms} />
            <Route exact path="/privacy-notice" component={Privacy} />
            <Route path="/blog/:id" component={BlogItem} />
            <Route exact path="/blog" component={Blog} />
            <Route component={NotFound} />
        </Switch>
    );
};

export default Routes;
