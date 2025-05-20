const Header = ({ imgSrc, description }) => {
  return (
    <header className="relative w-full flex items-center justify-center"
    style={{ height: `calc(50vh - var(--navbar-height))` }}
    >
      <img
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        src={imgSrc}
        alt={description}
      />
      <div className="relative z-10 text-white text-center px-4 max-w-4xl">
        <p className="text-xl font-medium drop-shadow-md">{description}</p>
      </div>
      <div className="absolute top-0 left-0 w-full h-full bg-black/30 z-0" />
    </header>
  )
}

export default Header