import React from 'react';
import deliveryImg from '../assets/img/us/delivery.png'; 
import FindUs from '../components/common/FindUs';
import domiImg from '../assets/img/us/domi.png'; 

const Delivery = () => {
  return (
    <div>
      <header className="flex flex-col items-center">
        <img className="w-full h-120 object-cover" src={deliveryImg} alt="Delivery" /> 
        <div className="w-4/5 mt-12 max-w-4xl flex flex-col md:flex-row items-center">
          <div className="md:w-1/2">
            <img
              className="w-full h-auto object-cover"
              src={domiImg} 
              alt="Delivery"
            />
          </div>
          <div className="md:w-1/2 text-center md:text-left md:pl-8">
            <h1 className="text-5xl font-bold mb-6">Domicilios</h1>
            <h3 className="text-lg font-medium text-gray-700 leading-relaxed">
              Realiza tus pedidos de forma fácil y rápida a través de nuestra plataforma. Solo
              haz clic en el siguiente enlace, selecciona tus platos favoritos de Floré y
              disfruta de un brunch delicioso en la comodidad de tu hogar. ¡Entrega segura y
              oportuna garantizada!
            </h3>
          </div>
        </div>
      </header>
      <div className="flex justify-center my-8">
        <button className="px-6 py-3 bg-blue-500 text-white font-bold rounded hover:bg-blue-600">
          Ordenar Ahora
        </button>
      </div>
      <FindUs />
    </div>
  );
};

export default Delivery;