import NavBar from "./components/NavBar";
import logo from "./assets/logo.webp";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import ToggleColorMode from "./components/ToggleColorMode";
import GameGrid from "./components/GameGrid";

function App() {
  return (
    <>
      <NavBar />
      <GameGrid></GameGrid>;
    </>
  );
}

export default App;
