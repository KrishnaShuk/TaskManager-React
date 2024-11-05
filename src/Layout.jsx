import Nav from "./components/Navbar";
import {Outlet} from 'react-router-dom';

function Layout(){
    return(
        <>
        <Nav/>
        <Outlet/>
        </>
    )
}

export default Layout