import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import MovieDetail from './pages/MovieDetail';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='movie/:id' element={<MovieDetail/>}/>
        <Route path='*' element={"error"}/>
      </Routes>
    </div>
  );
}

export default App;
