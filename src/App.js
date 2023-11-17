import logo from './logo.svg';
import './App.css';
import DefaultLayout from './layout/DefaultLayout';
import { Routes, Route } from 'react-router-dom';
import SignUp from './pages/Signup';
import Profile from './pages/Profile';

function App() {
  return (
    <Routes>
      <Route exact path='/' element={<DefaultLayout />}>
          
      </Route>
      <Route exact path='/profile' element={<DefaultLayout />}>
          <Route index element={<Profile />} />
      </Route>
     
    </Routes>
  );
}

export default App;
