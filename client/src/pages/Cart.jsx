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

  // Fungsi untuk format mata uang Rupiah
  const formatRupiah = (value) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(value);
  };

  const handleQuantityChange = (id, amount) => {
    setCartItems(
      (prevItems) =>
        prevItems
          .map((item) =>
            item.id === id
              ? { ...item, quantity: item.quantity + amount }
              : item
          )
          .filter((item) => item.quantity > 0) // Menghapus item jika jumlahnya nol
    );
  };

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="min-h-screen px-4 md:px-20 py-12 font-[Inter]">

      <h1 className="text-2xl md:text-4xl text-center font-semibold mb-8">Shopping Cart</h1>

      <ul className="flex flex-col gap-20 md:flex-row space-y-4 md:space-y-0 md:space-x-20 pl-0 md:pl-30 pb-5 text-lg md:text-2xl font-medium">

        <li>Product</li>
        <li>Price</li>
        <li>Quantity</li>
        <li>Total</li>
      </ul>

      {cartItems.length === 0 ? (
        <div className="flex flex-col justify-center items-center my-42">
          <p className="text-4xl text-center font-semibold mb-6 text-gray-500">
            Your cart is empty
          </p>
        </div>
      ) : (
        <div className="bg-white p-6 rounded-lg shadow-md border border-border">
          <ul>
            {cartItems.map((item) => (
              <li
                key={item.id}
                className="flex flex-col md:flex-row items-center border-b border-border py-2 gap-4 md:gap-10"

              >
                <div id="cart-product">
                  <h2 className="text-lg font-semibold">{item.name}</h2>
                  <img
                    src={item.image}
                    alt={item.name}
                  className="w-full md:w-80 h-auto rounded-2xl shadow-[0px_5px_8px_rgba(0,0,0,0.25)]"

                  />
                </div>
                <div>
                  <p id="cart-price" className="text-gray-600">
                    {formatRupiah(item.price)} per ticket
                  </p>
                </div>
                <div className="flex items-center mt-2">

                  <button id="cart-quantity"
                    onClick={() => handleQuantityChange(item.id, -1)}
                    className="px-2 py-1 bg-gray-300 rounded"
                  >
                    -
                  </button>
                  <span className="mx-3">{item.quantity}</span>
                  <button id="cart-quantity"
                    onClick={() => handleQuantityChange(item.id, 1)}
                    className="px-2 py-1 bg-gray-300 rounded"
                  >
                    +
                  </button>
                </div>
                <p id="cart-total" className="text-lg font-semibold mx-5">
                  {formatRupiah(item.price * item.quantity)}
                </p>
              </li>
            ))}
          </ul>
        </div>
      )}
        <div className="mt-6 text-left flex justify-end">

        <div className="border border-border px-8 py-4 w-fit rounded-lg shadow-[0px_3px_5px_rgba(0,0,0,0.25)]">
          <h2 className="text-md font-semibold">
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
