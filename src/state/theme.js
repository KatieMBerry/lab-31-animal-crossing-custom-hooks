import React, { useState, createContext } from 'react';

export const ThematicContext = createContext();

//provides state to child components
export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('');

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    const color = theme === 'light' ? '#333' : '#FFF';
    const backgroundColor = theme === 'light' ? '#FFF' : '#333';

    document.body.style.color = color;
    document.body.style.backgroundColor = backgroundColor;

    return (
        //sets up the provider and the values available/provided to children (current theme & toggleTheme function)
        <ThematicContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThematicContext.Provider>
    );
};

//create hooks to make it easier to grab provider info
export const useTheme = () => {
    // grabs the provided theme state from line 15 => 7
    const { theme } = useContext(ThematicContext);
    // returns that theme
    return theme;
}

// grabs the provided function toggleTheme from line 15 => 9
export const useToggleTheme = () => {
    const { toggleTheme } = useContext(ThematicContext);
    return toggleTheme;
}
