import React from "react";
import Charger from "../../assets/images/png/Chargers.jpg";

const Products = () => {
  const products = [
    {
      id: 1,
      image:
        "https://m.media-amazon.com/images/I/71T7ZQKmmBL._AC_UY327_FMwebp_QL65_.jpg",
      title: "Laptop",
      description:
        "High-performance laptops for work, gaming, and everyday use.",
    },
    {
      id: 2,
      image:
        "https://m.media-amazon.com/images/I/81CQZB2t52L._AC_UY327_FMwebp_QL65_.jpg",
      title: "Mobile Phone",
      description:
        "Latest smartphones with powerful processors and great cameras.",
    },
    {
      id: 3,
      image:
        "https://m.media-amazon.com/images/I/51CnDMbXZzL._AC_UY327_FMwebp_QL65_.jpg",
      title: "Headphones",
      description:
        "Noise-cancelling headphones for music, gaming, and calls.",
    },
    {
      id: 4,
      image:
        "https://m.media-amazon.com/images/I/51oZHMpbmxL._AC_UY327_FMwebp_QL65_.jpg",
      title: "Charger",
      description: "Fast charging adapters and cables for all devices.",
    },
    {
      id: 5,
      image:
        "https://m.media-amazon.com/images/I/61akt30bJsL._AC_UY327_FMwebp_QL65_.jpg",
      title: "Smartwatch",
      description:
        "Track your fitness and stay connected with modern smartwatches.",
    },
    {
      id: 6,
      image:
        "https://m.media-amazon.com/images/I/61bpFmbi99L._AC_UY327_FMwebp_QL65_.jpg",
      title: "Camera",
      description:
        "Capture stunning photos and videos with high-quality cameras.",
    },
  ];

  return (
    <section>
      <div className="container lg:py-[120px] py-[80px]">
        {/* Heading */}
        <h3 className="font-poppins lg:text-[44px] text-[38px] font-bold text-center pb-3">
          Top Products
        </h3>

        {/* Subheading */}
        <p className="text-center text-gray-600 font-poppins max-w-2xl mx-auto pb-[48px]">
          Explore our collection of top-rated products carefully selected for
          performance, design, and everyday usability. Each product is crafted
          to meet your modern lifestyle.
        </p>

        {/* Products Grid */}
        <div className="flex flex-row flex-wrap mx-[-12px]">
          {products.map((product) => (
            <div
              key={product.id}
              className="md:w-4/12 sm:w-6/12 w-full px-3 pt-6"
            >
              <div className="relative group border p-3 rounded-lg overflow-hidden shadow-card hover:shadow-cardhover">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-48 object-contain"
                />

                <h2 className="text-lg font-semibold mt-2 px-2 text-center font-poppins">
                  {product.title}
                </h2>

                {/* Hover Layer */}
                {/* <div className="absolute inset-0 bg-black bg-opacity-90 flex flex-col items-center justify-center text-white opacity-0 group-hover:opacity-100  transition duration-300"> */}
                <div className="absolute  group-hover:bottom-0 duration-300 ease-linear   w-full h-full bottom-[-100%] left-0 flex items-center justify-center flex-col bg-black bg-opacity-90 z-0">
                  <h2 className="text-xl font-poppins font-bold mb-2 text-white">
                    {product.title}
                  </h2>
                  <p className="text-sm px-4 font-poppins text-center text-white">
                    {product.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>      
      </div>
    </section>
  );
};

export default Products;
