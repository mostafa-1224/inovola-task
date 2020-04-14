import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import Countries from './components/Countries';
import Country from './components/Country';
import CountryDetails from './components/CountryDetails';
import { Provider } from 'react-redux';
import store from './store';
import './App.css';

const client = new ApolloClient({
  uri: 'https://countries.trevorblades.com'
});

function App() {
  return (
    <Router>
      <Provider store={store}>
        <ApolloProvider client={client}>
          <div className='container'>
            <Switch>
              <Route exact path='/' component={Login} />
              <Route exact path='/index' component={Countries} />
              <Route exact path='/index/country' component={Country} />
              <Route exact path='/index/:id' component={CountryDetails} />
            </Switch>
          </div>
        </ApolloProvider>
      </Provider>
    </Router>
  );
}

export default App;
