import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import store,{Presistor} from './redux/store';
import { PersistGate } from 'redux-persist/integration/react'




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={Presistor}>
            <App />
        </PersistGate>       
    </Provider>
  
);

