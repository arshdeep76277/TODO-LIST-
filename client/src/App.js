import './App.css';
import AppNavbar from './components/AppNavbar/AppNavbar';
import ListComponent from './components/ListComponent/ListComponent';
import {Provider} from 'react-redux';
import store from './store';


function App() {
  return (
    <Provider store={store}>
    <div className="App">
     <AppNavbar />
     <ListComponent /> 
    </div>
    </Provider>
  );
}

export default App;
