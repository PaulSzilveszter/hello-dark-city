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
                    <Route path="/" exact element={<LandingPage />} />
                    <Route path="/home" exact element={<HomePage />} />
                    <Route path="/areyoulost" exact element={<LinkPage />} />
                </Routes>
            </BrowserRouter>
        )
    }

}