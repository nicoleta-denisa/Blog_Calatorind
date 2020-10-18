import React from 'react';
import Navbarnav from './Navbar';
import * as firebase from "firebase/app";
import 'firebase/firestore';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import LoginRegister from '../features/Auth/LoginRegister';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { AuthContextProvider } from '../features/Auth/AuthContext';
import About from '../features/About/About';
import Contact from '../features/Contact/Contact';
import Home from '../features/Home/Home';
import Iasi from '../features/Home/Iasi';

const firebaseConfig = {
  apiKey: "AIzaSyD3w_Rs6BsVPgvOt3UKFRFs981sbegLClQ",
  authDomain: "calatorind-9da7f.firebaseapp.com",
  databaseURL: "https://calatorind-9da7f.firebaseio.com",
  projectId: "calatorind-9da7f",
  storageBucket: "calatorind-9da7f.appspot.com",
  messagingSenderId: "19264662856",
  appId: "1:19264662856:web:7a952270d5dfbfdbe9d77d"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
export { db };


function App() {
  return (
    <AuthContextProvider>
      <div className="container">
        <Router>
          <img src='logo_200x200.png' className='logo mx-auto d-block' alt='' />
          <Navbarnav />
          <Route exact path="/" component={ () => <h1>Test</h1> } />
          <Route exact path="/home" component={ Home } />
            <Route exact path="/home/iasi" component={ Iasi } />
          <Route exact path="/login" component={ LoginRegister } />
          <Route exact path="/register" component={ LoginRegister } />
          <Route exact path="/despre" component={ About } />
          <Route exact path="/contact" component={ Contact } />
        </Router>
      </div>
    </AuthContextProvider>
  );
}

export default App;
