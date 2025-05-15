import mapImg from '../../assets/img/common/find-us/map.jpg'

const FindUs = () => {
  return (
    <>
    <div className="flex flex-col items-center mt-25">
      <h2 className="text-4xl font-extrabold mb-6">Encuentranos en Neiva</h2>
      <p className="text-center max-w-5xl mb-12 text-lg text-gray-600">
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
          className="max-w-5xl h-auto rounded-lg transition-transform duration-300 hover:scale-105 cursor-pointer shadow-lg"
        />
      </a>
    </div>
    </>
  )
}

export default FindUs