const SectionWithImage = ({ title, description, imgSrc, imgFirst = false }) => {
  return (
    <div
      className={`flex flex-row items-center gap-10 max-w-5xl mx-auto mt-25 ${
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

      <div className="w-1/2 text-left">
        <h2 className="tittle mb-6">{title}</h2>
        <p className="description">{description}</p>
      </div>
    </div>
  )
}

export default SectionWithImage