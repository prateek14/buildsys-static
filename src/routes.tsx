import React, { useLayoutEffect } from 'react';
import { Switch, Route, useLocation, Redirect } from 'react-router-dom';
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
import { Blog, BlogItem, News, NewsItem } from './components/blog/blog';

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
            <Route path="/news/:id" component={NewsItem} />
            <Route exact path="/news" component={News} />
            <Route exact path="/about-us">
                <Redirect to="/us" />
            </Route>
            <Route exact path="/contact-us">
                <Redirect to="/us#contact" />
            </Route>
            <Route exact path="/products-solutions">
                <Redirect to="/" />
            </Route>
            <Route path="/staff/*">
                <Redirect to="/us" />
            </Route>
            <Route component={NotFound} />
        </Switch>
    );
};

export default Routes;
