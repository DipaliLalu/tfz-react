import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
// import FetchAPI from './components/features/FetchAPI/FetchAPI';
import RegistrationForm from './components/features/Registration/RegistrationForm';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <>
      <RegistrationForm/>
      {/* <FetchAPI/> */}
    </>
  </React.StrictMode>
);

reportWebVitals();
