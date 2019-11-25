import React from 'react';
import {Provider} from 'react-redux';
import store from './store';
import Counter from './counter'
import CounterClass from './counterClass';

function App() {
  return (
    <div className="">
      <Provider store = {store}>
        <Counter />
        <CounterClass />
      </Provider>
     
    </div>
  );
}

export default App;
