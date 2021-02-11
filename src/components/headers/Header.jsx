import React, { useContext } from 'react';
import { ThematicContext } from '../../state/theme';
import { Link } from 'react-router-dom';
import styles from './Header.css';

const Header = () => {
    //header asks provider for:
    const { theme, toggleTheme } = useContext(ThematicContext);

    return <div className={`${styles.Header} ${styles[theme]}`}>
        <h1>Welcome to Animal Crossing Api!  Pick Your Villager!</h1>
        <button onClick={toggleTheme}>✨Toggle Mode✨</button>

        <ul>
            <li>
                <Link to="/">Villager Home</Link>
            </li>
        </ul>
    </div>

};

export default Header;
