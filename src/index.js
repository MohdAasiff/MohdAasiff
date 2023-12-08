import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Signature from './components/Signature';
import Parent from './components/Lifting state/Parent';
import Pagination from './components/Lifting state/Pagination/Pagination';
import 'bootstrap/dist/css/bootstrap.min.css'
import ToDoApp from './components/Lifting state/ToDoApp';
import ToDoDO from './components/Lifting state/ToDoDO';
import LoginForm from './LoginForm';
import LiftSystem from './Ibm task/LiftSystem';
import Customhook from './components/Customhook';
import Effect from './components/Effect';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <LiftSystem/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
