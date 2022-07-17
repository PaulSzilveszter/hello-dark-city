/*
    Functionality: Builds the whole app, manages routing and the whole app state 
*/
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";
import HomePage from "./components/HomePage.js";
import LandingPage from "./components/LandingPage.js"
import LinkPage from "./components/LinkPage";

import { ghostCursor } from 'cursor-effects';

new ghostCursor();

export default class App extends React.Component {

    render() {
        return (
            <BrowserRouter>
                <Routes>
                    <Route path="/hello-dark-city" exact element={<LandingPage />} />
                    <Route path="/hello-dark-city/home" exact element={<HomePage />} />
                    <Route path="/hello-dark-city/areyoulost" exact element={<LinkPage />} />
                </Routes>
            </BrowserRouter>
        )
    }

}