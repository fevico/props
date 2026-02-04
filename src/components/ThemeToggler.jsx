import {createContext, useContext, useState} from 'react'

// create theme context 
const ThemeContext = createContext()

// theme provide component 
export function ThemeProvider ({children}) {
    const [theme, setTheme] = useState("light");

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    }

    const value = {
        theme,
        toggleTheme,
        isDark: theme === "dark",
    }

    return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

// custom hook to use theme context 
export function useTheme() {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error("useTheme must be used within a ThemeProvider");
    }
    return context;
}

function themeToggleButton(){
    const {toggleTheme, isDark} = useTheme();
    return (
        <button className="p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600" onClick={toggleTheme} >{isDark ? "Light Mode" : "Dark Mode"}</button>
    )
}

function ThemeCard ({title, children}) {
    const {theme, isDark} = useTheme();
    return (
        <div className={`p-6 rounded-lg shadow-md ${isDark ? 'bg-gray-800 text-white' : 'bg-gray-100 text-black'}`}>
            <h3 className="text-xl font-bold mb-3">Current Theme: {theme}</h3>
            <p>This card's style changes based on the selected theme.</p>
            <h3 className="text-lg font-semibold mt-4">{title}</h3>
            <div className="mt-4">{children}</div>
        </div>
    )
}

const ThemeToggler = () => {
  return (
    <div>
        <section className='p-8 rounded-xl shadow-lg text-black bg-white'>
            <h2>Theme Toggler with Context API</h2>
            <p>The Theme Toggler component demonstrates how to use React's Context API to manage and toggle between light and dark themes across an application.</p>
            <div className="mt-4"> 
                {themeToggleButton()}
            </div>
        </section>
    </div>
  )
}

export default ThemeToggler