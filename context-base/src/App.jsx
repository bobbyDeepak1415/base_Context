import { createContext } from "react";
import "./App.css";
import Child from "./components/Child";

export const ThemeContext = createContext();
function App() {
  const theme = "dark";

  return (
    <ThemeContext.Provider value={theme}>
      <Child />
    </ThemeContext.Provider>
  );
}

export default App;
