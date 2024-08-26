import Carousel from "../components/Carousel";

//the backdrop image is way to small, gotta grab the bigger one
function HeroBanner({ movieList }) {
  return (
    <div className="hero-div">
      <Carousel movieList={movieList} />
    </div>
  );
}

export default HeroBanner;
