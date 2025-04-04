// import { secondPage } from './ecomdata';  // Import the secondPage data

function SecondPage({secondPage}) {
  return (
    <div className="py-10 px-6">
      {/* Heading Section */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800">
          Women’s Sportswear Catalog – Activewear for Every Move, Every Day
        </h1>
      </div>

      {/* Product Section with Flexbox Layout */}
      <div className="flex flex-wrap justify-between gap-8">
        {secondPage.map((product) => (
          <div
            key={product.id}
            className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg w-full sm:w-[30%] transition-transform transform hover:scale-105 hover:shadow-2xl"
          >
            <img
              src={product.img}
              alt={product.name}
              className="w-full h-auto rounded-lg mb-4"
            />
            <h2 className="text-xl font-semibold text-gray-800 text-center mb-2">
              {product.name}
            </h2>
            <p className="text-gray-600 text-center mb-4">
              {/* Ternary Description based on the name of the product */}
              {product.name === "Women's Sports Jumpsuit"
                ? "Elevate your active wardrobe with our Women's Sports Jumpsuit, designed for both performance and style."
                : product.name === "Women's Yoga Leggings"
                ? "Enhance your practice with our Women's Yoga Leggings, providing comfort, flexibility, and durability."
                : product.name === "Women's Two-Piece Shorts Sportswear"
                ? "Our Women's Two-Piece Shorts Sportswear Set is the ultimate combination of style, comfort, and functionality."
                : product.name === "Two-Piece Jogger Sportswear"
                ? "Our Two-Piece Jogger Sportswear for Women blends modern design with comfort and durability. The top is crafted with breathable, moisture-wicking fabric to keep you cool and dry during your workouts, while the jogger pants feature a tapered fit and an elastic waistband for added flexibility and support."
                 : product.name === "Two-Piece Red Tube Top & Long Pant Trouser Set – Effortless Style & Comfort."
                ? "Elevate your fashion game with our stunning Two-Piece Red Tube Top and Long Pant Trouser Set. Designed for the modern woman who loves to make a statement, this chic ensemble combines a flattering tube top with a sleek, high-waisted pant."
                : "This product is designed for comfort and performance, perfect for all your active lifestyle needs."}
            </p>

            <p className="text-lg text-gray-700 font-bold mb-4">₦{product.price}</p>
            <button className="bg-gray-800 text-white p-3 rounded-full hover:bg-gray-600 transition-colors">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SecondPage;
