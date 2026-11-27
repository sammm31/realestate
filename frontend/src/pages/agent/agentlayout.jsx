import { Link ,Outlet } from "react-router-dom";

function Agent() {
    return ( 
        <div>
            <h1>AGENT</h1>
            <nav>
                <Link to="adashboard">Dashboard</Link>
                <Link to="lead">Lead</Link>
                <Link to="leaddetails">LeadDetails</Link>
                <Link to="property">Property</Link>
            </nav>
            <Outlet/>
        </div>
     );
}

export default Agent;