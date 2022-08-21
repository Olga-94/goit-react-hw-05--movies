import { Suspense } from 'react';
import PropTypes from 'prop-types';
import { Outlet } from 'react-router-dom';
import {
  ReviewsList,
  ReviewsItem,
  AuthorName,
  AuthorContent,
} from './Reviews.styled';

  const Reviews = ({ reviews }) => {

  return (
    <>
      <ReviewsList>
        {reviews.map(({ id, author, content }) => (
          <ReviewsItem key={id}>
            <AuthorName>Author: {author}</AuthorName>
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

Reviews.propTypes = {
  reviews: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      author: PropTypes.string,
      content: PropTypes.string,
    }),
  ),
};
export default Reviews;