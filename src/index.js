//All our imports that we need
import React from 'react';
import ReactDOM from 'react-dom';
import Dashboard from './containers/Dashboard.jsx';
import 'react-notifications/lib/notifications.css';
import './assets/css/dashboard.css';
import './assets/css/navbarTop.css';
import './assets/css/barchart.css';
import './assets/css/linechart.css';
import './assets/css/statcard.css';
import './assets/css/totalPageReload.css';
import './assets/css/TotalSignInOut.css';
import './assets/css/TotalClicks.css';

//we render our dashboard which contains all our components
//and we render it in out html page by getting the Id of it which is 'root'
ReactDOM.render(<Dashboard />, document.getElementById('root'));
