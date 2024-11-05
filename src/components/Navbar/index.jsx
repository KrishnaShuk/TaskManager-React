import { Link, NavLink } from 'react-router-dom';
import './Navbar.css'; 

export default function Nav() {
    return (
        <header >
        <nav >
            <div >
                
                
                <div
                   
                >
                    <ul >
                        <li>
                            <NavLink
                            to="/todo-app">
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                            to="/about">
                                About
                            </NavLink>
                        </li>
                       
                        
                    </ul>
                </div>
            </div>
        </nav>
    </header>
    );
}
