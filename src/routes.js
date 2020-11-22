import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./pages/Home";
import Produto from "./pages/Produto";
import Search from "./pages/Search";

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/produto" component={Produto} />
                <Route exact path="/produto/:name" component={Search} />
            </Switch>
        </BrowserRouter>
    );
}