import './App.less';
import Avtorization from './components/Avtorization/Avtorization';
import {BrowserRouter, Routes, Route, Navigate,  useLocation} from 'react-router-dom'
import Search from './components/Search/Search';
import Favorites from './components/Favorites';
import {useSelector} from 'react-redux';


function App() {
  const isAuth = useSelector((store)=> store.isAuth);

  const PrivateOutlet = () => {
    const { pathname } = useLocation();
    console.log({ pathname });
  
    return  isAuth ? (
      <Search />
    ) : (
      <Navigate to="/login" state={{ from: pathname }} replace />
    );
  };

 

  return (
    <div className="App">

    <BrowserRouter>

        <Routes>
            <Route path='/login' element={<Avtorization/>}></Route>

            <Route path="*" element={<PrivateOutlet />}>
                <Route path="search" element={<Search />} />
                <Route path="favorites" element={<Favorites />} />
            </Route>
          
        </Routes>

      </BrowserRouter> 
    
     
    </div>
  );
}

export default App;
