import React from 'react';
import './App.css';
import { Body } from './components/body';
import { Header } from './components/header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/home';
import About from './components/about';
import Footer from './components/footer';

export const App: React.FunctionComponent = () => {
    return (
        <Router>
            <div className="App">
                <Header></Header>
                <Body>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/what" component={Home} />
                        <Route exact path="/who" component={Home} />
                        <Route exact path="/us" component={About} />
                        <Route exact path="/contact" component={Home} />
                    </Switch>
                </Body>
                <Footer></Footer>
            </div>
        </Router>
    );
};

export default App;
