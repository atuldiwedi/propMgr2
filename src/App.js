import { Provider } from 'react-redux';
import './App.css';
import Header from './Components/Header/Header';
import Properties from './Components/Properties/Properties';
import { GlobalStyle } from './Global/Style/GlobalStyle';
import store from './Store/Store';
function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <GlobalStyle/>
      <Header/>
      <Properties/>
    </div>
    </Provider>
  );
}

export default App;
