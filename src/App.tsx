import React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {BooksPage} from "./components/pages/BooksPage";
import {Header} from "./components/Header";
import {BookItemPage} from "./components/pages/BookItemPage";
import {AddBookPage} from "./components/pages/AddBookPage";
import {MainPage} from "./components/pages/MainPage";


const App = () => {
  return (
    <BrowserRouter>
        <div>
            <Header/>
            <Routes>
                <Route path='/books' element={<BooksPage/>} />
                <Route path='/books/:uuid' element={<BookItemPage/>} />
                <Route path='/books/add' element={<AddBookPage/>}/>
                <Route path='' element={<MainPage/>}/>
            </Routes>
        </div>
    </BrowserRouter>
  );
}

export default App;
