// components/ProductList.js
import React from 'react';

const ProductList = ({ products, addToCart }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
      {products.map((product) => (
        <div key={product.id} className="border p-4 rounded-lg shadow">
          <img src={product.image} className="w-32 h-32 object-cover mb-4 rounded" />
          <h3 className="text-lg font-bold">{product.name}</h3>
          <p className="text-gray-600">ราคา: ฿{product.price}</p>
          <button
            onClick={() => addToCart(product)}
            className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            เพิ่มลงในรถเข็น
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
