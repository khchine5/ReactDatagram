import { Admin, Resource } from 'react-admin';
import './App.css';
import {listProduct} from './products';

import React from 'react';
import drfProvider, { tokenAuthProvider, fetchJsonWithAuthToken } from 'ra-data-django-rest-framework';





const authProvider = tokenAuthProvider({'obtainAuthTokenUrl':"http://127.0.0.1:8000/api-token-auth/"})
const dataProvider = drfProvider("http://127.0.0.1:8000/api", fetchJsonWithAuthToken);

const App = () => (
  <Admin 
        authProvider={authProvider}
        dataProvider={dataProvider}
        title="DataGram">
      <Resource name="product" list={listProduct} />
  </Admin>
);
export default App;
