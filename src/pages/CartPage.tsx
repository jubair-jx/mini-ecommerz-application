import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "sonner";
import Button from "../components/ui/Button";
import { removeFromCart, updateQuantity } from "../redux/slices/cartSlice";
import { RootState } from "../redux/store";

const CartPage: React.FC = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const dispatch = useDispatch();

  const handleRemove = (id: number) => {
    dispatch(removeFromCart(id));
    toast.warning("You removed the product from the cart", {
      duration: 1500,
    });
  };

  const handleQuantityChange = (id: number, quantity: number) => {
    if (quantity >= 1) {
      dispatch(updateQuantity({ id, quantity }));
    }
  };

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="container mx-auto p-4 font-roboto">
      <div className="flex justify-between items-center my-4">
        <h1 className="sm:text-2xl text-xl font-bold mb-4">Your Cart</h1>
        <div className="mt-4">
          <h2 className="sm:text-xl text-lg font-bold">
            Total:{" "}
            <span className="text-green-600">${totalPrice.toFixed(2)}</span>
          </h2>
        </div>
      </div>

      {cartItems.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto text-left border-collapse border border-gray-200">
            <thead className="bg-gray-100">
              <tr>
                <th className="border border-gray-200 px-4 py-2">Image</th>
                <th className="border border-gray-200 px-4 py-2">
                  Product Name
                </th>
                <th className="border border-gray-200 px-4 py-2">Price</th>
                <th className="border border-gray-200 px-4 py-2">Quantity</th>
                <th className="border border-gray-200 px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <tr key={item.id} className="hover:bg-gray-50">
                  <td className="border border-gray-200 px-4 py-2 mx-auto">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded mx-auto"
                    />
                  </td>
                  <td className="border border-gray-200 px-4 py-2 text-sm sm:text-base">
                    {item.name}
                  </td>
                  <td className="border border-gray-200 px-4 py-2 text-sm sm:text-base">
                    ${item.price}
                  </td>
                  <td className="border border-gray-200 px-4 py-2">
                    <input
                      type="number"
                      value={item.quantity}
                      min="1"
                      onChange={(e) =>
                        handleQuantityChange(item.id, Number(e.target.value))
                      }
                      className="w-16 text-center border border-gray-300 rounded"
                    />
                  </td>
                  <td className="border border-gray-200 px-4 py-2">
                    <button
                      onClick={() => handleRemove(item.id)}
                      className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="text-gray-600 font-roboto">Your cart is empty.</p>
      )}

      {/* Mobile View: Cart Summary */}
      <div className="mt-8 font-roboto">
        <div className="bg-gray-100 p-4 rounded-lg shadow-md">
          <h3 className="text-xl font-bold mb-2">Summary</h3>
          <div className="flex justify-between items-center mb-2">
            <span className="font-semibold">Total Price:</span>
            <span className="text-green-600">${totalPrice.toFixed(2)}</span>
          </div>
          <div className="flex justify-between items-center mb-2">
            <span className="font-semibold">Discount:</span>
            <span className="text-red-600">-$0.00</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="font-semibold">Final Total:</span>
            <span className="text-green-700 text-xl font-semibold">
              ${totalPrice.toFixed(2)}
            </span>
          </div>

          <div className="mt-4 flex justify-center">
            {cartItems.length > 0 && (
              <Button
                onClick={() => toast.warning("The feature is coming soon...")}
                className="p-1"
              >
                Checkout Now
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
