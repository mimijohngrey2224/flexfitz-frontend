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
                    <p style={{ fontSize: '1rem', color: '#666' }}>₦{product.price}</p>
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


