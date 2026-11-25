import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/login";
import Agent from "./pages/agent";

import Manager from "./pages/manager";
function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/manager" element={<Manager/>}/>
        <Route path="/agent" element={<Agent/>}/>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
