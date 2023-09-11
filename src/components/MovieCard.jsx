import PropTypes from 'prop-types';

const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/original';

const MovieCard = ({ movie }) => {
  return (
    <>
      <img src={IMAGE_BASE_URL + movie.poster_path} alt="movie" className='w-[110px] cursor-pointer md:w-[200px] rounded-lg hover:border-[4px] border-gray-400 hover:scale-110 transition-all duration-150 ease-in' />
    </>
  )
}

MovieCard.propTypes = {
  movie: PropTypes.object
}

export default MovieCard;