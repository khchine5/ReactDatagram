import React from 'react';
import './App.css';
import { fetchUtils, Admin, Resource, ListGuesser } from 'react-admin';
import Cookies from 'universal-cookie';
import drfProvider from './dataProviderDrf';
import authProvider from './authProvider';

import {listProduct, ProductShow} from './products';


const cookies = new Cookies();
const httpClient = (url, options = {}) => {
    if (!options.headers) {
        options.headers = new Headers({ Accept: 'application/json' });
    }
    let csrftoken = cookies.get('csrftoken');
    const token = localStorage.getItem('token');
    options.headers.set('Authorization', `Token ${token}`);
    options.headers.set('X-CSRFTOKEN', csrftoken);
    return fetchUtils.fetchJson(url, options);
};

const dataProvider = drfProvider('https://khchine5.pythonanywhere.com/api', httpClient);


const App = () => (
  <Admin 
        authProvider={authProvider}
        dataProvider={dataProvider}
        title="DataGram">
      <Resource name="chain" list={ListGuesser} />
      <Resource name="store" list={ListGuesser} />
      <Resource name="product" list={listProduct} show={ProductShow} />
  </Admin>
);
export default App;
