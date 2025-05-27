import { useContext } from "react";
import SearchBar from "../../components/searchBar/SearchBar";
import "./homePage.scss";
import { AuthContext } from "../../context/AuthContext";
import Footer from "../footer/Footer";
import PropertySlider from "./PropertySlider";

function HomePage() {
  const { currentUser } = useContext(AuthContext);

  return (
    <>
      <div className="homePage">
        <div className="textContainer">
          <div className="wrapper">
            <h1 className="title">Find Real Estate & Get Your Dream Place</h1>
            <p>
              Discover an Extensive Selection of Premium Properties Across Prime Locations. Whether You’re Buying, Selling, or Renting, Our Dedicated Team Provides Personalized Support and Expert Advice to Help You Make Informed Decisions. Begin Your Journey to the Perfect Home with Confidence and Ease Today!
            </p>
            <SearchBar />
            <div className="boxes">
              <div className="box">
                <h1>16+</h1>
                <h2>Years of Experience</h2>
              </div>
              <div className="box">
                <h1>200</h1>
                <h2>Award Gained</h2>
              </div>
              <div className="box">
                <h1>2000+</h1>
                <h2>Property Ready</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="imgContainer">
          <img src="/bg.png" alt="" />
        </div>
      </div>

      <PropertySlider
        title="Properties for Rent"
        query={{ type: "rent" }}
        variant="rent"
      />
      <PropertySlider
        title="Properties for Sale"
        query={{ type: "buy" }}
        variant="buy"
      />
      <PropertySlider
        title="Explore Properties in Surat"
        query={{ city: "Surat" }}
        variant="surat"
      />
      <PropertySlider
        title="Explore Properties in Mumbai"
        query={{ city: "Mumbai" }}
        variant="mumbai"
      />
      <Footer />
    </>
  );
}

export default HomePage;

