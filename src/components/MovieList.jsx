import { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import GlobalApi from '../services/GlobalApi';
import MovieCard from './MovieCard';
import { IoChevronBackOutline, IoChevronForwardOutline } from 'react-icons/io5';

const SCREEN_WIDTH = window.innerWidth;

const MovieList = ({ genre }) => {
  const [genreMovies, setGenreMovies] = useState([]);
  const elementRef = useRef();

  useEffect(() => {
    getMoviesGenres();
  });

  const getMoviesGenres = () => GlobalApi.GET_MOVIES_BY_GENRE_ID(genre).then(response => setGenreMovies(response.data.results) );
  const slideRight = (element) => element.scrollLeft += SCREEN_WIDTH - 100;
  const slideLeft = (element) => element.scrollLeft -= SCREEN_WIDTH - 100;
  
  return (
    <div className='relative'>
      <IoChevronBackOutline onClick={() => slideLeft(elementRef.current)} className={`text-[30px] text-black rounded-full bg-white opacity-50 hover:opacity-70 p-2 z-10 cursor-pointer absolute lg:mt-[150px] md:block mt-[80px]`}/>
      <div ref={elementRef} className='flex overflow-x-auto gap-8 scrollbar-none scroll-smooth p-4'>
        {
          genreMovies?.map((movie, index) => (
            <MovieCard key={index} movie={movie} />
          ))
        }
      </div>
      <IoChevronForwardOutline onClick={()=>slideRight(elementRef.current)} className={`text-[30px] text-black rounded-full bg-white opacity-50 hover:opacity-70 p-2 cursor-pointer z-10 top-0 absolute right-0 lg:mt-[150px] md:block mt-[80px]`}/>
    </div>
  )
}

MovieList.propTypes = {
  genre: PropTypes.number,
}

export default MovieList;