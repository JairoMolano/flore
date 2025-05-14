import React from 'react';
import reservationImg from '../assets/img/us/Reservation.png'; // Cambio aquí

const Reservation = () => {
  return (
    <div className="min-h-screen flex">
      {/* Imagen izquierda */}
      <div className="w-1/2 h-screen">
        <img
          src={reservationImg} // Cambio aquí
          alt="Imagen reserva"
          className="object-cover w-full h-full"
        />
      </div>

      {/* Formulario derecha */}
      <div className="w-1/2 flex items-center justify-center p-8 bg-pink-50">
        <div className="max-w-md w-full">
          <h2 className="text-2xl font-bold mb-6 text-center text-purple-800">Reserva tu mesa</h2>

          <form className="space-y-5">
            {/* Cantidad de personas */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Cantidad de personas
              </label>
              <input
                type="number"
                min="1"
                max="20"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Ej. 3"
              />
            </div>

            {/* Fecha */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Fecha
              </label>
              <input
                type="date"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            {/* Hora */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Hora
              </label>
              <input
                type="time"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            {/* Botón */}
            <div className="pt-4">
              <button
                type="submit"
                className="w-full bg-purple-800 hover:bg-purple-900 text-white font-bold py-3 rounded-md shadow-md transition duration-300"
              >
                ¡Reserva ahora!
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Reservation;