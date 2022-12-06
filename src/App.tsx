import React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {BooksPage} from "./components/pages/BooksPage";
import {AddBookPage} from "./components/pages/AddBookPage";
import {Header} from "./components/Header";
import {Navbar} from "./components/Navbar";


const App = () => {
  return (
    <BrowserRouter>
        <div>
            <Header/>
            <Navbar/>
            <Routes>
                <Route path='/books' element={<BooksPage/>} />
                {/*<Route path='/books/:uuid' element={<BookItemPage/>} />*/}
                <Route path='/books/add' element={<AddBookPage/>}/>
            </Routes>
        </div>
    </BrowserRouter>
  );
}

export default App;
