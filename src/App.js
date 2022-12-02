import './App.css';
import Header from './layouts/Header';
import Footer from './layouts/Footer';
import { BrowserRouter as Router,Route, Routes } from 'react-router-dom';
import Users from './pages/Users';
import Home from './pages/Home';
import { useEffect, useState } from 'react';
import Search from './pages/Search';
import MovieView from './pages/MovieView';
import React from 'react';
import NotFound from './pages/NotFound';
function App() {
  const [searchText,setSearchText] = useState('');
  const [searchResults,setSearchResults] = useState([]);

  useEffect(()=>{
   if(searchText){
    fetch(' https://api.themoviedb.org/3/search/movie?api_key=ac1ccbe8250334b34fd9ec4876616da4&language=en_US&query='+searchText+'&page=1')
  .then(response => response.json())
  .then(json =>{
    setSearchResults(json.results)
  })
   }
  },[searchText])
  
  return (
    <div className="App" >
      <Router>
        <Header searchText={searchText} setSearchText={setSearchText}></Header>
                <Routes>
                      <Route exact path='/' element={<Home/>}></Route>
                      <Route exact path='/users' element={<Users/>}></Route>
                      <Route exact path='/search' element={<Search searchText={searchText} searchResults={searchResults}/>}></Route>
                      <Route exact path='/movies/:id' element={<MovieView/>}></Route>
                      <Route exact path='*' element={<NotFound/>}></Route>
                </Routes>
        <Footer></Footer>
      </Router>  
    </div>
  );
}

export default App;
