import React from 'react';
import './App.css';
import { createStore } from 'redux'
import TestRedux from '../src/components/test-redux.js'
import configureStore from "./stores";
import { Provider } from 'react-redux'
import 'antd/dist/antd.css';
const store = configureStore()
function App() {
    // const test = () => {
    //     store.dispatch({ type: 'INCREMENT' })
    // }
    return (
        <div className="App">
            <Provider store={store}>
                <TestRedux/>
                {/*<button onClick={() => test()}>Click</button>*/}
            </Provider>
        </div>
    );
}

export default App;
