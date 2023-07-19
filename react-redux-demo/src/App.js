import logo from './logo.svg';
import './App.css';
import CakeContainer from './components/CakeContainer';
import { Provider } from 'react';
import store from './redux/cakes/store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CakeContainer></CakeContainer>
      </div>
    </Provider>
  );
}

export default App;
