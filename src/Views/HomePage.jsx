
import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
// import toast from 'react-hot-toast';
import { fetchTrandingMovies } from '../services/apiService';
import MovieCardList from '../components/MovieCardList/MovieCardList';
import styled from 'styled-components';
import Pagination from '../components/Pagination/Pagination';

 const HomePage = () => {
  // const { isExact } = useRouteMatch();
  const location = useLocation();
  const navigate = useNavigate();
  const [movies, setMovies] = useState([]);
  const [totalPages, setTotalPages] = useState(null);
  const currentPage = Number(new URLSearchParams(window.location.search).get('page')) || 1;
  
    useEffect(() => {
      // if (!isExact) {
      //   navigate.push('/');
      //   toast.error('Page not found', { duration: 3000 });
      // }
    async function getFetchMovies() {
      try {
        const data = await fetchTrandingMovies(currentPage);
        const { results, total_pages } = data;

        setTotalPages(total_pages);
        setMovies(results);
      } catch (error) {
        console.log(error);
      }
    }
    getFetchMovies();
  }, [currentPage, navigate]);
  
  const handlePageClick = ({ selected }) => {
    navigate({
      ...location,
      search: selected === 0 ? '' : `page=${selected + 1}`,
    });
  };

  return (
    <>
     <Title>Trending Today</Title>
      {movies && <MovieCardList movies={movies} />}
      {/* <MovieCardList movies={movies} /> */}
      <Pagination totalPages={totalPages} onClick={handlePageClick} />
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