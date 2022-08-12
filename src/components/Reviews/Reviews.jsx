import { useEffect, useState, Suspense } from 'react';
// import PropTypes from 'prop-types';
import { Outlet, useParams } from 'react-router-dom';
import { fetchReviews } from '../../services/apiService';
// import { Container } from '../App.styled';
import {
  ReviewsList,
  ReviewsItem,
  AuthorName,
  AuthorContent,
} from './Reviews.styled';

  const Reviews = () => {
    const [reviews, setReviews] = useState([]);
  const { detailsId } = useParams();
  useEffect(() => {
    const fetchMoviesReviews = async () => {
      try {
        const response = await fetchReviews(detailsId);
        setReviews(response.data.results);
      } catch (error) {
        setReviews([]);
      }
    };
    fetchMoviesReviews();
  }, [detailsId]);
  return (
    <>
    {/* {reviews.length ?(


    )} */}
      <ReviewsList>
        {reviews.map(({ id, author, content }) => (
          <ReviewsItem key={id}>
            <AuthorName>{author}</AuthorName>
            <AuthorContent>{content}</AuthorContent>
          </ReviewsItem>
        ))}
      </ReviewsList>
      <Suspense>
        <Outlet />
      </Suspense>
    </>
  );
}

// Reviews.propTypes = {
//   reviews: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string,
//       author: PropTypes.string,
//       content: PropTypes.string,
//     }),
//   ),
// };
export default Reviews;