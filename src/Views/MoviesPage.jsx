import { useState, useEffect } from 'react';
import toast from 'react-hot-toast';
import { useSearchParams } from 'react-router-dom';
import { fetchSearchMovies } from '../services/apiService';
import { SearchBar } from '../components/SearchBar/SearchBar';
import MovieCardList from '../components/MovieCardList/MovieCardList';

export default function MoviesPage() {
  const [searhParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState(null);

  const searchQuery = searhParams.get('query') ?? '';

  useEffect(() => {
    if (!searchQuery) {
      return;
    }

    async function getFetchMovies() {
      try {
        const data = await fetchSearchMovies(searchQuery);
        // const { results } = data;

        if (!data.results.length) {
          throw new Error('No results found');
        }

        setMovies(data.results);
      } catch (error) {
        console.log(error);
        toast.error('No results found', { duration: 3000 });
      }
    }
    if (searchQuery === '') {
      return;
    }
    getFetchMovies();
  }, [searchQuery]);

  const handleFormSubmit = newQuery => {
      setSearchParams({ query: `${newQuery}` });
  }

  return (
    <>
      <SearchBar onSubmit={handleFormSubmit}></SearchBar>
      {movies && (
        <>
          <MovieCardList movies={movies} />
        </>
      )}
    </>
  );
      }
