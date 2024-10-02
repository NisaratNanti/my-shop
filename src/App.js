// App.js
import React, { useState } from 'react';
import ProductList from './components/ProductList';
import ShoppingCart from './components/ShoppingCart';

function App() {
  
  const products = [
    { id: 1, name:  'EZwear เสื้อสายเดี่ยวครึ่งตัว กราฟฟิค ฟิกเกอร์', price: 200, image: '1.jpg', },
    { id: 2, name:  'ICON เสื้อแขนสั้นลำลองพิมพ์ลายบล็อกสีสตรี ฤดูร้อน', price: 250, image: '2.jpg' },
    { id: 3, name:  'Fairycore เสื้อยืดสตรี แบบกระชับรัดตัว ปริ้นลายผีเสื้อ', price: 300, image: '3.jpg' },
    { id: 4, name:  'ROMWE PUNK เสื้อครอปท็อป กรันจ์ พิมพ์ลาย', price: 350, image: '4.jpg' },
    { id: 5, name:  'ROMWE Hippie วินเทจลายดอกไม้ Flocked Tie-Dye ', price: 400, image: '5.jpg' },
    { id: 6, name:  'ROMWE Grunge Punk เสื้อยืดผู้หญิงคอเบี้ยวและขับรูด ', price: 450, image: '6.jpg'},
    { id: 7, name:  'ROMWE เสื้อยืดสตรีทรงเข้ารูปพร้อมดีไซน์ลูกไม้', price: 500, image: '7.jpg' },
    { id: 8, name:  'ROMWE Kawaii เสื้อผ้าบางสำหรับผู้หญิงเชอร์รี่', price: 550, image: '8.jpg' },
    { id: 9, name:  'ROMWE Hippie เมอร์เมด เสื้อท็อปสายเดี่ยว ', price: 600, image: '9.jpg' },
    { id: 10,name:  'MOD พลัส เสื้อท็อป ผูกโบว์หน้า ขอบหยัก    ', price: 650, image: '10.jpg' },
  ];
  

  const [cart, setCart] = useState([]);
  const [coupon, setCoupon] = useState(''); // คูปองส่วนลด
  const [discount, setDiscount] = useState(0); // จำนวนเงินส่วนลด

  const addToCart = (product) => {
    const existingProduct = cart.find((item) => item.id === product.id);
    if (existingProduct) {
      setCart(
        cart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };


  //ลบสินค้าออกจากตะกร้า
  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };


  //ลดจำนวนสินค้าที่เลือก ถ้าจำนวนสินค้าน้อยกว่า 1 จะลบออกจากตะกร้า
  const updateQuantity = (id, quantity) => {
    setCart(
      cart.map((item) =>
        item.id === id ? { ...item, quantity: quantity } : item
      )
    );
  };


  //คูปองส่วนลด
  const applyCoupon = () => {
    if (coupon === 'DISCOUNT10') {
      setDiscount(0.1); // ลด 10%
    } else if (coupon === '1111') {
      setDiscount(50); // ลด 100 บาท
    } else {
      setDiscount(0); // ไม่มีส่วนลด
    }
  };

  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);
  const finalPrice = totalPrice - (discount < 1 ? totalPrice * discount : discount) + 100; // บวกค่าขนส่ง 100 บาท

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">The Style Stop</h1>
      <ProductList products={products} addToCart={addToCart} />

      <h2 className="text-xl font-semibold mt-6">สรุปคำสั่งซื้อ</h2>
      <ShoppingCart
        cart={cart}
        totalPrice={totalPrice}
        finalPrice={finalPrice}
        discount={discount}
        removeFromCart={removeFromCart}
        updateQuantity={updateQuantity}
        setCoupon={setCoupon}
        applyCoupon={applyCoupon}
      />
    </div>
  );
}

export default App;
