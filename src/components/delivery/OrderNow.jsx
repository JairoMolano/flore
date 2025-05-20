import deliveryLogoImg from '../../assets/img/delivery/delivery_logo.png'

const OrderNow = () => {
  return (
    <div>
      <div className="mt-25 max-w-5xl mx-auto flex flex-row items-center">
        <div className="w-1/2">
          <img
            className="w-full h-auto object-cover"
            src={deliveryLogoImg}
            alt="Delivery"
          />
        </div>
        <div className="w-1/2 text-center text-left pl-8">
          <h1 className="tittle mb-6">Domicilios</h1>
          <h3 className="description">
            Realiza tus pedidos de forma fácil y rápida a través de nuestra plataforma. Solo
            haz clic en el siguiente enlace, selecciona tus platos favoritos de Floré y
            disfruta de un brunch delicioso en la comodidad de tu hogar. ¡Entrega segura y
            oportuna garantizada!
          </h3>
        </div>
      </div>
      <div className="flex justify-center my-8">
        <button className="px-6 py-3 bg-blue-500 text-white font-bold rounded hover:bg-blue-700 hover-animate cursor-pointer">
          Ordenar Ahora
        </button>
      </div>
    </div>
  )
}

export default OrderNow
