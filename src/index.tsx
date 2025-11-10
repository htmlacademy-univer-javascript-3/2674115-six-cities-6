import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { AMSTERDAM } from './mocks/city';
import { reviews } from './mocks/reviews';
import offers from './mocks/offers.ts';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App
      city={AMSTERDAM}
      offers={offers}
      reviews={reviews}
    />
  </React.StrictMode>
);
