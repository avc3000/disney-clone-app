import GenresList from '../constants/GenresList';
import MovieList from './MovieList';

const GenreMovies = () => {
  return (
    <div>
      {
        GenresList.genre.map((item, index) => index <= 4 && (
          <div key={index} className='p-8 px-8 md:px-16'>
            <h2 className='text-[20px] text-slate-300 font-mono font-bold'>{item.name}</h2>
            <MovieList genre={item.id} />
          </div>
        ))
      }
    </div>
  )
}

export default GenreMovies;