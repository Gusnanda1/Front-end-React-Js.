import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { QueryClient, QueryClientProvider } from "react-query";
// import { BrowserRouter as Router } from 'react-router-dom';
import { UserContextProvider } from './context/userContext';
const client = new QueryClient();


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <UserContextProvider>
    <QueryClientProvider client={client}>
        <App />
    </QueryClientProvider>
  </UserContextProvider>
</React.StrictMode>
);

