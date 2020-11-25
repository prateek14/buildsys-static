import React from 'react';
import './App.scss';
import { Body } from './components/body/body';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Privacy, Terms } from './components/terms/terms';
import { NotFound } from './components/404/404';
import Footer from './components/footer/footer';
import { Header } from './components/header/header';
import { Default } from './components/default/default';
import { LoremIpsum } from './constants';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useTitle } from './utils/common';

const func: (x: string) => React.FunctionComponent = (x: string) => {
    const A: React.FunctionComponent = () => {
        useTitle(x);
        return <Default title={x}>{LoremIpsum}</Default>;
    };
    return A;
};

export const App: React.FunctionComponent = () => {
    return (
        <Router>
            <div className="App">
                <Header></Header>
                <Body>
                    <Switch>
                        <Route exact path="/" component={func('Home')} />
                        <Route exact path="/what" component={func('What we do')} />
                        <Route exact path="/who" component={func('We work with')} />
                        <Route exact path="/us" component={func('About Us')} />
                        <Route exact path="/contact" component={func('Contact Us')} />
                        <Route exact path="/terms" component={Terms} />
                        <Route exact path="/privacy-notice" component={Privacy} />
                        <Route component={NotFound} />
                    </Switch>
                </Body>
                <Footer></Footer>
                <ToastContainer />
            </div>
        </Router>
    );
};

export default App;
