import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { App } from './App';
import { BrowserRouter } from 'react-router-dom'
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

const stripePromise = loadStripe('pk_test_51PHQ1ARpU1wfWPI6HId2tHdkHdHwA4cYAqq63sb4NI5Ts1Jaj1HAcPvCGui3S4Ihe2VAj2lrTgAkjf7jmemGHgtE00utlsiT66');

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
  <Elements stripe={stripePromise}>
    <App />
  </Elements>
  </BrowserRouter>
);

