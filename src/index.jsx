// import react
import React from 'react';
// import render method
import ReactDOM from 'react-dom';
// import the app
import App from './components/App/index.jsx';

// root const
const root = document.getElementById('root');

// render the app

ReactDOM.unstable_createRoot(root).render(<App />)
