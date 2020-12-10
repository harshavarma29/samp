import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/navbar.css';

const NavBar = () => {
    return <React.Fragment>
        <nav className="nav color">
            <span className="color logo">H</span>
            <ul className="list">
                <li className="selector"><Link to='/about' className='sel-text'>About</Link></li>
                <li className="selector"><Link to='/projects' className='sel-text'>Projects</Link></li>
                <li className="selector"><Link to='/resume' className='sel-text'>Resume</Link></li>
                <li className="selector"><Link to='/contact' className='sel-text'>Contact</Link></li>
            </ul>
        </nav>
    </React.Fragment>
}

export default React.memo(NavBar);