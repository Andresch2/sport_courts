"use client";

import { useState } from "react";

// Primero se define una interfaz
interface Reservation {
  name: string;
  sport: string;
  date: string;
  time: string;
}

export default function Reserve() {
  // Utilice useState para manejar el estado de cada campo del formulario
  const [name, setName] = useState(""); // Estado para guardar el nombre del usuario y asi sucesivamente en los siguientes
  const [sport, setSport] = useState(""); 
  const [date, setDate] = useState(""); 
  const [time, setTime] = useState(""); 
  const [reservations, setReservations] = useState<Reservation[]>([]); // Estado para almacenar las reservas realizadas
  const [error, setError] = useState(""); // Estado para mostrar mensajes de error cuando falten campos

  // Esta funcion se activa cuando el usuario envia el formulario
  const submitReservation = (e: React.FormEvent) => {
    e.preventDefault(); // Evitamos que la pagina se recargue al enviar el formulario

    // Validamos si todos los campos han sido llenados correctamente
    if (!name || !sport || !date || !time) {
      setError("Please fill in all fields."); // Si algun campo esta vacio, mostramos un mensaje de error
      return; 
    }

    // Si todos los campos estan llenos, limpiamos el mensaje de error
    setError("");

    // Se crea un nuevo objeto de reserva con los valores ingresados por el usuario
    const newReservation: Reservation = { name, sport, date, time };

    // Se actualiza el estado de las reservas para incluir la nueva reserva
    setReservations([...reservations, newReservation]);

    // Limpiamos los campos del formulario despues de enviar
    setName(""); 
    setSport(""); 
    setDate(""); 
    setTime(""); 
  };

  // Funcion para eliminar una reserva especifica cuando el usuario hace clic en el boton "Delete"
  const deleteReservation = (indexToDelete: number) => {
    // Actualizamos el estado de reservas eliminando la seleccionada con filter
    setReservations(reservations.filter((_, index) => index !== indexToDelete));
  };

  return (
    <div className="p-8 min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100">
      <h1 className="text-5xl font-bold mb-6 text-blue-800">Reserve a Sports Court</h1>
      
      {/* Formulario para ingresar los datos de la reserva */}
      <form onSubmit={submitReservation} className="space-y-4 bg-white p-6 shadow-lg rounded-lg max-w-lg mx-auto">
        {/* Si hay un error, se muestra el mensaje aqui */}
        {error && <p className="text-red-500">{error}</p>}
        
        <div>
          <label htmlFor="name" className="block text-lg font-medium text-blue-800">Name:</label>
          {/* Input de texto para ingresar el nombre del usuario */}
          <input
            type="text"
            id="name"
            value={name} // El valor del campo se conecta con el estado de "name"
            onChange={(e) => setName(e.target.value)} // Actualiza el estado "name" cada vez que el usuario escribe
            className="w-full border border-blue-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your name"
          />
        </div>

        <div>
          <label htmlFor="sport" className="block text-lg font-medium text-blue-800">Sport:</label>
          {/* Desplegable para que el usuario seleccione el deporte */}
          <select
            id="sport"
            value={sport} // Conectamos el valor con el estado "sport"
            onChange={(e) => setSport(e.target.value)} // Actualizamos el estado "sport" cuando el usuario selecciona un deporte
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
          {/* Input de fecha para seleccionar el dia de la reserva */}
          <input
            type="date"
            id="date"
            value={date} // Conectamos el valor del input con el estado "date"
            onChange={(e) => setDate(e.target.value)} // Actualizamos el estado "date" cuando el usuario selecciona una fecha
            className="w-full border border-blue-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label htmlFor="time" className="block text-lg font-medium text-blue-800">Time:</label>
          {/* Input de hora para que el usuario seleccione la hora de la reserva */}
          <input
            type="time"
            id="time"
            value={time} // Conectamos el valor del input con el estado "time"
            onChange={(e) => setTime(e.target.value)} // Actualizamos el estado "time" cuando el usuario selecciona una hora
            className="w-full border border-blue-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Boton para confirmar y enviar la reserva */}
        <button type="submit" className="mt-4 bg-gradient-to-r from-blue-500 to-green-500 text-white py-2 px-4 rounded-lg shadow-md hover:from-green-500 hover:to-blue-500">
          Confirm Reservation
        </button>
      </form>

      {/* Lista que muestra las reservas realizadas */}
      <div className="mt-8">
        <h2 className="text-3xl font-semibold text-blue-800">Your Reservations</h2>
        {/* Si no hay reservas, se muestra un mensaje */}
        {reservations.length === 0 ? (
          <p className="text-lg text-blue-600">No reservations yet.</p>
        ) : (
          <ul className="mt-4 space-y-4">
        
            {reservations.map((res, index) => (
              <li key={index} className="bg-white p-4 border rounded-lg shadow-lg flex justify-between items-center">
                <div>
                  <p><strong>Name:</strong> {res.name}</p> {/* Muestra el nombre de la reserva y asi sucesivamente en los demas*/}
                  <p><strong>Sport:</strong> {res.sport}</p> 
                  <p><strong>Date:</strong> {res.date}</p> 
                  <p><strong>Time:</strong> {res.time}</p> 
                </div>
                {/* Boton para eliminar la reserva */}
                <button
                  onClick={() => deleteReservation(index)} // Elimina la reserva con el indice especificado
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
