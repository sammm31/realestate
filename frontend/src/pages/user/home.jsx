import { Outlet, Link } from "react-router-dom";

function Home() {
    return ( 
        <div>
            <h1>HOME PAGE</h1>
            <nav>
                <Link to="enquery">ENQUERY</Link>
                <Link to="profile">PROFILE</Link>
                <Link to="propertydetails">PROPERTY DETAILS</Link>
                <Link to="propertylist">PROPERTY LIST</Link>


            </nav>
            <Outlet/>
        </div>
     );
}

export default Home;

