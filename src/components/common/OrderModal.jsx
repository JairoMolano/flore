import { useState } from 'react';
import Swal from 'sweetalert2';
import { useTranslation } from 'react-i18next';

const OrderModal = ({ isOpen, onClose, clearCart }) => {
  const { t } = useTranslation('common');
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    phone: '',
    details: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (!formData.name || !formData.address || !formData.phone) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Por favor, completa todos los campos requeridos.'
      });
      return;
    }

    Swal.fire({
      icon: 'success',
      title: '¡Pedido Realizado!',
      text: 'Tu pedido ha sido registrado con éxito.'
    });

    clearCart();

    setFormData({ name: '', address: '', phone: '', details: '' });
    onClose();
  };


  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-center items-center h-screen">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h3 className="text-lg font-bold mb-4">{t('orderNow.modal.title')}</h3>

        <label className="block mb-1">{t('orderNow.modal.name')}</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange}
          className="input w-full mb-3 bg-gray-300 border border-gray-500 text-black p-2 rounded" />

        <label className="block mb-1">{t('orderNow.modal.address')}</label>
        <input type="text" name="address" value={formData.address} onChange={handleChange}
          className="input w-full mb-3 bg-gray-300 border border-gray-500 text-black p-2 rounded" />

        <label className="block mb-1">{t('orderNow.modal.phone')}</label>
        <input type="tel" name="phone" value={formData.phone} onChange={handleChange}
          className="input w-full mb-3 bg-gray-300 border border-gray-500 text-black p-2 rounded" />

        <label className="block mb-1">{t('orderNow.modal.details')}</label>
        <textarea name="details" value={formData.details} onChange={handleChange}
          className="textarea w-full mb-4 bg-gray-300 border border-gray-500 text-black p-2 rounded" />

        <div className="text-right">
          <button onClick={handleSubmit} className="btn bg-[#9C7696] text-white hover:bg-[#8a5c84] mr-2">
            {t('orderNow.modal.confirm')}
          </button>
          <button onClick={onClose} className="btn bg-gray-400 hover:bg-gray-500 text-white">
            {t('orderNow.modal.cancel') || 'Cancelar'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderModal;