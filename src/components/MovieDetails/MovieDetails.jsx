import { Suspense} from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Link } from '../Navigation/Navigation.styled';
import {
  Image,
  MovieInfoWrapper,
  MovieInfoContainer,
  MovieTitle,
  MovieSubTitle,
  MovieParams,
} from './MovieDetails.styled';
import defaultImage from '../Images/defaultMovie.png';

export default function MovieInfo({
  poster,
  title,
  overview,
  releaseDate,
  popularity,
  vote,
  genres,
}) {
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';

  return (
    <MovieInfoContainer>
      <Image
        src={
          poster ? `https://image.tmdb.org/t/p/original${poster}` : defaultImage
        }
        alt={title}
      />
      <MovieInfoWrapper>
        <MovieTitle>{`${title} (${releaseDate.substring(0, 4)})`}</MovieTitle>
        <MovieSubTitle>Vote</MovieSubTitle>
        <MovieParams>{vote}</MovieParams>
        <MovieSubTitle>Popularity</MovieSubTitle>
        <MovieParams>{popularity}</MovieParams>
        <MovieSubTitle>Overview</MovieSubTitle>
        <MovieParams>{overview}</MovieParams>
        <MovieSubTitle>Genres</MovieSubTitle>
        <MovieParams>{genres}</MovieParams>


        <Link to="cast"  state={{from: backLinkHref}}>Cast</Link>
        <Link to="reviews"  state={{from: backLinkHref}}>Reviews</Link> 
      </MovieInfoWrapper>
      
      <Suspense>
        <Outlet />
      </Suspense>
    </MovieInfoContainer>
  );
}

MovieInfo.propTypes = {
  title: PropTypes.string,
  poster: PropTypes.string,
  overview: PropTypes.string,
  releaseDate: PropTypes.string,
  popularity: PropTypes.number,
  vote: PropTypes.number,
  genres: PropTypes.string,
};
