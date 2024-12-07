/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RootState } from "../../redux/store";

const Header: React.FC = () => {
  const cartCount = useSelector((state: RootState) =>
    state.cart.items.reduce(
      (total: number, item: any) => total + item.quantity,
      0
    )
  );

  return (
    <header className="bg-gray-800 text-white sticky top-0 z-50 shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4">
        <Link to="/" className="text-2xl font-bold">
          Mini E-Commerce
        </Link>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link to="/" className="hover:underline">
                Products
              </Link>
            </li>
            <li>
              <Link to="/cart" className="relative hover:underline">
                Cart
                {cartCount > 0 && (
                  <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full px-2">
                    {cartCount}
                  </span>
                )}
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
