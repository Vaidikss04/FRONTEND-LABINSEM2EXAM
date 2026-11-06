import React from "react";

function RoomCard({ roomNumber, type, price }) {
  return (
    <div className="room-card">
      <h2>Room {roomNumber}</h2>
      <p>Type: {type}</p>
      <p>Price: ₹{price} / night</p>
    </div>
  );
}

function App() {
  return (
    <div>
      <h1>Available Rooms</h1>

      <RoomCard roomNumber="101" type="Single" price={1000} />
      <RoomCard roomNumber="102" type="Double" price={2000} />
      <RoomCard roomNumber="103" type="Deluxe" price={3000} />
    </div>
  );
}

export default App;
