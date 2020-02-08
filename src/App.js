import React from 'react';
import './App.css';
import { createStore } from 'redux'
import TestRedux from '../src/components/test-redux.js'
import configureStore from "./stores";
import { Provider } from 'react-redux'
import 'antd/dist/antd.css';
const store = configureStore()
function App() {
   // test source tree a
   //aaaaaaadsds
   // Change something
   // Add something
   handleOk = () => {
       console.log('abcd')
       console.log('eee 43434343')
       console.log('11111')
       let a = 1
       let b = 2
       let c = 1
       let d = 2
       
   }
    return (
        <div className="App">
            <Provider store={store}>
                <TestRedux/>
               <h3>dsadsajhdjhj</h3>
                <div>abcdef</div>
                <div>abcdef</div>
            </Provider>
        </div>
    );
}

export default App;
