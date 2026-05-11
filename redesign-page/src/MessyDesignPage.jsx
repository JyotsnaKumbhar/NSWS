export default function MessyAmazonUI() {
  return (
    <div className="bg-gray-200 text-xs p-2">

      {/* Navbar */}
      <div className="bg-black text-white p-2 flex gap-2">
        <h1>Amazon</h1>
        <input className="flex-1 text-black" placeholder="Search" />
        <span>Cart</span>
      </div>

      {/* Layout */}
      <div className="grid grid-cols-5 gap-2 mt-2">

        {/* Sidebar */}
        <div className="bg-white p-2">
          <p>Filters</p>
          <p>Shoes</p>
          <p>Clothes</p>
          <p>Price</p>
        </div>

        {/* Products */}
        <div className="col-span-3">

          <div className="bg-white p-2 flex gap-2 mb-2">
            <img src="https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg" className="w-20" />
            <div>
              <p>Shoes</p>
              <p>⭐⭐⭐⭐</p>
              <p>2499</p>
              <button>Add</button>
            </div>
          </div>

          <div className="bg-white p-2 flex gap-2">
            <img src="https://images.pexels.com/photos/19090/pexels-photo.jpg" className="w-20" />
            <div>
              <p>Sneakers</p>
              <p>⭐⭐⭐</p>
              <p>1999</p>
              <button>Add</button>
            </div>
          </div>

        </div>

        {/* Right */}
        <div className="bg-white p-2">
          <p>Ads</p>
        </div>

      </div>
    </div>
  );
}