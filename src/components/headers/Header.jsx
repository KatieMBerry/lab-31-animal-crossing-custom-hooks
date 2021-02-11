import React from 'react';
import { ThematicContext, ThemeProvider, useContext, useToggle } from '../../state/theme';
import { Link } from 'react-router-dom';
import styles from './Header.css';

const Header = () => {
    // const { theme } = useContext(ThematicContext);
    const toggle = useToggle();
    // const toggle = 'dark';

    return <div className={`${styles.Header} ${styles[toggle]}`}>
        <h1>Welcome to Animal Crossing Api!  Pick Your Villager!</h1>
        <label>Choose a Mode:</label>
        <select name="toggle" id="toggle">
            <option value="light">LightMode</option>
            <option value="dark">DarkMode</option>
        </select>
        <ul>
            <li>
                <Link to="/">Villager Home</Link>
            </li>
            <li>
                <Link to="/villagers/:_id">Villager Deets</Link>
            </li>
        </ul>
    </div>

};

export default Header;
