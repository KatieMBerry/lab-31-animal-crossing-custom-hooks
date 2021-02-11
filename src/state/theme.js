import React, { useState, createContext, useContext } from 'react';

export const ThematicContext = createContext(null);

//provides state to child components
export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('dark');

    const toggle = ({ target }) => {
        if (target.checked) setTheme('light')
        else setTheme('dark')
    };

    return (//sets up the provider and the values available/provided to children
        <ThematicContext.Provider value={{ theme, useToggle }}>
            {children}
        </ThematicContext.Provider>
    );
};

export const useToggle = () => {
    const { theme } = useContext(ThematicContext);
    return theme;
}

// export const useToggleOn = () => {
//     const { theme } = useContext(ThematicContext);
//     return toggle;
// }
