const { createContext, useState ,useEffect} = require("react");


const ThemeContext = createContext();
const THEME_KEY = 'theme'

const ThemeProvider =({children}) =>{




    const [dark,setDark] = useState(true);

      const savedThemeToLocalStorage = (theme) => {
        localStorage.setItem(THEME_KEY, JSON.stringify(theme));
      };

  useEffect(() => {
    const savedTheme = JSON.parse(localStorage.getItem(THEME_KEY));
   console.log(savedTheme)
    if (savedTheme !== null) {
      setDark(savedTheme);
      return;
    }

    const isSystemThemeDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    setDark(isSystemThemeDark === true);
     console.log(isSystemThemeDark);
  }, []);
    
 

    return (

        <ThemeContext.Provider value={{dark,setDark,savedThemeToLocalStorage}}>
            {children}
        </ThemeContext.Provider>
    )



}
 
export {ThemeProvider}
export default ThemeContext