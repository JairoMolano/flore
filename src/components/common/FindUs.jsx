import mapImg from '../../assets/img/common/find-us/map.jpg'

const FindUs = () => {
  return (
    <>
    <div className="flex flex-col justify-center mx-auto text-center max-w-5xl mt-25">
      <h2 className="tittle mb-6">Encuentranos en Neiva</h2>
      <p className=" description  mb-12">
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
          className="h-auto rounded-lg shadow-lg hover-animate cursor-pointer"
        />
      </a>
    </div>
    </>
  )
}

export default FindUs