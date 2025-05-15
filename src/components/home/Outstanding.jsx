import useEmblaCarousel from 'embla-carousel-react'
import AutoScroll from 'embla-carousel-auto-scroll'

const Outstanding = ({ slideCount = 5 }) => {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    AutoScroll({ playOnInit: true })
  ])

  return (
    <>
    <div className='flex flex-col items-center mt-25'>
      <h2 className="text-4xl text-gray-600 font-extrabold mb-6">
      Menú destacado
      </h2>
      <p className="text-center max-w-5xl mb-12 text-lg text-gray-600">
        Te invitamos a descubrir un menú que celebra la frescura, la creatividad y el sabor.
      </p>
    </div>
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {[...Array(slideCount).keys()].map((index) => (
            <div className="embla__slide" key={index}>
              <div className="embla__slide__number">
                <span>{index + 1}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </>
  )
}

export default Outstanding