import GenreMovies from "./components/GenreMovies";
import Header from "./components/Header";
import ProductionHouse from "./components/ProductionHouse";
import Slider from "./components/Slider";

const App = () => {
  return (
    <div>
      <Header />
      <Slider />
      <ProductionHouse />
      <GenreMovies />
    </div>
  )
}

export default App;