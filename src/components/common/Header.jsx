const Header = ({ imgSrc, title, description }) => {
  return (
    <header className="relative w-full flex items-center justify-center"
    style={{ height: `calc(50vh - var(--navbar-height))` }}
    >
      <img
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        src={imgSrc}
        alt={title}
      />
      <div className="relative z-10 text-white text-center px-4 max-w-4xl">
        <h1 className="text-5xl font-bold mb-4 drop-shadow-md">{title}</h1>
        <p className="text-lg font-medium drop-shadow-md">{description}</p>
      </div>
      <div className="absolute top-0 left-0 w-full h-full bg-black/30 z-0" />
    </header>
  )
}

export default Header