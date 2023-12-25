import PropTypes from "prop-types";
import { createContext, useState, useContext } from "react";

const DataContext = createContext({});

// Create a provider component to wrap your app
export const DataProvider = ({ children }) => {
  const [books, setBooks] = useState(null);

  return (
    <DataContext.Provider value={{ books, setBooks }}>
      {children}
    </DataContext.Provider>
  );
};

DataProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useData = () => useContext(DataContext);
