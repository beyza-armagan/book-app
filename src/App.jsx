import "./App.css";
import ListBooks from "./components/ListBooks";
import axios from "axios";
import Header from "./components/Header";
import { useEffect, useState } from "react";
import { useData } from "./context/DataContext";

function Main() {
  const { setBooks, books } = useData();
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const formattedQuery = searchQuery.replace(/\s+/g, "+");
        let url = `https://www.googleapis.com/books/v1/volumes?q=${formattedQuery}`;
        const response = await axios.get(url);
        const data = response.data;
        setBooks(data.items);
        console.log(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [searchQuery, setBooks]);

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <div className="app">
      <Header onSearch={handleSearch} searchQuery={searchQuery} />
      <ListBooks books={books} />
    </div>
  );
}

export default Main;
