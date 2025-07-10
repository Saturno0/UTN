import { useState, useEffect } from "react";

const Slides = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const milisegundos = 10000;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => !prevSlide);
    }, milisegundos);

    // Limpieza del intervalo cuando el componente se desmonta
    return () => clearInterval(interval);
  }, []); // El array vacío asegura que solo se ejecute una vez

  return (
    <div className="slider-container">
      <div className="slider">
        <div
          className="slide"
          id="primero"
          style={{ display: currentSlide ? "block" : "none" }}
        ></div>
        <div
          className="slide"
          id="segundo"
          style={{ display: currentSlide ? "none" : "block" }}
        ></div>
      </div>
    </div>
  );
};

export default Slides;
