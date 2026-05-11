import { useState } from "react";

export default function RedesignUI() {
  const images = [
    "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg",
    "https://images.pexels.com/photos/19090/pexels-photo.jpg",
    "https://images.pexels.com/photos/267320/pexels-photo-267320.jpeg",
  ];

  const price = 2499;

  const [selectedImage, setSelectedImage] = useState(images[0]);
  const [qty, setQty] = useState(1);
  const [cart, setCart] = useState(0);

  return (
    <div className="bg-gray-50 min-h-screen text-gray-800">
      {/* NAVBAR */}
      <header className="bg-white border-b px-8 py-4 flex items-center justify-between shadow-sm">
        <h1 className="text-xl font-semibold tracking-tight">Shop</h1>

        <input
          className="w-1/2 px-4 py-2 rounded-lg border focus:ring-2 focus:ring-blue-400 outline-none"
          placeholder="Search products..."
        />

        <div className="flex gap-6 text-sm">
          <span>Account</span>
          <span>Orders</span>
          <span className="font-semibold">Cart ({cart})</span>
        </div>
      </header>

      {/* MAIN */}
      <div className="max-w-6xl mx-auto grid grid-cols-12 gap-10 p-8">
        {/* LEFT IMAGE */}
        <div className="col-span-4">
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <img
              src={selectedImage}
              className="w-full h-80 object-cover rounded-xl"
            />

            <div className="flex gap-3 mt-4">
              {images.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  onClick={() => setSelectedImage(img)}
                  className={`w-16 h-16 rounded-lg cursor-pointer border ${
                    selectedImage === img
                      ? "border-blue-500"
                      : "border-gray-200"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* CENTER INFO */}
        <div className="col-span-5 space-y-5">
         
            <h1 className="text-2xl font-semibold leading-snug">
              Premium Running Shoes for Men
            </h1>

            <p className="text-yellow-500 text-sm">⭐ 4.2 • 120 reviews</p>

            <p className="text-3xl font-bold text-gray-900">₹{price}</p>

            <p className="text-sm text-green-600 font-medium">
              Free Delivery by Tomorrow
            </p>

            <div className="bg-white p-5 rounded-xl shadow-sm space-y-2">
              <p className="font-medium">Highlights</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>✔ Lightweight & breathable</li>
                <li>✔ Durable rubber sole</li>
                <li>✔ Perfect for daily use</li>
              </ul>
            </div>

            <p className="text-gray-600 text-sm leading-relaxed">
              Designed for comfort and performance. Ideal for running, gym, and
              casual wear.
            </p>
          
          {/* REVIEWS */}
          <div className="max-w-6xl mx-auto p-8">
            <div className="bg-blue-100 rounded-2xl p-6 shadow-sm">
              <h2 className="text-lg font-semibold mb-4">Customer Reviews</h2>

              <div className="space-y-3 text-sm text-gray-600">
                <p>⭐⭐⭐⭐ Great quality and comfort</p>
                <p>⭐⭐⭐⭐⭐ Worth the price</p>
                <p>⭐⭐⭐ Good but size issue</p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT BUY BOX */}
        <div className="col-span-3">
          <div className="bg-white rounded-2xl p-6 shadow-md sticky top-8">
            <p className="text-2xl font-bold">₹{price}</p>

            <p className="text-green-600 text-sm mt-1">In stock</p>

            {/* Quantity */}
            <div className="mt-4">
              <label className="text-sm">Quantity</label>
              <select
                value={qty}
                onChange={(e) => setQty(Number(e.target.value))}
                className="w-full mt-1 border rounded-lg px-3 py-2"
              >
                {[1, 2, 3, 4, 5].map((n) => (
                  <option key={n}>{n}</option>
                ))}
              </select>
            </div>

            {/* Total */}
            <p className="mt-4 text-sm font-semibold">Total: ₹{price * qty}</p>

            {/* Buttons */}
            <div className="flex flex-col gap-3 mt-5">
              <button
                onClick={() => setCart(cart + qty)}
                className="bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
              >
                Add to Cart
              </button>

              <button className="bg-black text-white py-2 rounded-lg hover:opacity-90">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
