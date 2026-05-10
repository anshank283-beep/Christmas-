import { useState } from 'react';

export default function SearchBar({ onSearch }) {
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 w-full max-w-xl">
      <input
        type="text"
        placeholder="Search websites..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="flex-1 p-4 rounded-xl text-black"
      />

      <button
        type="submit"
        className="bg-blue-600 px-6 py-4 rounded-xl"
      >
        Search
      </button>
    </form>
  );
}
