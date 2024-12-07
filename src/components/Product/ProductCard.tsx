import React from "react";

interface ProductCardProps {
  id: number;
  name: string;
  price: number; // Price is included in the props and displayed in the UI
  image: string;
  onAddToCart: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({
  name,
  price,
  image,
  onAddToCart,
}) => {
  return (
    <div className="relative border border-gray-200 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow bg-white font-roboto">
      {/* Image Section */}
      <div className="relative w-full h-48">
        <img
          src={image}
          alt={name}
          className="absolute inset-0 w-full h-full object-cover p-2 rounded-xl"
        />
        <span className="absolute top-4 right-4 bg-green-100 text-green-600 text-xs font-semibold px-2 py-1 rounded-md shadow-sm">
          New
        </span>
      </div>

      {/* Product Details */}
      <div className="p-4">
        <h3 className="text-md font-bold text-gray-800 capitalize truncate">
          {name}
        </h3>
        <p className="text-gray-600 text-sm mt-1">
          Premium quality product just for you
        </p>
        <p className="mt-2 sm:text-xl text-lg font-semibold text-blue-600">
          <span className=" text-gray-700">Price:</span> ${price}
        </p>{" "}
        {/* Price is added back */}
      </div>

      {/* Button Section */}
      <div className=" w-full p-4">
        <button
          onClick={onAddToCart}
          className="w-full py-2 text-white bg-violet-800 rounded-md font-medium shadow-sm hover:bg-violet-700 transition"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
