// components/ShoppingCart.js
import React from 'react';

const ShoppingCart = ({
  cart,
  totalPrice,
  finalPrice,
  discount,
  removeFromCart,
  updateQuantity,
  setCoupon,
  applyCoupon,
}) => {
  return (
    <div className="mt-4">
      <ul className="list-disc pl-5">
        {cart.map((item, index) => (
          <li key={index} className="mb-2">
            {item.name} - ${item.price} x {item.quantity}
            <button
              onClick={() => removeFromCart(item.id)}
              className="ml-4 text-red-500 hover:text-red-700"
            >
              Remove
            </button>
            <input
              type="number"
              value={item.quantity}
              onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
              className="ml-4 border rounded p-1 w-16"
            />
          </li>
        ))}
      </ul>

      <div className="mt-4">
        <label htmlFor="coupon" className="block mb-2">
          รหัสคูปอง :
        </label>
        <input
          type="text"
          id="coupon"
          onChange={(e) => setCoupon(e.target.value)}
          className="border rounded p-2"
        />
        <button onClick={applyCoupon} className="ml-2 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700">
         ตกลง
        </button>
      </div>

      <p className="font-bold mt-4">ราคารวม: ฿{totalPrice}</p>
      <p className="font-bold">ส่วนลด: -฿{discount < 1 ? totalPrice * discount : discount}</p>
      <p className="font-bold">การจัดส่ง: +฿100</p>
      <p className="font-bold text-xl">ทั้งหมด: ฿{finalPrice}</p>
    </div>
  );
};

export default ShoppingCart;
