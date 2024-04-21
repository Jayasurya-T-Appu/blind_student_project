import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/HomePage/Home';
import Login from './Pages/LoginPage/Login';
import Register from './Pages/RegisterPage/Register';
import Topics from './Pages/TopicsPage/Topics';
const App =()=> {
  return (
    <div className="App">
      <Routes>
        <Route path='' Component={Login}/>
        <Route path='/home' Component={Home}/>
        <Route path='/register' Component={Register}/>
        <Route path='/topics/:language' Component={Topics}/>
      </Routes>
    </div>
  );
}

export default App;
