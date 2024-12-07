import React from "react";

const ProductCardSkeleton: React.FC = () => {
  return (
    <div className="relative border border-gray-200 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow bg-white font-roboto animate-pulse">
      {/* Skeleton Image Section */}
      <div className="relative w-full h-48 bg-gray-200"></div>

      {/* Skeleton Product Details */}
      <div className="p-4">
        <div className="h-4 bg-gray-200 rounded-md mb-2 w-3/4"></div>
        <div className="h-3 bg-gray-200 rounded-md mb-4 w-1/2"></div>
        <div className="h-5 bg-gray-200 rounded-md w-1/4"></div>
      </div>

      {/* Skeleton Button Section */}
      <div className="w-full p-4">
        <div className="h-10 bg-gray-200 rounded-md"></div>
      </div>
    </div>
  );
};

export default ProductCardSkeleton;
