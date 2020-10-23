import React from 'react';
import Navbarnav from './Navbar';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import LoginRegister from '../features/Auth/LoginRegister';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { AuthContextProvider } from '../features/Auth/AuthContext';
import About from '../features/About/About';
import Contact from '../features/Contact/Contact';
import Home from '../features/Home/Home';
// import Iasi from '../features/Home/Iasi';
import ArticleDetails from '../features/Home/ArticleDetails';
import Logo from './logo_200x200.png';

function App() {
    return (
        <AuthContextProvider>
            <div className="container">
                <Router>
                    <img src={Logo} className="logo mx-auto d-block" alt="" />

                    <Navbarnav />
                    <Route exact path="/home" component={Home} />
                    <Route exact path="/home" component={Home} />
                    <Route exact path="/home/:id" component={ArticleDetails} />
                    {/* <Route exact path="/home/iasi" component={Iasi} /> */}
                    <Route exact path="/login" component={LoginRegister} />
                    <Route exact path="/register" component={LoginRegister} />
                    <Route exact path="/despre" component={About} />
                    <Route exact path="/contact" component={Contact} />
                </Router>
            </div>
        </AuthContextProvider>
    );
}
export default App;
