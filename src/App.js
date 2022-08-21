
import './App.css';
import { Routes, Route,} from "react-router-dom";
import Home from "./home";
import UseMinLink from "./useMinLink";
import {createContext, useState} from "react";
export const ThemeContext=createContext(null);

function App() {
    const [theme,setTheme]=useState("dark")
    const toggleTheme = () => {
        setTheme((theme) => theme==="light"?"dark":"light")
    }
  return (
      <ThemeContext.Provider value={{theme, toggleTheme }}>
          <div className="App" id={theme}>
              <Routes>
                  <Route path={"/*"}  element={<UseMinLink />}/>
                  <Route path="home" exact={true} element={<Home />}/>
                  {/*<Route path={"**"} element={<FourZeroFour/>}/>*/}
              </Routes>
          </div>
      </ThemeContext.Provider>

  );
}

export default App;

/*

192734
22303c
ffffff
8899a6

*/