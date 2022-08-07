
import { useState, useEffect } from 'react';
import { fetchTrandingMovies } from '../services/apiService';
import MovieCardList from '../components/MovieCardList/MovieCardList';
import styled from 'styled-components';
// import Pagination from '../components/Pagination/Pagination';

 const HomePage = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {

    async function getFetchMovies() {
      try {
        const data = await fetchTrandingMovies();
        const { results } = data;

        setMovies(results);
      } catch (error) {
        console.log(error);
      }
    }
    getFetchMovies();
  }, []);

  return (
    <>
     <Title>Trending Today</Title>
      {movies && <MovieCardList movies={movies} />}
      {/* <MovieCardList movies={movies} /> */}
      {/* <Pagination totalPages={totalPages} onClick={handlePageClick} /> */}
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