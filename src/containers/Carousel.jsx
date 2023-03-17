import React, { useState, useEffect } from "react";

const images = [
  "https://i.pinimg.com/564x/07/6d/da/076dda6d05a2b9e5a36afe2f8c6a6d90.jpg",
  "https://i.pinimg.com/564x/e6/79/f0/e679f08862820e73ce1e3cbbe9c3430e.jpg",
  "https://i.pinimg.com/564x/f7/3f/2d/f73f2dd2527696a26f3d6bc4fe02f372.jpg",
  "https://i.pinimg.com/564x/29/9b/90/299b909f8ad82bce44fe72e13835bf3a.jpg",
];

export const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveIndex((activeIndex) => (activeIndex + 1) % images.length);
    }, 6000);

    return () => clearInterval(intervalId);
  }, []);

  const handleDotClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          src={images[activeIndex]}
          alt={`img${activeIndex}`}
          style={{
            width: "500px",
            height: "600px",
          }}
        />
      </div>
      <div style={{ display: "flex", alignItems: "center" }}>
        {images.map((_, index) => (
          <div
            key={index}
            style={{
              width: "10px",
              height: "10px",
              borderRadius: "50%",
              background: activeIndex === index ? "black" : "gray",
              margin: "0 5px",
              cursor: "pointer",
            }}
            onClick={() => handleDotClick(index)}
          ></div>
        ))}
      </div>
    </div>
  );
};
