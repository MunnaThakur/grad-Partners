import { useState } from "react";

const Banner = () => {
  const slides = [
    [
      { id: 1, image: "././images/carousel1.png", alt: "EY Techathon" },
      { id: 2, image: "././images/carousel2.jpg", alt: "Aspire 2.0" },
    ],
    [
      { id: 3, image: "././images/carousel3.jpg", alt: "Event 3" },
      { id: 4, image: "././images/carousel4.jpg", alt: "Event 4" },
    ],
    [
      { id: 5, image: "././images/carousel5.jpg", alt: "Event 5" },
      { id: 6, image: "././images/carousel2.jpg", alt: "Event 6" },
    ],
  ];

  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative my-16 w-full max-w-7xl mx-auto overflow-hidden rounded-lg shadow-lg">
      {/* Slides */}
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((pair, index) => (
          <div
            key={index}
            className="w-full flex-shrink-0 grid grid-cols-2 gap-4 p-1"
          >
            {pair.map((slide) => (
              <div
                key={slide.id}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <img
                  src={slide.image}
                  alt={slide.alt}
                  className="w-full h-55 md:[height: 11rem] object-cover"
                />
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* Prev Button */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 -translate-y-1/2 bg-black bg-opacity-40 text-white p-2 rounded-full hover:bg-opacity-70"
      >
        ❮
      </button>

      {/* Next Button */}
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 -translate-y-1/2 bg-black bg-opacity-40 text-white p-2 rounded-full hover:bg-opacity-70"
      >
        ❯
      </button>

      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full ${
              current === index ? "bg-pink-600" : "bg-gray-300"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Banner;
