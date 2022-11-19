import { Navigate, Route,Routes } from 'react-router-dom';
import Homepage from './pages/Homepage';
// import './App.css';
import Register from './pages/Register';
import Login from './pages/Login';

function App() {
  return (
    <>
    <Routes>
      {/* step second for proteced route define function */}
      <Route path="/" element={<ProtectedRoutes><Homepage/></ProtectedRoutes>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/login" element={<Login/>}/>
    </Routes>
    </>
  );
}

// Protected Route function step 1 ( proteched route ) its acts asa component  component
export function ProtectedRoutes(props)
{

  if(localStorage.getItem('user')) {
    return props.children
  } else {
    return <Navigate to="/login" />
  }

}

export default App;
