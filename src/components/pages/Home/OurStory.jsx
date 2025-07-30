import chefsMarioAndAdrian1Img from "./assets/chefs-mario-and-adrian_1.jpg";
import chefsMarioAndAdrian2Img from "./assets/chefs-mario-and-adrian_2.jpg";
import "./OurStory.css";

const OurStory = () => {
  return (
    <section className="container grid our-story" id="about">
      <div className="our-story-description">
        <h2>Our Story</h2>
        <p>
          Founded by two passionate chefs, Mario and Adrian, our restaurant blends 
          culinary tradition with innovation. We craft every dish using fresh, 
          locally sourced ingredients to deliver unforgettable flavors. 
          Our mission is to create a warm dining experience where every guest 
          feels like family.
        </p>
      </div>
      <div className="our-story-chefs">
        <img src={chefsMarioAndAdrian1Img} alt="Chefs Mario and Adrian #1" />
        <img src={chefsMarioAndAdrian2Img} alt="Chefs Mario and Adrian #2" />
      </div>
    </section>
  );
};

export default OurStory;
