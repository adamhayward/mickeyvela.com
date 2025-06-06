import React from "react";
// import ReactDOM from "react-dom";
import {HashRouter} from 'react-router-dom';
// import App from "./App";
import { createRoot } from 'react-dom/client';
import App from './App';

const root = createRoot(document.getElementById('root'));
root.render(<App />);

root.render((
  <React.StrictMode>
   <HashRouter basename={process.env.PUBLIC_URL}>
     <App />
   </HashRouter>
   </React.StrictMode>
), document.getElementById("root"));

