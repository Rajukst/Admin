
import "./App.css";
import LeftDrawer from "./Components/LeftDrawer/LeftDrawer";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./Components/DashboardComponents/Login/Login";
import Registration from "./Components/DashboardComponents/Registration/Registration";
import Test from "./Components/Test/Test";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Test />} />
          <Route path="/dashboard*" element={<LeftDrawer />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
