
import { useState, useEffect } from 'react';
// import { useNavigate, useLocation } from 'react-router-dom';
// import toast from 'react-hot-toast';
import { fetchTrandingMovies } from '../services/apiService';
import MovieCardList from '../components/MovieCardList/MovieCardList';
import styled from 'styled-components';
import Pagination from '../components/Pagination/Pagination';

 const HomePage = () => {
  const itemsPerPage = 8;
  // const { isExact } = useRouteMatch();
  // const location = useLocation();
  // const navigate = useNavigate();
  const [movies, setMovies] = useState([]);
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  // const [totalPages, setTotalPages] = useState(null);
  // const currentPage = Number(new URLSearchParams(window.location.search).get('page')) || 1;
  
    useEffect(() => {
      // if (!isExact) {
      //   navigate.push('/');
      //   toast.error('Page not found', { duration: 3000 });
      // }
  //   async function getFetchMovies() {
  //     try {
  //       const data = await fetchTrandingMovies();
  //       const { results } = data;

  //       // setTotalPages(total_pages);
  //       setMovies(results);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }
  //   getFetchMovies();
  // }, []);
  async function getFetchMovies() {
    try {
      const data = await fetchTrandingMovies();
      console.log('data', data);
      const {
        results,
        // total_pages
      } = data;
      // setTotalPages(total_pages);
      setMovies(results);
    } catch (error) {
      console.log(error);
    }
  }
  getFetchMovies();
}, []);

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(movies.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(movies.length / itemsPerPage));
  }, [itemOffset, movies, itemsPerPage]);

  const handlePageClick = ({ selected }) => {
   console.log(selected);
    const newOffset = (selected * itemsPerPage) % movies.length;
    setItemOffset(newOffset);
  };

  return (
    <>
     <Title>Trending Today</Title>
      {movies && <MovieCardList movies={currentItems} />}
      {/* <MovieCardList movies={movies} /> */}
      <Pagination pageCount={pageCount} onClick={handlePageClick} />
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