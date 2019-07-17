import React from 'react';
import { Provider } from "react-redux";
import { Route } from "react-router-dom";
import './App.css';
import Nav from "../src/Component/Navbar/navbar";
import store from "./Global/redux/store";
import Buku from "./Screen/Buku";
import Home from "./Screen/Home";
import Peminjam from "./Screen/Peminjam";

function App() {
  return (
    <Provider store = {store}>
      <div>
      <Nav/>
        <Route exact path={'/'} component={Home}/> 
        <Route exact path={'/book'} component={Buku}/>
        <Route exact path={'/borrower'} component={Peminjam}/>
        {/* <Route path={'/borrow'} component={Borrow}/> */}
      </div>
    </Provider> 
  );
}

export default App;