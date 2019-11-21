import React from 'react';
import Header from './Header';
import FormBar from './FormBar';
import './App.css';
import {Provider} from 'react-redux';
import store from './store';
import Content from './Content';

function App() {
  return (
    <Provider store={store}>
      <div>
        <Header/>
        <div className='form-container' style={{float: "left"}}>
          <FormBar/>
        </div>
        <div className='content'>
            <Content/>
        </div>
      </div>
    </Provider>
  );
}

export default App;
 