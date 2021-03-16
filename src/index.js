import React from "react";
import ReactDom from "react-dom";
import "./styles/index.css";
import 'bootstrap/dist/css/bootstrap.css';
import {Provider} from "react-redux";
import PersonService from "./services/personService";
import {ServiceProvider} from "./components/ServiceContext/ServiceContext";
import store from "./store";
import App from "./components/App/App";

const personService = new PersonService();

ReactDom.render(
    <Provider store={store}>
            <ServiceProvider value={personService}>
                <App />
            </ServiceProvider>
    </Provider>, document.getElementById('root')
);
