import React, { useState } from "react";

// BookingForm Component
function BookingForm({ addBooking }) {
  const [clothingItem, setClothingItem] = useState("");
  const [size, setSize] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (clothingItem && size && date) {
      addBooking({ clothingItem, size, date });
      setClothingItem("");
      setSize("");
      setDate("");
    } else {
      alert("Please fill in all fields");
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
      <select
        value={clothingItem}
        onChange={(e) => setClothingItem(e.target.value)}
        required
        style={{ marginRight: "10px" }}
      >
        <option value="">Select Clothing</option>
        <option value="T-Shirt">T-Shirt</option>
        <option value="Jeans">Jeans</option>
        <option value="Jacket">Jacket</option>
        <option value="Dress">Dress</option>
      </select>
      <select
        value={size}
        onChange={(e) => setSize(e.target.value)}
        required
        style={{ marginRight: "10px" }}
      >
        <option value="">Select Size</option>
        <option value="S">S</option>
        <option value="M">M</option>
        <option value="L">L</option>
        <option value="XL">XL</option>
      </select>
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        required
        style={{ marginRight: "10px" }}
      />
      <button type="submit">Book</button>
    </form>
  );
}

// BookingList Component
function BookingList({ bookings }) {
  return (
    <div>
      <h2>Booking List</h2>
      {bookings.length > 0 ? (
        <ul>
          {bookings.map((booking, index) => (
            <li key={index}>
              {booking.clothingItem} ({booking.size}) - {booking.date}
            </li>
          ))}
        </ul>
      ) : (
        <p>No bookings yet!</p>
      )}
    </div>
  );
}

// App Component
function App() {
  const [bookings, setBookings] = useState([]);

  const addBooking = (booking) => {
    setBookings([...bookings, booking]);
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Clothing Booking System</h1>
      <BookingForm addBooking={addBooking} />
      <BookingList bookings={bookings} />
    </div>
  );
}

export default App;
