import { HashLink } from "react-router-hash-link";
import restaurantFoodImage from "./assets/restaurant-food.jpg";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="container grid">
        <div className="hero-information">
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>
            As a family-run Mediterranean eatery, we specialize in classic recipes 
            brought to life with a contemporary flair.
          </p>
          <HashLink className="button-primary" to="/reservations">
            Book your table
          </HashLink>
        </div>
        <img
          className="hero-image"
          src={restaurantFoodImage}
          alt="Delicious Mediterranean cuisine"
        />
      </div>
    </section>
  );
};

export default Hero;
