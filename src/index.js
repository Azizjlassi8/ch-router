import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import Home from './Home';




ReactDOM.render(
    <BrowserRouter>
    <Home />
    </BrowserRouter>,
document.getElementById('root')
);