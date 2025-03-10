import { useState } from "react";

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Roller Coaster Ticket",
      price: 25000,
      quantity: 1,
      image:
        "https://ihqqppufevqblzjtbdrn.supabase.co/storage/v1/object/sign/DetailTicket/White%20and%20Purple%20Fun%20Tiket%20Pertunjukan%20dan%20Wahana%20Pasar%20Malam.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJEZXRhaWxUaWNrZXQvV2hpdGUgYW5kIFB1cnBsZSBGdW4gVGlrZXQgUGVydHVuanVrYW4gZGFuIFdhaGFuYSBQYXNhciBNYWxhbS5wbmciLCJpYXQiOjE3NDA4ODgyMjIsImV4cCI6MTc3MjQyNDIyMn0.RjbUPHps9cNSsaJK8VPFzCribEOuLpzpX53ixbpwLdY",
    },
    {
      id: 2,
      name: "Ferris Wheel Ticket",
      price: 15000,
      quantity: 2,
      image:
        "https://ihqqppufevqblzjtbdrn.supabase.co/storage/v1/object/sign/DetailTicket/White%20and%20Purple%20Fun%20Tiket%20Pertunjukan%20dan%20Wahana%20Pasar%20Malam.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJEZXRhaWxUaWNrZXQvV2hpdGUgYW5kIFB1cnBsZSBGdW4gVGlrZXQgUGVydHVuanVrYW4gZGFuIFdhaGFuYSBQYXNhciBNYWxhbS5wbmciLCJpYXQiOjE3NDA4ODgyMjIsImV4cCI6MTc3MjQyNDIyMn0.RjbUPHps9cNSsaJK8VPFzCribEOuLpzpX53ixbpwLdY",
    },
  ]);

  const formatRupiah = (value) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(value);
  };

  const handleQuantityChange = (id, amount) => {
    setCartItems((prevItems) =>
      prevItems
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + amount } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="min-h-screen px-4 md:px-12 lg:px-20 py-12 font-[Inter]">
      <h1 className="text-2xl md:text-4xl text-center font-semibold mb-8">
        Shopping Cart
      </h1>
      {cartItems.length === 0 ? (
        <div className="flex flex-col justify-center items-center my-42">
          <p className="text-4xl text-center font-semibold mb-6 text-gray-500">
            Your cart is empty
          </p>
        </div>
      ) : (
        <div className="bg-white p-6 rounded-lg shadow-md border border-border overflow-x-auto">
          {/* Header: Disembunyikan di Phone */}
          <table className="w-full border-collapse">
            <thead className="hidden md:table-header-group">
              <tr className="text-left border-b">
                <th className="p-4 text-lg">Product</th>
                <th className="p-4 text-lg text-center">Price</th>
                <th className="p-4 text-lg text-center">Quantity</th>
                <th className="p-4 text-lg text-center">Total</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <tr
                  key={item.id}
                  className="border-b text-center flex flex-col md:table-row"
                >
                  {/* Product */}
                  <td className="flex flex-col items-center md:items-start gap-2 p-4 text-center md:text-left">
                    <span className="text-lg font-semibold">{item.name}</span>
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full md:w-80 h-auto rounded-2xl shadow-[0px_5px_8px_rgba(0,0,0,0.25)]"
                    />
                  </td>

                  {/* Price */}
                  <td className="p-4 text-center md:table-cell whitespace-nowrap text-lg md:text-base font-semibold">
                    {formatRupiah(item.price)}
                  </td>

                  {/* Quantity */}
                  <td className="p-4 flex justify-center md:table-cell items-center gap-2 sm:gap-4">
                    <button
                      onClick={() => handleQuantityChange(item.id, -1)}
                      className="px-2 py-1 sm:px-2 sm:py-1 bg-gray-300 rounded"
                    >
                      -
                    </button>

                    <span className="text-lg font-semibold mx-2 sm:mx-1">
                      {item.quantity}
                    </span>

                    <button
                      onClick={() => handleQuantityChange(item.id, 1)}
                      className="px-2 py-1 sm:px-2 sm:py-1 bg-gray-300 rounded"
                    >
                      +
                    </button>
                  </td>

                  {/* Total */}
                  <td className="p-4 font-semibold text-center md:table-cell whitespace-nowrap text-lg md:text-base">
                    {formatRupiah(item.price * item.quantity)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      {/* Total Price */}
      <div className="mt-6 flex justify-center md:justify-end">
        <div className="border border-border px-8 py-4 w-fit rounded-lg shadow-md text-center">
          <h2 className="text-lg md:text-md font-semibold">
            Total:{" "}
            <span className="text-black">{formatRupiah(totalPrice)}</span>
          </h2>
          <button className="mt-4 bg-primary text-white px-14 py-2 rounded-lg">
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
