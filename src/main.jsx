import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ChakraProvider } from "@chakra-ui/react";
import { DataProvider } from "./context/DataContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <DataProvider>
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </DataProvider>
);
