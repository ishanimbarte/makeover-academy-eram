import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Cart() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(data);
  }, []);

  const total = cartItems.reduce(
    (sum, item) => sum + Number(item.price),
    0
  );

  const removeItem = (index) => {
    let updated = [...cartItems];
    updated.splice(index, 1);

    setCartItems(updated);
    localStorage.setItem("cart", JSON.stringify(updated));
  };

  return (
    <div className="min-h-screen bg-black text-white p-40">
      <h1 className="text-3xl font-bold mb-6">Your Selected Courses</h1>

      {cartItems.length === 0 ? (
        <p>No courses selected</p>
      ) : (
        <>
          {cartItems.map((course, index) => (
            <div
              key={index}
              className="border border-gray-700 p-4 rounded-lg mb-4"
            >
              <h2 className="text-xl font-semibold">{course.title}</h2>
              <p>Duration: {course.duration}</p>
              <p>Price: ₹{course.price}</p>

              <button
                onClick={() => removeItem(index)}
                className="mt-2 bg-red-500 px-3 py-1 rounded"
              >
                Remove
              </button>
            </div>
          ))}

          <h2 className="text-2xl mt-6">
            Total: ₹{total}
          </h2>

          <Link
  to="/courseform"
  state={{ courses: cartItems }}
  className="mt-6 inline-block w-full text-center bg-[#EBD6FB] text-black font-semibold py-3 rounded-full hover:bg-[#d8b9f8] transition duration-300 shadow-lg"
>
  Proceed to Enroll
</Link>
        </>
      )}
    </div>
  );
}