import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import apiRequest from "../../lib/apiRequest";
import PropertyCard from "./PropertyCard";
import "./propertySlider.scss";

// Slider settings for react-slick
const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 4, // Show 4 cards at a time
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: { slidesToShow: 2 }, // Show 2 cards on tablets
    },
    {
      breakpoint: 768,
      settings: { slidesToShow: 1 }, // Show 1 card on mobile
    },
  ],
};

const PropertySlider = ({ title, query, variant }) => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch properties based on query
  const fetchProperties = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await apiRequest.get("/posts", { params: query });
      // Limit to 10 products
      const limitedProperties = response.data.slice(0, 10);
      setProperties(limitedProperties);
      setLoading(false);
    } catch (err) {
      console.error(`Failed to fetch properties for ${title}:`, err);
      setError("Failed to load properties. Please try again.");
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProperties();
  }, [query, title]);

  return (
    <div className="propertySlider">
      <h2>{title}</h2>
      {loading ? (
        <p>Loading properties...</p>
      ) : error ? (
        <div className="errorContainer">
          <p className="error">{error}</p>
          <button className="retryButton" onClick={fetchProperties}>
            Retry
          </button>
        </div>
      ) : properties.length > 0 ? (
        <Slider {...sliderSettings}>
          {properties.map((post) => (
            <div key={post._id} className="sliderItem">
              <PropertyCard post={post} variant={variant}  />
            </div>
          ))}
        </Slider>
      ) : (
        <p>No properties available for {title.toLowerCase()}.</p>
      )}
    </div>
  );
};

export default PropertySlider;