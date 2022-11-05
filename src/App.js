import './App.css';
import { Routes , Route} from 'react-router-dom'
import HomePage from './page/HomePage';
import LoginPage from './page/LoginPage';
import RegisterPage from './page/RegisterPage';


function App() {
  return (
  <Routes>
    <Route   index  element={<HomePage/>} />
    <Route  path="/login" element={<LoginPage/>} />
    <Route path="/register" element={<RegisterPage/>} />
  </Routes>
    );
    
}

export default App;
