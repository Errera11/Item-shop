import React, {useState} from 'react';
import './App.css';
import {About} from "./pages/About/About";
import ShopList from "./pages/Shop-list/ShopList";
import {Routes, Route} from 'react-router';
import {BrowserRouter} from "react-router-dom";
import Navbar from "./UI/Navbar";
import {Provider} from "react-redux";
import {store} from "./redux/store";
import './App.css';

function App() {

    return (
        <div>
            <Provider store={store}>

                <BrowserRouter>
                    <Navbar/>
                    <Routes>
                        <Route path='/about' element={<About/>}/>
                        <Route path='/shop-list' element={<ShopList/>}/>
                        <Route path='*' element={<About/>}/>
                    </Routes>
                </BrowserRouter>
            </Provider>
        </div>
    );
}

export default App;
