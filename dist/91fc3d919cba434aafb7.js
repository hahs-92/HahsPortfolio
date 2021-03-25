//DEPENDENCIAS
import React from 'react';
import { render } from 'react-dom'; //ROUTE

import App from './routes/App';
import { jsx as _jsx } from "react/jsx-runtime";
var container = document.getElementById('app');
render( /*#__PURE__*/_jsx(App, {}), container);