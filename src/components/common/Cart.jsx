import { useEffect, useState } from "react";
import { useCart } from "../../context/cartContext";
import OrderModal from "../common/OrderModal";

const Cart = ({ isOpen, onClose }) => {
  const { cartItems, removeFromCart, clearCart } = useCart();
  const [isOrderModalOpen, setOrderModalOpen] = useState(false);

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => (document.body.style.overflow = '');
  }, [isOpen]);

  return (
    <>
      <div className={`fixed inset-0 z-50 overflow-hidden pointer-events-none h-screen`}>
        {isOpen && (
          <div
            className="absolute inset-0 bg-black/30 transition-opacity duration-300 pointer-events-auto"
            onClick={onClose}
          />
        )}

        <div
          className={`absolute top-0 right-0 h-screen w-[500px] bg-white shadow-lg transform transition-transform duration-300 ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          } pointer-events-auto`}
        >
          <div className="p-6 flex flex-col h-full">
            <div className="flex justify-between items-center mb-4">
              <h2 className="tittle">Carrito</h2>
              <button onClick={onClose} className="text-gray-500 hover:text-black text-2xl cursor-pointer">&times;</button>
            </div>

            {cartItems.length === 0 ? (
              <p className="text-gray-600">Tu carrito está vacío.</p>
            ) : (
              <>
                <ul className="flex-1 overflow-y-auto">
                  {cartItems.map((item, i) => (
                    <li key={i} className="flex justify-between items-center mb-4 border-b pb-2">
                      <div>
                        <h3 className="font-semibold">{item.title} (x{item.quantity})</h3>
                        <p className="text-sm text-gray-600">${item.price}</p>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.title)}
                        className="text-red-500 text-sm cursor-pointer hover:text-red-700"
                      >
                        Eliminar
                      </button>
                    </li>
                  ))}
                </ul>

                <div className="mt-4 border-t pt-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-bold">Total:</span>
                    <span>${total}</span>
                  </div>
                  <button
                    onClick={() => {
                      setOrderModalOpen(true);
                      onClose();
                    }}
                    className="w-full bg-[#9C7696] hover:bg-[#8a5c84] text-white py-2 rounded cursor-pointer mb-2"
                  >
                    Ordenar
                  </button>
                  <button
                    onClick={clearCart}
                    className="w-full bg-red-500 hover:bg-red-600 text-white py-2 rounded cursor-pointer"
                  >
                    Vaciar carrito
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Modal de formulario */}
      <OrderModal
        isOpen={isOrderModalOpen}
        onClose={() => setOrderModalOpen(false)}
        clearCart={clearCart}
      />


      
    </>
  );
};

export default Cart;
