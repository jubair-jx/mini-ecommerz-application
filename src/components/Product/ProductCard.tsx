import React from "react";

interface ProductCardProps {
  id: number;
  name: string;
  price: number;
  image: string;
  onAddToCart: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({
  name,
  price,
  image,
  onAddToCart,
}) => (
  <div className="border p-4 rounded-lg shadow-md">
    <img src={image} alt={name} className="w-full h-48 object-cover" />
    <h3 className="text-lg font-semibold mt-2">{name}</h3>
    <p className="text-green-500 font-bold">${price}</p>
    <button
      onClick={onAddToCart}
      className="mt-2 bg-blue-500 text-white py-1 px-4 rounded"
    >
      Add to Cart
    </button>
  </div>
);

export default ProductCard;
