import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./pages/Home";
import Vendedores from "./pages/Vendedores";
import Produtos from "./pages/Produtos";
import Clientes from "./pages/Clientes";

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />

            </Switch>
        </BrowserRouter>
    );
}