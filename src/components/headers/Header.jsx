import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
    <div className="header">
        Welcome to Animal Crossing Api!  Pick Your Villager!
        <ul>
            <li>
                <Link to="/">Villager Home</Link>
            </li>
            <li>
                <Link to="/villagers/:_id">Villager Deets</Link>
            </li>
        </ul>
    </div>

);

export default Header;
