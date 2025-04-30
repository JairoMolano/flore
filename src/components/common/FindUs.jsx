import React from 'react'
import mapImg from '../../assets/img/common/find_us/map.jpg'

const FindUs = () => {
  return (
    <div className="flex flex-col items-center py-8">
      <h2 className="text-4xl font-extrabold mb-4">Encuentranos en neiva</h2>
      <p className="text-center max-w-4xl mb-10 text-lg text-gray-600">
        Te invitamos a conocer Floré el destino predilecto para los amantes del brunch en Neiva. 
        Nuestras puertas están abiertas para recibirte y crear juntos momentos inolvidables mientras 
        disfrutas de nuestra distinguida propuesta culinaria.
      </p>

      <a 
        href="https://www.google.com/maps" 
        target="_blank" 
        rel="noopener noreferrer"
      >
        <img 
          src={mapImg} 
          alt="Mapa de ubicación" 
          className="w-full max-w-4xl h-auto rounded-lg transition-transform duration-300 hover:scale-105 cursor-pointer shadow-lg"
        />
      </a>

    </div>
  )
}

export default FindUs