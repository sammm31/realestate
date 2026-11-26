import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/login";
import Agent from "./pages/agent";
import Register from "./pages/register";
import Dashboard from "./pages/dashboard"
import Manager from "./pages/manager";
function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/manager" element={<Manager/>}/>
        <Route path="/agent" element={<Agent/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/register" element={<Register/>}/>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
