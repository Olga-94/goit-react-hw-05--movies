import { useState, useEffect } from 'react';
import toast from 'react-hot-toast';
import { useLocation, useNavigate } from 'react-router-dom';
import { fetchSearchMovies } from '../services/apiService';
import { SearchBar } from '../components/SearchBar/SearchBar';
import MovieCardList from '../components/MovieCardList/MovieCardList';
import Pagination from '../components/Pagination/Pagination';
import NotFoundPage from './NotFoundPage';

export default function MoviesPage() {
  const [movies, setMovies] = useState();
  const [totalPages, setTotalPages] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();
  const searchQuery =  new URLSearchParams(location.search).get('query');
  const currentPage = Number(new URLSearchParams(location.search).get('page')) || 1;

  useEffect(() => {
    if (!searchQuery) {
      return;
    }

    async function getFetchMovies() {
      try {
        const data = await fetchSearchMovies(searchQuery, currentPage);
        console.log('data', data);
        const { results, total_pages } = data;

        if (!results.length) {
          // throw new Error('No results found');
          NotFoundPage();
        }

        setMovies(results);
        setTotalPages(total_pages);
      } catch (error) {
        console.log(error);
        toast.error('No results found', { duration: 3000 });
      }
    }
    getFetchMovies();
    window.scrollTo({ top: 240, behavior: 'smooth' });
  }, [searchQuery, currentPage]);

  const handleFormSubmit = query => {

      if (searchQuery === query) {
        return;
      }
  
      setMovies([]);
  
      navigate({
        ...location,
        search: `query=${query}&page=1`,
      });
    }

  const handlePageClick = ({ selected }) => {
    navigate({
      ...location,
      search: `query=${searchQuery}&page=${selected + 1}`,
    });
  };

  return (
    <>
      <SearchBar onSubmit={handleFormSubmit}></SearchBar>
      {movies && (
        <>
          <MovieCardList movies={movies} />
          <Pagination pageCount={totalPages} onClick={handlePageClick} />
        </>
      )}
    </>
  );
      }
