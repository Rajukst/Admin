import logo from './logo.svg';
import './App.css';
import MainDashboard from './Components/Dashboard-main/MainDashboard';
import LeftDrawer from './Components/LeftDrawer/LeftDrawer';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
function App() {
  return (
    <div className="App">
   <BrowserRouter>
    <Routes>
      {/* <Route path="/" element={<LeftDrawer />}/> */}
      <Route path="/" element={<MainDashboard />}/>
         
    </Routes>
  </BrowserRouter>
    </div>
  );
}

export default App;

