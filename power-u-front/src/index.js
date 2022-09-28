import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { ApolloClient, InMemoryCache, ApolloProvider, HttpLink,from,} from '@apollo/client';
import {onError} from '@apollo/client/link/error'
const root = ReactDOM.createRoot(document.getElementById('root'));

const errorLink = onError(({graphqlErrors,networkError})=>{
  if(graphqlErrors){
    graphqlErrors.map(({message,location,path})=>{
      alert(`Graphql error ${message}`);
    });
  }
})
const link = from([
  errorLink,
  new HttpLink({uri:"https://localhost:5001/ui/playground"}),
])
// const aspLink = from([
//   errorLink,
//   new HttpLink({uri:"https://poweruproject.azurewebsites.net/graphql"}),
// ])
const aspLink = from([
  errorLink,
  new HttpLink({uri:"https://localhost:5001/graphql"}),
])
const client  = new ApolloClient({
   cache: new InMemoryCache(),
   link:link
});
const aspClient  = new ApolloClient({
  cache: new InMemoryCache(),
  link:aspLink
});
root.render(
  
    <BrowserRouter>
    <ApolloProvider client={aspClient}>

<App />
</ApolloProvider>
</BrowserRouter>
  
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
