import './App.less';
import Avtorization from './components/Avtorization';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Search from './components/Search';
import Favorites from './components/Favorites';

function App() {
  return (
    <div className="App">

    <BrowserRouter>

        <Routes><Route path='/' element={<Avtorization/>}></Route></Routes>
        <Routes><Route path='/search' element={<Search/>}></Route></Routes>
        <Routes><Route path='/favorites' element={<Favorites/>}></Route></Routes>


      </BrowserRouter> 
    
     
    </div>
  );
}

export default App;
