import './App.less';
import Avtorization from './components/Avtorization/Avtorization';
import {BrowserRouter, Routes, Route, Navigate,  useLocation, useNavigate} from 'react-router-dom'
import Search from './components/Search/Search';
import Favorites from './components/Favorites';
import {useSelector} from 'react-redux';
import React from 'react';


function App() {
  const isAuth = useSelector((store)=> store.isAuth);

  const protectedPages = [
    { path: '/search', page: <Search /> },
    { path: '/favorites', page: <Favorites /> },

];

const RequireAuth = ({ children }) => {
  const navigate = useNavigate();

  React.useEffect(() => {
      if (!isAuth) {
          navigate('/');
      }
  }, [isAuth, navigate]);

  return children;
};

  return (
    <div className="App">

    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Avtorization/>}/>
            {protectedPages.map((p, i) => (
                    <Route
                        path={p.path}
                        element={<RequireAuth>{p.page}</RequireAuth>}
                        key={i}
                    />
                ))}
        </Routes>
      </BrowserRouter> 
    
     
    </div>
  );
}

export default App;
