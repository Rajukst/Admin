import logo from './logo.svg';
import './App.css';
import MainDashboard from './Components/Dashboard-main/MainDashboard';
import LeftDrawer from './Components/LeftDrawer/LeftDrawer';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import UserList from './Components/DashboardComponents/UserList/UserList';
import Login from './Components/DashboardComponents/Login/Login';
import Registration from './Components/DashboardComponents/Registration/Registration';
function App() {
  return (
    <div className="App">
   <BrowserRouter>
    <Routes>


      <Route path="/dashboard" element={<LeftDrawer />}/>
      <Route path="/user" element={<UserList />}/>
      <Route path="/" element={<MainDashboard />}/>
      <Route path="/registration" element={<Registration />}/>
      <Route path="/login" element={<Login />}/>
    </Routes>
  </BrowserRouter>
    </div>
  );
}

export default App;

