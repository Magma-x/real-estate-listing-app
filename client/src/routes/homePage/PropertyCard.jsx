import React from "react";
import "./propertyCard.scss";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const PropertyCard = ({ post, variant,id }) => {
  const { _id, title, price, images, address, city, bedroom, bathroom } = post;
  const navigate = useNavigate(); // Initialize navigate hook

   const handleViewDetails = () => {
    console.log(`Navigating to details page for post ID: ${_id}`); // Debug log
    navigate(`/${post.id}`);
  };


  const RentCard = () => (
    <div className="propertyCard rentCard">
      <div className="imageWrapper">
        <img src={images[0] || "/default-property.jpg"} alt={title} />
      </div>
      <div className="info">
        <h3>{title}</h3>
        <p className="address">{address}, {city}</p>
        <p className="price">${price.toLocaleString()}/mo</p>
        <div className="details">
          <span>{bedroom} Bed</span> | <span>{bathroom} Bath</span>
        </div>
         <button className="viewDetailsButton" onClick={handleViewDetails}>
          View Details
        </button>
      </div>
    </div>
  );

  const BuyCard = () => (
    <div className="propertyCard buyCard">
      <div className="imageWrapper">
        <img src={images[0] || "/default-property.jpg"} alt={title} />
      </div>
      <div className="info">
        <h3>{title}</h3>
        <p className="address">{address}, {city}</p>
        <p className="price">${price.toLocaleString()}</p>
        <div className="details">
          <span>{bedroom} Bedrooms</span> | <span>{bathroom} Bathrooms</span>
        </div>
        <button className="viewDetailsButton" onClick={handleViewDetails}>
          View Details
        </button>
      </div>
    </div>
  );

  const SuratCard = () => (
    <div className="propertyCard suratCard">
      <div className="imageWrapper">
        <img src={images[0] || "/default-property.jpg"} alt={title} />
        <span className="cityTag">{city}</span>
      </div>
      <div className="info">
        <h3>{title}</h3>
        <p className="address">{address}</p>
        <p className="price">${price.toLocaleString()}</p>
        <div className="details">
          <span>{bedroom} Bed</span> | <span>{bathroom} Bath</span>
        </div>
        <button className="viewDetailsButton" onClick={handleViewDetails}>
          View Details
        </button>
      </div>
    </div>
  );

  const MumbaiCard = () => (
    <div className="propertyCard mumbaiCard">
      <div className="imageWrapper">
        <img src={images[0] || "/default-property.jpg"} alt={title} />
        <div className="overlay">
          <h3>{title}</h3>
          <p>{address}</p>
        </div>
      </div>
      <div className="info">
        <p className="address">{address}, {city}</p>
        <p className="price">${price.toLocaleString()}</p>
        <div className="details">
          <span>{bedroom} Bed</span> | <span>{bathroom} Bath</span>
        </div>
        <button className="viewDetailsButton" onClick={handleViewDetails}>
          View Details
        </button>
      </div>
    </div>
  );

  switch (variant) {
    case "rent":
      return <RentCard />;
    case "buy":
      return <BuyCard />;
    case "surat":
      return <SuratCard />;
    case "mumbai":
      return <MumbaiCard />;
    default:
      return null;
  }
};

export default PropertyCard;