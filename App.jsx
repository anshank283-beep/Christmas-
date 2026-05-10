import { useState } from 'react';
import SearchBar from './components/SearchBar';
import Results from './components/Results';

export default function App() {
  const [results, setResults] = useState([]);

  const handleSearch = async (query) => {
    const response = await fetch(
      `http://localhost:5000/api/search?q=${query}`
    );

    const data = await response.json();
    setResults(data);
  };

  return (
    <div className="min-h-screen flex flex-col items-center p-10">
      <h1 className="text-5xl font-bold mb-10">
        DASH Search Engine
      </h1>

      <SearchBar onSearch={handleSearch} />

      <Results results={results} />
    </div>
  );
}
