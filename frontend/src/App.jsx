
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Login from './pages/login';

import Register from './pages/register';
import Dashboard from './pages/dashboard';
import Manager from './pages/manager';

import Home from './pages/user/home';
import Profile from './pages/user/profile';
import Enquery from './pages/user/enquery';
import PropertyDetails from './pages/user/propertydetails';
import PropertyList from './pages/user/propertylist';
import Agent from './pages/agent/agentlayout';
import ADashboard from './pages/agent/adashboard';
import Property from './pages/agent/property';
import LeadDetails from  './pages/agent/leaddetails';
import Lead from './pages/agent/lead';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/manager" element={<Manager />} />
                <Route path="/agent" element={<Agent />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/register" element={<Register />} />

                <Route path="/home" element={<Home />}>
                    <Route path="profile" element={<Profile />} />
                    <Route path="enquery" element={<Enquery />} />
                    <Route path="propertydetails" element={<PropertyDetails />} />
                    <Route path="propertylist" element={<PropertyList />} />
                </Route>
                <Route path ="/agentlayout" element={<Agent/>}>
                 <Route path="adashboard" element={<ADashboard/>}/>
                 <Route path="lead" element={<Lead/>}/>
                 <Route path="leaddetails" element={<LeadDetails/>}/>
                 <Route path="property" element={<Property/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
