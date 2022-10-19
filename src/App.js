import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Favories from './pages/Favories';
import Home from './pages/Home';
import MovieDetail from './pages/MovieDetail';

function App() {
  const [favories, setFavories] = useState([])
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home setFavories={setFavories} favories={favories}/>} />
        <Route path='/movie/:id' element={<MovieDetail/>}/>
        <Route path='/favorie' element={<Favories favories={favories} setFavories={setFavories}/>}/>
        <Route path='*' element={"error"}/>
      </Routes>
    </div>
  );
}

export default App;
