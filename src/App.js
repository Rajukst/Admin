import logo from './logo.svg';
import './App.css';
import MainDashboard from './Components/Dashboard-main/MainDashboard';
import LeftDrawer from './Components/LeftDrawer/LeftDrawer';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Test from './Components/Test/Test';
function App() {
  return (
    <div className="App">
   <BrowserRouter>
    <Routes>
      <Route path="/" element={<Test />}/>
      <Route path="/dashboard" element={<LeftDrawer />}/>

         
    </Routes>
  </BrowserRouter>
    </div>
  );
}

export default App;

