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
      <div className="container mx-auto flex justify-between items-center p-4 font-roboto">
        <Link
          to="/"
          className="sm:text-2xl text-sm font-bold flex items-center justify-between sm:gap-4 gap-2"
        >
          <img src="/public/shopping.png" className="sm:h-10 sm:w-10 h-6 w-6" />
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
                  <span className="absolute -top-4 -right-2 bg-violet-500 text-white text-xs rounded-full px-2">
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
