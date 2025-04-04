// import shoeV from "/shoeV.mp4"
// import sneakerMS from "/sneakerMS.jpg"
// import sneaker1w from "/sneaker1w.jpg"
// import sneakerNN from "/sneakerNN.jpg"
// import sneakeraL from "/sneakeraL.jpg"
// import sneakerW from "/sneakerW.jpg" 
// import sneakerG from "/sneakerG.jpg"

// function ThirdPage() {
//   return (
//     <div>
//         <div>
//             <h1>Men’s Sneakers – Stylish, Comfortable, and Versatile Footwear</h1>
//         </div>
//         <div className="flex">
//             <video src={shoeV} controls width="700px" height="600px"></video>
//             <p>Step up your footwear game with our collection of men’s sneakers, designed to provide <br /> both style and functionality. Whether you're heading to the gym, going for a casual walk, <br /> or out on the town, these sneakers offer the perfect combination of comfort, support, and <br /> modern design. <br />
//             Crafted with high-quality materials like breathable mesh, durable rubber soles, <br /> and cushioned insoles, these sneakers are built for all-day wear. The lightweight <br /> construction ensures your feet stay comfortable no matter where the day takes you.</p>
//         </div>
//         <div>
//           <div>
//           <img src={sneakerMS} alt="" />
//           <p>name</p>
//           <p>500</p>
//           <buttonc className="bg-gray-800 text-white p-3 rounded-full hover:bg-gray-600 transition-colors">Add to cart</buttonc>
//           </div>
//           <div>
//           <img src={sneaker1w} alt="" />
//           <p>name</p>
//           <p>500</p>
//           <button className="bg-gray-800 text-white p-3 rounded-full hover:bg-gray-600 transition-colors">Add to cart</button>
//           </div>
//           <div>
//           <img src={sneakerNN} alt="" />
//           <p>name</p>
//           <p>500</p>
//           <button  className="bg-gray-800 text-white p-3 rounded-full hover:bg-gray-600 transition-colors">Add to cart</button>
//           </div>
//           <div>
//           <img src={sneakeraL} alt="" />
//           <p>name</p>
//           <p>500</p>
//           <button  className="bg-gray-800 text-white p-3 rounded-full hover:bg-gray-600 transition-colors">Add to cart</button>
//           </div>
//           <div>
//           <img src={sneakerW} alt="" />
//           <p>name</p>
//           <p>500</p>
//           <button  className="bg-gray-800 text-white p-3 rounded-full hover:bg-gray-600 transition-colors">Add to cart</button>
//           </div>
//           <div>
//           <img src={sneakerG} alt="" />
//           <p>name</p>
//           <p>500</p>
//           <button  className="bg-gray-800 text-white p-3 rounded-full hover:bg-gray-600 transition-colors">Add to cart</button>
//           </div>
//         </div>
//     </div>
//   )
// }

// export default ThirdPage





// import shoeV from "/shoeV.mp4";
// import sneakerMS from "/sneakerMS.jpg";
// import sneaker1w from "/sneaker1w.jpg";
// import sneakerNN from "/sneakerNN.jpg";
// import sneakeraL from "/sneakeraL.jpg";
// import sneakerW from "/sneakerW.jpg";
// import sneakerG from "/sneakerG.jpg";

// function ThirdPage() {
//   return (
//     <div style={{ padding: '30px', fontFamily: 'Arial, sans-serif' }}>
//         {/* Header Section */}
//         <div style={{ textAlign: 'center', marginBottom: '40px' }}>
//             <h1 style={{ fontSize: '2.5rem', color: '#333', margin: '0' }}>
//                 Men’s Sneakers – Stylish, Comfortable, and Versatile Footwear
//             </h1>
//         </div>

//         {/* Video and Description Section */}
//         <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', marginBottom: '40px' }}>
//             <video
//                 src={shoeV}
//                 controls
//                 style={{ maxWidth: '700px', width: '100%', height: 'auto', borderRadius: '8px', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)' }}
//             />
//             <p style={{ maxWidth: '600px', marginLeft: '20px', fontSize: '1.1rem', color: '#666', lineHeight: '1.6', paddingTop: '10px' }}>
//                 Step up your footwear game with our collection of men’s sneakers, designed to provide both style and functionality. Whether you're heading to the gym, going for a casual walk, or out on the town, these sneakers offer the perfect combination of comfort, support, and modern design. Crafted with high-quality materials like breathable mesh, durable rubber soles, and cushioned insoles, these sneakers are built for all-day wear. The lightweight construction ensures your feet stay comfortable no matter where the day takes you.
//             </p>
//         </div>

//         {/* Sneaker Products Section */}
//         <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '30px', marginTop: '20px' }}>
//             {/* Sneaker 1 */}
//             <div style={{ textAlign: 'center' }}>
//                 <img src={sneakerMS} alt="Sneaker 1" style={{ width: '100%', height: 'auto', borderRadius: '8px', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)' }} />
//                 <p style={{ fontSize: '1.2rem', margin: '10px 0 5px', color: '#333' }}>Sneaker Name 1</p>
//                 <p style={{ fontSize: '1rem', color: '#666' }}>$500</p>
//                 <button style={{ backgroundColor: '#333', color: '#fff', padding: '12px 24px', borderRadius: '50px', border: 'none', cursor: 'pointer', transition: 'background-color 0.3s' }}
//                         onMouseOver={e => e.target.style.backgroundColor = '#555'}
//                         onMouseOut={e => e.target.style.backgroundColor = '#333'}>
//                     Add to Cart
//                 </button>
//             </div>

//             {/* Sneaker 2 */}
//             <div style={{ textAlign: 'center' }}>
//                 <img src={sneaker1w} alt="Sneaker 2" style={{ width: '100%', height: 'auto', borderRadius: '8px', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)' }} />
//                 <p style={{ fontSize: '1.2rem', margin: '10px 0 5px', color: '#333' }}>Sneaker Name 2</p>
//                 <p style={{ fontSize: '1rem', color: '#666' }}>$500</p>
//                 <button style={{ backgroundColor: '#333', color: '#fff', padding: '12px 24px', borderRadius: '50px', border: 'none', cursor: 'pointer', transition: 'background-color 0.3s' }}
//                         onMouseOver={e => e.target.style.backgroundColor = '#555'}
//                         onMouseOut={e => e.target.style.backgroundColor = '#333'}>
//                     Add to Cart
//                 </button>
//             </div>

//             {/* Sneaker 3 */}
//             <div style={{ textAlign: 'center' }}>
//                 <img src={sneakerNN} alt="Sneaker 3" style={{ width: '100%', height: 'auto', borderRadius: '8px', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)' }} />
//                 <p style={{ fontSize: '1.2rem', margin: '10px 0 5px', color: '#333' }}>Sneaker Name 3</p>
//                 <p style={{ fontSize: '1rem', color: '#666' }}>$500</p>
//                 <button style={{ backgroundColor: '#333', color: '#fff', padding: '12px 24px', borderRadius: '50px', border: 'none', cursor: 'pointer', transition: 'background-color 0.3s' }}
//                         onMouseOver={e => e.target.style.backgroundColor = '#555'}
//                         onMouseOut={e => e.target.style.backgroundColor = '#333'}>
//                     Add to Cart
//                 </button>
//             </div>

//             {/* Sneaker 4 */}
//             <div style={{ textAlign: 'center' }}>
//                 <img src={sneakeraL} alt="Sneaker 4" style={{ width: '100%', height: 'auto', borderRadius: '8px', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)' }} />
//                 <p style={{ fontSize: '1.2rem', margin: '10px 0 5px', color: '#333' }}>Sneaker Name 4</p>
//                 <p style={{ fontSize: '1rem', color: '#666' }}>$500</p>
//                 <button style={{ backgroundColor: '#333', color: '#fff', padding: '12px 24px', borderRadius: '50px', border: 'none', cursor: 'pointer', transition: 'background-color 0.3s' }}
//                         onMouseOver={e => e.target.style.backgroundColor = '#555'}
//                         onMouseOut={e => e.target.style.backgroundColor = '#333'}>
//                     Add to Cart
//                 </button>
//             </div>

//             {/* Sneaker 5 */}
//             <div style={{ textAlign: 'center' }}>
//                 <img src={sneakerW} alt="Sneaker 5" style={{ width: '100%', height: 'auto', borderRadius: '8px', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)' }} />
//                 <p style={{ fontSize: '1.2rem', margin: '10px 0 5px', color: '#333' }}>Sneaker Name 5</p>
//                 <p style={{ fontSize: '1rem', color: '#666' }}>$500</p>
//                 <button style={{ backgroundColor: '#333', color: '#fff', padding: '12px 24px', borderRadius: '50px', border: 'none', cursor: 'pointer', transition: 'background-color 0.3s' }}
//                         onMouseOver={e => e.target.style.backgroundColor = '#555'}
//                         onMouseOut={e => e.target.style.backgroundColor = '#333'}>
//                     Add to Cart
//                 </button>
//             </div>

//             {/* Sneaker 6 */}
//             <div style={{ textAlign: 'center' }}>
//                 <img src={sneakerG} alt="Sneaker 6" style={{ width: '100%', height: 'auto', borderRadius: '8px', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)' }} />
//                 <p style={{ fontSize: '1.2rem', margin: '10px 0 5px', color: '#333' }}>Sneaker Name 6</p>
//                 <p style={{ fontSize: '1rem', color: '#666' }}>$500</p>
//                 <button style={{ backgroundColor: '#333', color: '#fff', padding: '12px 24px', borderRadius: '50px', border: 'none', cursor: 'pointer', transition: 'background-color 0.3s' }}
//                         onMouseOver={e => e.target.style.backgroundColor = '#555'}
//                         onMouseOut={e => e.target.style.backgroundColor = '#333'}>
//                     Add to Cart
//                 </button>
//             </div>
//         </div>
//     </div>
//   );
// }

// export default ThirdPage;




// import shoeV from "/shoeV.mp4";
// import sneakerMS from "/sneakerMS.jpg";
// import sneaker1w from "/sneaker1w.jpg";
// import sneakerNN from "/sneakerNN.jpg";
// import sneakeraL from "/sneakeraL.jpg";
// import sneakerW from "/sneakerW.jpg";
// import sneakerG from "/sneakerG.jpg";

// function ThirdPage() {
//   return (
//     <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
//         {/* Header */}
//         <div style={{ textAlign: 'center', marginBottom: '20px' }}>
//             <h1 style={{ fontSize: '2.5rem', color: '#333', margin: '0' }}>
//                 Men’s Sneakers – Stylish, Comfortable, and Versatile Footwear
//             </h1>
//         </div>

//         {/* Video and Description Section */}
//         <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', marginBottom: '40px' }}>
//             <video
//                 src={shoeV}
//                 controls
//                 style={{ maxWidth: '700px', width: '100%', height: 'auto', borderRadius: '8px' }}
//             />
//             <p style={{ maxWidth: '600px', marginLeft: '20px', fontSize: '1.1rem', color: '#666', lineHeight: '1.6', paddingTop: '10px' }}>
//                 Step up your footwear game with our collection of men’s sneakers, designed to provide
//                 both style and functionality. Whether you're heading to the gym, going for a casual walk,
//                 or out on the town, these sneakers offer the perfect combination of comfort, support, and
//                 modern design. Crafted with high-quality materials like breathable mesh, durable rubber soles,
//                 and cushioned insoles, these sneakers are built for all-day wear. The lightweight
//                 construction ensures your feet stay comfortable no matter where the day takes you.
//             </p>
//         </div>

//         {/* Sneaker Images Section */}
//         <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '15px', marginTop: '20px' }}>
//             <img
//                 src={sneakerMS}
//                 alt="Sneaker 1"
//                 style={{ width: '100%', height: 'auto', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', transition: 'transform 0.3s ease-in-out' }}
//             />
//             <img
//                 src={sneaker1w}
//                 alt="Sneaker 2"
//                 style={{ width: '100%', height: 'auto', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', transition: 'transform 0.3s ease-in-out' }}
//             />
//             <img
//                 src={sneakerNN}
//                 alt="Sneaker 3"
//                 style={{ width: '100%', height: 'auto', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', transition: 'transform 0.3s ease-in-out' }}
//             />
//             <img
//                 src={sneakeraL}
//                 alt="Sneaker 4"
//                 style={{ width: '100%', height: 'auto', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', transition: 'transform 0.3s ease-in-out' }}
//             />
//             <img
//                 src={sneakerW}
//                 alt="Sneaker 5"
//                 style={{ width: '100%', height: 'auto', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', transition: 'transform 0.3s ease-in-out' }}
//             />
//             <img
//                 src={sneakerG}
//                 alt="Sneaker 6"
//                 style={{ width: '100%', height: 'auto', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', transition: 'transform 0.3s ease-in-out' }}
//             />
//         </div>
//     </div>
//   );
// }

// export default ThirdPage;




// import shoeV from "/shoeV.mp4";
// import sneakerMS from "/sneakerMS.jpg";
// import sneaker1w from "/sneaker1w.jpg";
// import sneakerNN from "/sneakerNN.jpg";
// import sneakeraL from "/sneakeraL.jpg";
// import sneakerW from "/sneakerW.jpg";
// import sneakerG from "/sneakerG.jpg";

// function ThirdPage() {
//   return (
//     <div style={{ padding: '30px', fontFamily: 'Arial, sans-serif' }}>
//         {/* Header Section */}
//         <div style={{ textAlign: 'center', marginBottom: '40px' }}>
//             <h1 style={{ fontSize: '2.5rem', color: '#333', margin: '0' }}>
//                 Men’s Sneakers – Stylish, Comfortable, and Versatile Footwear
//             </h1>
//         </div>

//         {/* Video and Description Section */}
//         <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', marginBottom: '40px' }}>
//             <video
//                 src={shoeV}
//                 controls
//                 style={{ maxWidth: '700px', width: '100%', height: 'auto', borderRadius: '8px', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)' }}
//             />
//             <p style={{ maxWidth: '600px', marginLeft: '20px', fontSize: '1.1rem', color: '#666', lineHeight: '1.6', paddingTop: '10px' }}>
//                 Step up your footwear game with our collection of men’s sneakers, designed to provide both style and functionality. Whether you're heading to the gym, going for a casual walk, or out on the town, these sneakers offer the perfect combination of comfort, support, and modern design. Crafted with high-quality materials like breathable mesh, durable rubber soles, and cushioned insoles, these sneakers are built for all-day wear. The lightweight construction ensures your feet stay comfortable no matter where the day takes you.
//             </p>
//         </div>

//         {/* Sneaker Products Section */}
//         <div style={{ 
//             display: 'grid', 
//             gridTemplateColumns: 'repeat(3, 1fr)',  // 3 items per row
//             gap: '30px', 
//             marginTop: '20px' 
//         }}>
//             {/* Sneaker 1 */}
//             <div style={{ textAlign: 'center' }}>
//                 <img src={sneakerMS} alt="Sneaker 1" style={{ width: '100%', height: 'auto', borderRadius: '8px', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)' }} />
//                 <p style={{ fontSize: '1.2rem', margin: '10px 0 5px', color: '#333' }}>Sneaker Name 1</p>
//                 <p style={{ fontSize: '1rem', color: '#666' }}>$500</p>
//                 <button style={{ backgroundColor: '#333', color: '#fff', padding: '12px 24px', borderRadius: '50px', border: 'none', cursor: 'pointer', transition: 'background-color 0.3s' }}
//                         onMouseOver={e => e.target.style.backgroundColor = '#555'}
//                         onMouseOut={e => e.target.style.backgroundColor = '#333'}>
//                     Add to Cart
//                 </button>
//             </div>

//             {/* Sneaker 2 */}
//             <div style={{ textAlign: 'center' }}>
//                 <img src={sneaker1w} alt="Sneaker 2" style={{ width: '100%', height: 'auto', borderRadius: '8px', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)' }} />
//                 <p style={{ fontSize: '1.2rem', margin: '10px 0 5px', color: '#333' }}>Sneaker Name 2</p>
//                 <p style={{ fontSize: '1rem', color: '#666' }}>$500</p>
//                 <button style={{ backgroundColor: '#333', color: '#fff', padding: '12px 24px', borderRadius: '50px', border: 'none', cursor: 'pointer', transition: 'background-color 0.3s' }}
//                         onMouseOver={e => e.target.style.backgroundColor = '#555'}
//                         onMouseOut={e => e.target.style.backgroundColor = '#333'}>
//                     Add to Cart
//                 </button>
//             </div>

//             {/* Sneaker 3 */}
//             <div style={{ textAlign: 'center' }}>
//                 <img src={sneakerNN} alt="Sneaker 3" style={{ width: '100%', height: 'auto', borderRadius: '8px', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)' }} />
//                 <p style={{ fontSize: '1.2rem', margin: '10px 0 5px', color: '#333' }}>Sneaker Name 3</p>
//                 <p style={{ fontSize: '1rem', color: '#666' }}>$500</p>
//                 <button style={{ backgroundColor: '#333', color: '#fff', padding: '12px 24px', borderRadius: '50px', border: 'none', cursor: 'pointer', transition: 'background-color 0.3s' }}
//                         onMouseOver={e => e.target.style.backgroundColor = '#555'}
//                         onMouseOut={e => e.target.style.backgroundColor = '#333'}>
//                     Add to Cart
//                 </button>
//             </div>

//             {/* Sneaker 4 */}
//             <div style={{ textAlign: 'center' }}>
//                 <img src={sneakeraL} alt="Sneaker 4" style={{ width: '100%', height: 'auto', borderRadius: '8px', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)' }} />
//                 <p style={{ fontSize: '1.2rem', margin: '10px 0 5px', color: '#333' }}>Sneaker Name 4</p>
//                 <p style={{ fontSize: '1rem', color: '#666' }}>$500</p>
//                 <button style={{ backgroundColor: '#333', color: '#fff', padding: '12px 24px', borderRadius: '50px', border: 'none', cursor: 'pointer', transition: 'background-color 0.3s' }}
//                         onMouseOver={e => e.target.style.backgroundColor = '#555'}
//                         onMouseOut={e => e.target.style.backgroundColor = '#333'}>
//                     Add to Cart
//                 </button>
//             </div>

//             {/* Sneaker 5 */}
//             <div style={{ textAlign: 'center' }}>
//                 <img src={sneakerW} alt="Sneaker 5" style={{ width: '100%', height: 'auto', borderRadius: '8px', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)' }} />
//                 <p style={{ fontSize: '1.2rem', margin: '10px 0 5px', color: '#333' }}>Sneaker Name 5</p>
//                 <p style={{ fontSize: '1rem', color: '#666' }}>$500</p>
//                 <button style={{ backgroundColor: '#333', color: '#fff', padding: '12px 24px', borderRadius: '50px', border: 'none', cursor: 'pointer', transition: 'background-color 0.3s' }}
//                         onMouseOver={e => e.target.style.backgroundColor = '#555'}
//                         onMouseOut={e => e.target.style.backgroundColor = '#333'}>
//                     Add to Cart
//                 </button>
//             </div>

//             {/* Sneaker 6 */}
//             <div style={{ textAlign: 'center' }}>
//                 <img src={sneakerG} alt="Sneaker 6" style={{ width: '100%', height: 'auto', borderRadius: '8px', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)' }} />
//                 <p style={{ fontSize: '1.2rem', margin: '10px 0 5px', color: '#333' }}>Sneaker Name 6</p>
//                 <p style={{ fontSize: '1rem', color: '#666' }}>$500</p>
//                 <button style={{ backgroundColor: '#333', color: '#fff', padding: '12px 24px', borderRadius: '50px', border: 'none', cursor: 'pointer', transition: 'background-color 0.3s' }}
//                         onMouseOver={e => e.target.style.backgroundColor = '#555'}
//                         onMouseOut={e => e.target.style.backgroundColor = '#333'}>
//                     Add to Cart
//                 </button>
//             </div>
//         </div>
//     </div>
//   );
// }

// export default ThirdPage;


// import { useState } from "react";
// import { thirdPage } from "./ecomdata"; // Import the thirdPage data from ecomdata

function ThirdPage({thirdPage}) {
  return (
    <div style={{ padding: '30px', fontFamily: 'Arial, sans-serif' }}>
        {/* Header Section */}
        <div style={{ textAlign: 'center', marginBottom: '40px'}}>
            <h1 style={{ fontSize: '2.5rem', color: '#333', margin: '0' }}>
                Men’s Sneakers – Stylish, Comfortable, and Versatile Footwear
            </h1>
        </div>

        {/* Video and Description Section */}
        <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', marginBottom: '40px' }}>
            {/* Check if the item is a video */}
            {thirdPage.find(item => item.name === "Video") && (
              <video
                src={thirdPage.find(item => item.name === "Video").video}
                controls
                style={{ maxWidth: '700px', width: '100%', height: 'auto', borderRadius: '8px', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)' }}
              />
            )}
            <p style={{ maxWidth: '600px', marginLeft: '20px', fontSize: '1.1rem', color: '#666', lineHeight: '1.6', paddingTop: '10px' }}>
                Step up your footwear game with our collection of men’s sneakers, designed to provide both style and functionality. Whether you're heading to the gym, going for a casual walk, or out on the town, these sneakers offer the perfect combination of comfort, support, and modern design. Crafted with high-quality materials like breathable mesh, durable rubber soles, and cushioned insoles, these sneakers are built for all-day wear. The lightweight construction ensures your feet stay comfortable no matter where the day takes you.
            </p>
        </div>

        {/* Sneaker Products Section */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '30px', marginTop: '20px' }}>
            {thirdPage.map((product) => 
              product.img ? ( // Only map through products that have an img (not the video item)
                <div key={product.id} style={{ textAlign: 'center' }}>
                    <img src={product.img} alt={product.name} style={{ width: '100%', height: 'auto', borderRadius: '8px', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)' }} />
                    <p style={{ fontSize: '1.2rem', margin: '10px 0 5px', color: '#333' }}>{product.name}</p>
                    <p style={{ fontSize: '1rem', color: '#666' }}>{product.price}</p>
                    <button style={{ backgroundColor: '#333', color: '#fff', padding: '12px 24px', borderRadius: '50px', border: 'none', cursor: 'pointer', transition: 'background-color 0.3s' }}
                            onMouseOver={e => e.target.style.backgroundColor = '#555'}
                            onMouseOut={e => e.target.style.backgroundColor = '#333'}>
                        Add to Cart
                    </button>
                </div>
              ) : null // Don't render the video item in the grid
            )}
        </div>
    </div>
  );
}

export default ThirdPage;


