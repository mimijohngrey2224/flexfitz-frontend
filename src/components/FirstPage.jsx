import { useState } from "react";
// import { firstPage } from "./ecomdata"; // Import the data from ecomdata

function FirstPage({firstPage}) {
  // State for managing the image index
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Array of images (from e-commerce data)
  const images = firstPage.map((product) => product.img); // Get the image paths from ecomdata

  // Function to navigate images using the arrow
  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length); // Loop back to the first image
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length); // Loop back to the last image
  };

  return (
    <div className="my-[40px] mx-[20px]">
      <h1 className="font-bold text-center text-3xl text-gray-800 mb-[20px]">
        Men’s Sportswear Collection – Performance Meets Style
      </h1>

      {/* Horizontal Image Row */}
      <div className="flex overflow-x-auto space-x-[20px] pb-[20px]">
        {firstPage.map((product, index) => (
          <img
            key={product.id}
            src={product.img}
            alt={product.name}
            className="w-[200px] h-[200px] object-cover rounded-lg shadow-xl transition-all duration-300 transform hover:scale-110 hover:shadow-2xl"
          />
        ))}
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-center">
        {/* Left Side: Image with arrow navigation */}
        <div className="relative mb-[30px] lg:mb-0">
          <img
            src={images[currentImageIndex]} // Display the current image based on the index
            alt="Product Image"
            className="w-[480px] h-[480px] object-cover rounded-lg shadow-xl transition-all duration-300 ease-in-out"
          />
          {/* Left Arrow */}
          <button
            onClick={prevImage}
            className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-600 transition-colors"
          >
            &#8592;
          </button>
          {/* Right Arrow */}
          <button
            onClick={nextImage}
            className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-600 transition-colors"
          >
            &#8594;
          </button>
        </div>

        {/* Right Side: Product Details */}
        <div className="ml-0 lg:ml-[40px] flex flex-col items-center lg:items-start justify-between">
          <p className="text-xl text-gray-800 mb-[20px] text-center lg:text-left">
            Our Men's Sportswear Collection is designed to elevate your fitness routine, <br />
            whether you're training in the gym, playing outdoor sports, or enjoying casual <br /> activities. <br />
            Crafted with performance-enhancing fabrics and cutting-edge design, our <br /> sportswear combines
            comfort, durability, and style.
          </p>
          <p className="text-lg text-gray-700 font-bold mb-[20px]">
          ₦{firstPage[currentImageIndex].price} {/* Display the price of the current image's product */}
          </p>
          <button className="bg-gray-800 text-white p-3 rounded-full hover:bg-gray-600 transition-colors">Add to Cart</button>
        </div>
      </div>
    </div>
  );
}

export default FirstPage;





