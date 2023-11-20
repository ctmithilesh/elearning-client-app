import './App.css';
import DefaultLayout from './layout/DefaultLayout';
import { Routes, Route } from 'react-router-dom';
import SignUp from './pages/Signup';
import Profile from './pages/Profile';
import SignIn from './pages/Signin';
import { ProtectedRoute } from './ProtectedRoute';
import AddCourse from './pages/AddCourse';
import AddTechnology from './pages/AddTechnology';

function App() {
  return (
    <Routes>
      <Route element={<DefaultLayout />}>
          <Route element={<ProtectedRoute />}>
              <Route exact path='/' element={<Profile />} />
          </Route>
      </Route>
      <Route element={<DefaultLayout />}>
        <Route element={<ProtectedRoute />}>
          <Route exact path='/dashboard' element={<Profile />} />
        </Route>
      </Route>
      <Route element={<DefaultLayout />}>
        <Route element={<ProtectedRoute />}>
          <Route exact path='/add-course' element={<AddCourse />} />
        </Route>
      </Route>
      <Route element={<DefaultLayout />}>
        <Route element={<ProtectedRoute />}>
          <Route exact path='/add-technology' element={<AddTechnology />} />
        </Route>
      </Route>
      <Route exact path='/login' element={<SignIn />} />
      <Route exact path='/register' element={<SignUp />} />

    </Routes>
  );
}

export default App;
