import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./components/dashboard";
import Frontpage from "./components/frontpage";
import Login from "./components/login";
import Registration from "./components/registration";


function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Frontpage/>}/>
      <Route path="/reg" element={<Registration/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/dashboard" element={<Dashboard/>}/>
    </Routes>
    </BrowserRouter>
    
    </>
  );
}

export default App;
