// import { useState } from 'react';
import './App.css';
import axios from 'axios';
import { SearchBar } from './SearchBar';
import { useEffect, useState } from 'react';
import { Gallery } from './Gallery';
import { Button } from './Button';
import ClipLoader from "react-spinners/ClipLoader";

function App() {
  const [searchInput, setInput] = useState('');
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const API_KEY = '50495832-52e00f4195b6d2cb1ef4fba52';
  const BASE_URL = 'https://pixabay.com/api/';
  async function fetchImages() {
    try {
      setLoading(true);
      const response = await axios.get(BASE_URL, {
        params: {
          key: API_KEY,
          q: searchInput,
          image_type: 'photo',
          orientation: 'horizontal',
          safesearch: true,
          page: page,
          per_page: 12,
        },
      });
      if (page === 1) {
        setImages(response.data.hits);
      } else {
        setImages((prevImages) => [...prevImages, ...response.data.hits]);
      }
    } catch (error) {
      console.error('Błąd podczas pobierania danych z Pixabay:', error.message);
    }
  }
  const handleSubmit = (evt) => {
    evt.preventDefault();
    const value = evt.target.elements.search.value.trim();
    if (!value) return;
    setInput(value);
    setPage(1);
  };

  useEffect(() => {
    if (!searchInput) return;
    fetchImages();
  }, [searchInput, page]);

  return (
    <div>
      <SearchBar onSubmit={handleSubmit} />
      <Gallery images={images} />
      {images.length > 0 && (
        <Button onClick={() => setPage((prev) => prev + 1)} />
      )}
    </div>
  );
}

export default App;
