import React from 'react';
import './App.scss';
import { Body } from './components/body/body';
import { BrowserRouter as Router } from 'react-router-dom';
import Footer from './components/footer/footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Routes from './routes';
import Header from './components/header/header';

export const App: React.FunctionComponent = () => {
    return (
        <Router>
            <div className="App">
                <Header></Header>
                <Body>
                    <Routes />
                </Body>
                <Footer></Footer>
                <ToastContainer />
            </div>
        </Router>
    );
};

export default App;
