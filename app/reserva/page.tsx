"use client";

import { useState } from "react";

interface Reservation {
  name: string;
  sport: string;
  date: string;
  time: string;
}

export default function Reserve() {
  // Estados para gestionar el formulario y las reservas
  const [name, setName] = useState(""); 
  const [sport, setSport] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [reservations, setReservations] = useState<Reservation[]>([]); 
  const [error, setError] = useState("");

  // Función para gestionar el envío del formulario
  const submitReservation = (e: React.FormEvent) => {
    e.preventDefault();

    // Validación: verificar que todos los campos estén llenos
    if (!name || !sport || !date || !time) {
      setError("Please fill in all fields.");
      return;
    }

    // Si todo está correcto, limpiar el mensaje de error y agregar la nueva reserva
    setError("");
    const newReservation: Reservation = { name, sport, date, time };
    setReservations([...reservations, newReservation]);

    // Limpiar los campos del formulario después de enviar
    setName("");
    setSport("");
    setDate("");
    setTime("");
  };

  // Función para eliminar una reserva
  const deleteReservation = (indexToDelete: number) => {
    setReservations(reservations.filter((_, index) => index !== indexToDelete));
  };

  return (
    <div className="p-8 min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100">
      <h1 className="text-5xl font-bold mb-6 text-blue-800">Reserve a Sports Court</h1>
      
      {/* Formulario de reserva */}
      <form onSubmit={submitReservation} className="space-y-4 bg-white p-6 shadow-lg rounded-lg max-w-lg mx-auto">
        {error && <p className="text-red-500">{error}</p>}
        
        <div>
          <label htmlFor="name" className="block text-lg font-medium text-blue-800">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border border-blue-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your name"
          />
        </div>

        <div>
          <label htmlFor="sport" className="block text-lg font-medium text-blue-800">Sport:</label>
          <select
            id="sport"
            value={sport}
            onChange={(e) => setSport(e.target.value)}
            className="w-full border border-blue-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select a sport</option>
            <option value="Football">Football</option>
            <option value="Tennis">Tennis</option>
            <option value="Basketball">Basketball</option>
          </select>
        </div>

        <div>
          <label htmlFor="date" className="block text-lg font-medium text-blue-800">Date:</label>
          <input
            type="date"
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full border border-blue-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label htmlFor="time" className="block text-lg font-medium text-blue-800">Time:</label>
          <input
            type="time"
            id="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            className="w-full border border-blue-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Botón para confirmar la reserva */}
        <button type="submit" className="mt-4 bg-gradient-to-r from-blue-500 to-green-500 text-white py-2 px-4 rounded-lg shadow-md hover:from-green-500 hover:to-blue-500">
          Confirm Reservation
        </button>
      </form>

      {/* Lista de reservas */}
      <div className="mt-8">
        <h2 className="text-3xl font-semibold text-blue-800">Your Reservations</h2>
        {reservations.length === 0 ? (
          <p className="text-lg text-blue-600">No reservations yet.</p>
        ) : (
          <ul className="mt-4 space-y-4">
            {reservations.map((res, index) => (
              <li key={index} className="bg-white p-4 border rounded-lg shadow-lg flex justify-between items-center">
                <div>
                  <p><strong>Name:</strong> {res.name}</p>
                  <p><strong>Sport:</strong> {res.sport}</p>
                  <p><strong>Date:</strong> {res.date}</p>
                  <p><strong>Time:</strong> {res.time}</p>
                </div>
                {/* Botón para eliminar la reserva */}
                <button
                  onClick={() => deleteReservation(index)}
                  className="bg-red-500 text-white py-1 px-3 rounded-lg shadow-md hover:bg-red-600"
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
