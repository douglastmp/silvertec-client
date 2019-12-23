import React from 'react';
import './App.css';
import OrdersHeader from './components/OrdersHeader'
import {BrowserRouter} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <header className="App-header">
          <OrdersHeader/>
        </header>     
      </BrowserRouter>
    </div>
  );
}

export default App;
