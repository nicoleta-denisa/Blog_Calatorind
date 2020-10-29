import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { AuthContextProvider } from '../features/Auth/AuthContext';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Navbarnav from './Navbar';
import LoginRegister from '../features/Auth/LoginRegister';
import About from '../features/About/About';
import Contact from '../features/Contact/Contact';
import Home from '../features/Home/Home';
import ArticleDetails from '../features/Home/ArticleDetails';
import PrivateRoute from '../features/Home/PrivateRoute';
import PrivateHome from '../features/Home/PrivateHome';

export default function App() {
    return (
        <AuthContextProvider>
            <div className="container">
                <Router>
                    <Navbarnav />
                    <PrivateRoute exact path="/" component={PrivateHome} />
                    <Route exact path="/home" component={Home} />
                    <Route exact path="/:id" component={ArticleDetails} />
                    <Route exact path="/login" component={LoginRegister} />
                    <Route exact path="/register" component={LoginRegister} />
                    <Route exact path="/despre" component={About} />
                    <Route exact path="/contact" component={Contact} />
                </Router>
            </div>
        </AuthContextProvider>
    );
}
