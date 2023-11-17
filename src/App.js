import logo from './logo.svg';
import './App.css';
import DefaultLayout from './layout/DefaultLayout';
import { Routes, Route } from 'react-router-dom';
import SignUp from './pages/Signup';

function App() {
  return (
    <Routes>
      <Route exact path='/' element={<SignUp />} />
    </Routes>
  );
}

export default App;
