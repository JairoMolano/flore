const SectionWithImage = ({ title, description, imgSrc, imgFirst = false }) => {
  return (
    <div
      className={`w-full flex flex-row items-center gap-10 max-w-5xl mt-25 ${
        imgFirst ? 'flex-row-reverse' : ''
      }`}
    >
      <div className="w-1/2 relative group">
        <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl border-4 border-transparent bg-gradient-to-br from-pink-100 to-yellow-100 p-1">
          <img
            src={imgSrc}
            alt={`Imagen de ${title}`}
            className="w-full h-auto rounded-2xl object-cover"
          />
        </div>
      </div>

      <div className="w-1/2 text-center text-left">
        <h2 className="text-5xl font-extrabold mb-6 text-gray-800">{title}</h2>
        <p className="text-lg font-medium text-gray-700 leading-relaxed">{description}</p>
      </div>
    </div>
  )
}

export default SectionWithImage