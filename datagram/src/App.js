import React from 'react';
import './App.css';
import { fetchUtils, Admin, Resource, ListGuesser } from 'react-admin';
import Cookies from 'universal-cookie';
import drfProvider from './dataProviderDrf';
import authProvider from './authProvider';

import {listProduct,ProductShow, ProductEdit,ProductCreate} from './products';
import {listChain,ChainShow, ChainEdit,ChainCreate} from './chains';
import {listStore,StoreShow, StoreEdit,StoreCreate} from './stores';


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
        locale="fr"
        title="DataGram">
      <Resource name="chain" list={listChain} show={ChainShow}  create={ChainCreate} edit={ChainEdit}/>
      <Resource name="store" list={listStore} show={StoreShow}  create={StoreCreate} edit={StoreEdit}/>
      <Resource name="product" list={listProduct} show={ProductShow}  create={ProductCreate} edit={ProductEdit} />
  </Admin>
);
export default App;
