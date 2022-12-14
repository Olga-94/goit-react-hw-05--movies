import {  Suspense } from 'react';
import { Outlet} from 'react-router-dom';
import PropTypes from 'prop-types';
// import { fetchCastInformation } from '../../services/apiService';
// import { Container } from '../App.styled';
import { CastList, CastItem, CastTitle, Image } from './Cast.styled';
import defaultImage from '../Images/default.png';

function Cast({ credits })  {
//   const [cast, setCast] = useState([]);
//   const { detailsId } = useParams();
  
//   useEffect(() => {
//   const fetchMoviesCast = async () => {
//     try {
//       const response = await fetchCastInformation(detailsId);
//       setCast(response.data.cast);
//     } catch (error) {
//       setCast([]);
//     }
//   };
//   fetchMoviesCast();
// }, [detailsId]);

  return (
    <>
      <CastList>
        {credits.map(({ id, name, profile_path }) => (
          <CastItem key={id}>
            <Image
              src={
                profile_path
                  ? `https://image.tmdb.org/t/p/original${profile_path}`
                  : defaultImage
              }
              alt={name}
            />
            <CastTitle>{name}</CastTitle>
          </CastItem>
        ))}
      </CastList>
      <Suspense>
        <Outlet />
      </Suspense>
    </>
  );
};
  
Cast.propTypes = {
  cast: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      profile_path: PropTypes.string,
    }),
  ),
};

export default Cast;
