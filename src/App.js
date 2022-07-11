import React from 'react';
import './App.less';
import {BrowserRouter, Routes, Route, useNavigate} from 'react-router-dom';
import {useSelector} from 'react-redux';

import Avtorization from './components/Avtorization/Avtorization';
import Search from './components/Search/Search';
import Favorites from './components/Favorites';


function App() {
  //проверка на авторизацию пользователя. По умолчанию false
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
