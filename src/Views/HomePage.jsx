
import { useState, useEffect } from 'react';
import { fetchTrandingMovies } from '../services/apiService';
import MovieCardList from '../components/MovieCardList/MovieCardList';
import styled from 'styled-components';
import Pagination from '../components/Pagination/Pagination';

 const HomePage = () => {
  const itemsPerPage = 20;
  const [movies, setMovies] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  const [totalPages, setTotalPages] = useState(null);
  
    useEffect(() => {
  
  async function getFetchMovies() {
    try {
      const data = await fetchTrandingMovies(pageCount);
      console.log('data', data);
      const {
        results,
        total_pages
      } = data;
      setTotalPages(total_pages);
      setMovies(results);
    } catch (error) {
      console.log(error);
    }
  }
  getFetchMovies();
  window.scrollTo({ top: 240, behavior: 'smooth' });
}, [pageCount]);

useEffect(() => {}, [itemOffset, movies, itemsPerPage]);

  const handlePageClick = ({ selected }) => {
   console.log(selected);
   setPageCount(selected + 1);
    const newOffset = (selected * itemsPerPage) % movies.length;
    setItemOffset(newOffset);

  };

  return (
    <>
     <Title>Trending Today</Title>
      {movies && <MovieCardList movies={movies} />}
      <Pagination pageCount={totalPages} onClick={handlePageClick} />
    </>
  );
}

export default HomePage;

const Title = styled.h2`
  margin: ${p => p.theme.space[4]}px;
  text-decoration: none;
  color: ${p => p.theme.colors.accent};
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.bold};
`;