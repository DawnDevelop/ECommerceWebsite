import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

const rootElement = document.getElementById('root');
ReactDOM.hydrate(
	<BrowserRouter>
		<App />
	</BrowserRouter>,
	rootElement
);
