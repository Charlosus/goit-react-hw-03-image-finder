// import { useState } from 'react';
import './App.css';
import axios from 'axios';
import { SearchBar } from './SearchBar';
import { useEffect, useState } from 'react';

function App() {
  const [searchInput, setInput] = useState('');

  const API_KEY = '50495832-52e00f4195b6d2cb1ef4fba52';
  const BASE_URL = 'https://pixabay.com/api/';
  async function fetchImages() {
    try {
      const response = await axios.get(BASE_URL, {
        params: {
          key: API_KEY,
          q: searchInput,
          image_type: 'photo',
          orientation: 'horizontal',
          safesearch: true,
        },
      });
      console.log('Odpowiedź z Pixabay:', response.data);
    } catch (error) {
      console.error('Błąd podczas pobierania danych z Pixabay:', error.message);
    }
  }
  const handleSubmit = (evt) => {
    evt.preventDefault();
    const value = evt.target.elements.search.value.trim();
    if (!value) return;
    setInput(value);
  };

  useEffect(() => {
    if (!searchInput) return;
    fetchImages(searchInput);
  }, [searchInput]);
  return <SearchBar onSubmit={handleSubmit} />;
}

export default App;
