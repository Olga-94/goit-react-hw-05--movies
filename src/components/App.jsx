import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import AppBar from '../components/AppBar/AppBar';
import Spinner from '../components/Spinner/Spinner';
import { Container } from './App.styled';

const HomePage = lazy(() =>
  import('../Views/HomePage' /* webpackChunkName: "home-page" */),
);
const MoviesPage = lazy(() =>
  import('../Views/MoviesPage' /* webpackChunkName: "movies-page" */),
);
const MovieDetailsPage = lazy(() =>
  import(
    '../Views/MovieDetailsPage' /* webpackChunkName: "movie-details-page" */
  ),
);
// const CastView = lazy(() =>
//   import('../Views/CastViews' /* webpackChunkName: "cast-view" */),
// );
// const ReviewsView = lazy(() =>
//   import('../Views/ReviewsView' /* webpackChunkName: "reviews-view" */),
// );

const NotFoundPage = lazy(() =>
  import('../Views/NotFoundPage' /* webpackChunkName: "not-found-page" */),
);

export const App = () =>  {
  return (
    <Container>
      <AppBar />
      <Suspense fallback={<Spinner />}>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/movies" element={<MoviesPage />} />
          <Route exact path="/movies/:movieId" element={<MovieDetailsPage />} />
          {/* <Route exact path="/cast" element={<CastView />} />
          <Route exact path="/reviews" element={<ReviewsView />} /> */}
          <Route exact path="*" element={<NotFoundPage />} />       
        </Routes>
      </Suspense>

      <Toaster />
    </Container>
  );
}

