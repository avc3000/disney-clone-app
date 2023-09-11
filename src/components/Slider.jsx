import { useState, useEffect, useRef } from 'react';
import GlobalApi from '../services/GlobalApi';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';

const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/original';
const SCREEN_WIDTH = window.innerWidth;

const Slider = () => {
  const [movies, setMovies] = useState([]);
  const elementRef = useRef();

  useEffect(() => {
    getMovies();
  }, []);

  const getMovies = () => {
    GlobalApi.GET_MOVIES.then((response) => {
      setMovies(response.data.results);
    })
  };

  const sliderRight = (element) => element.scrollLeft += SCREEN_WIDTH - 125;
  const sliderLeft = (element) => element.scrollLeft -= SCREEN_WIDTH - 125;
  
  return (
    <div>
      <HiChevronLeft onClick={() => sliderLeft(elementRef.current)} className='text-black text-[30px] absolute mx-8 rounded-full bg-white opacity-20 hover:opacity-40 lg:mt-[150px] cursor-pointer md:block mt-[70px]' />
      <HiChevronRight onClick={() => sliderRight(elementRef.current)} className='text-black text-[30px] absolute mx-8 rounded-full bg-white opacity-20 hover:opacity-40 lg:mt-[150px] cursor-pointer right-0 md:block mt-[70px]' />
      <div ref={elementRef} className='flex overflow-x-auto w-full px-16 py-4 scrollbar-none scroll-smooth'>
        {
          movies.map((movie, index) => (
            <img key={index} src={IMAGE_BASE_URL + movie.backdrop_path} className='min-w-full md:h-[310px] object-cover object-left-top mr-5 rounded-md hover:border-[4px] border-gray-500 transition-all duration-100 ease-in' />
          ))
        }
      </div>
    </div>
  )
}

export default Slider;