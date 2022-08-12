import { useEffect, useState } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import toast from 'react-hot-toast';
import { fetchMovieInformation } from '../services/apiService';
import { Button } from '../components/App.styled';
import MovieInfo from '../components/MovieDetails/MovieDetails';


const MovieDetailsPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    async function getMovieInformation() {
      try {
        const movie = await fetchMovieInformation(movieId);

        if (!movie) {
          throw new Error('Page not found');
        }

        setMovie(movie);
      } catch (error) {
        console.log(error);
        toast.error('Page not found', { duration: 3000 });
      }
    }
    getMovieInformation();
  }, [ movieId]);
 
  const goBack = () => {
    // return navigate(location?.state?.from);
    // return navigate(-1);
    navigate(location?.state?.from || '/');
  }; 

  return (
    <>
      <Button type="button" onClick={goBack}>
        Go back
      </Button>

      {movie && (
        <MovieInfo
          title={movie.title}
          poster={movie.poster_path}
          overview={movie.overview}
          releaseDate={movie.release_date || 'ツ'}
          popularity={movie.popularity}
          vote={movie.vote_average}
          genres={movie.genres.map(genre => genre.name).join(', ') || '\u2015'}
        />
      )}
    </>
  );
}

export default MovieDetailsPage;