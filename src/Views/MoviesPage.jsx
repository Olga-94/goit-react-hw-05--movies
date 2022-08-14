import { useState, useEffect } from 'react';
import toast from 'react-hot-toast';
import { useSearchParams, useLocation, useNavigate } from 'react-router-dom';
import { fetchSearchMovies } from '../services/apiService';
import { SearchBar } from '../components/SearchBar/SearchBar';
import MovieCardList from '../components/MovieCardList/MovieCardList';
import Pagination from '../components/Pagination/Pagination';

export default function MoviesPage() {
  const [searhParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState(null);
  const [totalPages, setTotalPages] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  const searchQuery = searhParams.get('query') ?? '';
  const currentPage = Number(new URLSearchParams(location.search).get('page'));
  console.log(currentPage);

  useEffect(() => {
    if (!searchQuery) {
      return;
    }

    async function getFetchMovies() {
      try {
        const data = await fetchSearchMovies(searchQuery);
        const { results, total_pages } = data;

        if (!results.length) {
          throw new Error('No results found');
        }

        setMovies(results);
        setTotalPages(total_pages);
      } catch (error) {
        console.log(error);
        toast.error('No results found', { duration: 3000 });
      }
    }
    if (searchQuery === '') {
      return;
    }
    getFetchMovies();
  }, [searchQuery, currentPage]);

  const handleFormSubmit = newQuery => {
      setSearchParams({ query: `${newQuery}` });
  }
  const handlePageClick = ({ selected }) => {
    navigate.push({
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
          <Pagination totalPages={totalPages} onClick={handlePageClick} />
        </>
      )}
    </>
  );
      }
