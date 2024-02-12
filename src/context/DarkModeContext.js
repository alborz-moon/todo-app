// import React, { createContext, useContext, useState } from 'react';
//
// export const DarkModeContext = createContext();
//
// export const DarkModeProvider = ({ children }) => {
//     const [darkMode, setDarkMode] = useState(false);
//
//     const toggleDarkMode = () => {
//         setDarkMode(!darkMode);
//     };
//
//     return (
//         <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
//             {children}
//         </DarkModeContext.Provider>
//     );
// };
//
// export const useDarkMode = () => {
//     return useContext(DarkModeContext);
// };
