import { FaCheckCircle } from 'react-icons/fa'
import LazyImage from './LazyImage'

const Hero = ({ onOpenPopup }) => {
  const checkPoints = [
    'Age-Friendly Living Spaces with Enhanced Safety Measures',
    'Resort-Like Services for Effortless, Comfortable Daily Life',
    'Comprehensive Wellness Programs for Long-Lasting Vitality',
    'Safe, Secure Homes with 24/7 Emergency Assistance',
  ]

  return (
    <section id="hero" className="relative z-30 pt-0 sm:pt-10 pb-20">
      <div className="mx-auto lg:flex max-w-7xl px-5 pt-12 sm:px-12 md:gap-6 md:px-16 lg:px-20 lg:pt-6 xl:px-10 2xl:px-0">
        {/* Left Content */}
        <div className="self-center lg:w-3/5">
          <span className="font-bold text-green-700 leading-6 md:leading-10  block">
            Discover Exceptional Senior Living in Pune's Green Retreat
            <br />
          </span>
          <h1 className="text-3xl font-bold text-gray-800 sm:text-5xl md:text-3xl lineheighthero">
            <span className="lineheighthero ">
              New Senior Housing That's Perfect For You
            </span>
          </h1>
          <p className="mt-2 text-lg text-gray-700">
            Enjoy a vibrant retirement lifestyle with enriched amenities in
            a&nbsp;
            <br className="hidden md:block" />
            warm community under comprehensive wellness care.
          </p>

          {/* Check Points */}
          <div className="mt-4">
            {checkPoints.map((point, index) => (
              <div
                key={index}
                className={`flex items-center space-x-3 ${index < checkPoints.length - 1 ? 'mb-2' : ''
                  }`}
              >
                <FaCheckCircle className="w-5 h-5 text-green-700 flex-shrink-0" />
                <p className="text-gray-800">{point}</p>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex items-center">
            <div className="flex flex-col items-start justify-center">
              {/* xl button */}
              <span
                onClick={onOpenPopup}
                className="mt-8 w-full cursor-pointer rounded-xl bg-green-700 py-4 text-center font-medium text-white transition-all duration-200 ease-in-out hover:bg-green-900 sm:w-auto hidden md:hidden lg:hidden xl:block px-3 hover:shadow-md"
              >
                Embrace a Healthier, Happier Life with Us
              </span>
              {/* lg button */}
              <span
                onClick={onOpenPopup}
                className="mt-8 w-full cursor-pointer rounded-xl bg-green-700 py-4 text-center text-xs font-medium text-white transition-all duration-200 ease-in-out hover:bg-green-900 sm:w-auto hidden md:hidden lg:block xl:hidden px-3 hover:shadow-md"
              >
                Join Us for a Healthier, Happier Life
              </span>
              {/* md button */}
              <span
                onClick={onOpenPopup}
                className="mt-8 w-full cursor-pointer rounded-xl bg-green-700 py-4 text-center text-base font-medium text-white transition-all duration-200 ease-in-out hover:bg-green-900 sm:w-auto hidden md:block lg:hidden xl:hidden px-3 hover:shadow-md"
              >
                Explore Your Future Home Today
              </span>
              {/* mobile button */}
              <span
                onClick={onOpenPopup}
                className="mt-8 w-full cursor-pointer rounded-xl bg-green-700 py-4 text-center font-medium text-white transition-all duration-200 ease-in-out hover:bg-green-900 px-10 block md:hidden lg:hidden hover:shadow-md"
              >
                Contact Now
              </span>
              <div className="mt-4">
                <p className="text-center">
                  Start Your Journey to Vibrant Senior Living Today!
                </p>
              </div>
            </div>
            <div>
              <img
                src="/img/arrow-hero.webp"
                alt=""
                width="64"
                height="64"
                className="w-16 mt-10 md:block hidden"
              />
            </div>
          </div>

          {/* Awards */}
          <div className="mt-10">
            <span className="font-bold text-lg">
              Recognition of Excellence in Senior Living
            </span>
            <div className="mt-8 lg:w-4/5 grid-cols-3 gap-4 grid sm:space-y-0 relative lg:-ml-5">
              <div className="flex flex-col items-center col-span-1">
                <LazyImage
                  src="/img/award1.webp"
                  alt="India Property Awards"
                  width={112}
                  height={94}
                  className="w-28"
                />
                <span className="text-center mt-2">
                  by <b>India Property Awards</b>
                </span>
              </div>
              <div className="flex flex-col items-center col-span-1">
                <LazyImage
                  src="/img/award2.webp"
                  alt="India ET Real Estate Awards"
                  width={112}
                  height={94}
                  className="w-28"
                />
                <span className="text-center mt-2">
                  by <b>India ET Real Estate Awards</b>
                </span>
              </div>
              <div className="flex flex-col items-center col-span-1">
                <LazyImage
                  src="/img/award2.webp"
                  alt="India ET Real Estate Awards"
                  width={112}
                  height={94}
                  className="w-28"
                />
                <span className="text-center mt-2">
                  by <b>India ET Real Estate Awards</b>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Hero Image */}
        <div className="relative lg:w-2/5 mt-14 h-80 rounded-xl object-top sm:h-96 md:h-auto lg:mt-0">
          <img
            src="/img/image-9.webp"
            alt="hero image"
            width={470}
            height={627}
            className="hidden h-full w-full rounded-xl object-cover sm:hidden md:block lg:block xl:block 2xl:block"
          />
          <img
            src="/img/image-9.webp"
            alt="hero image"
            width={280}
            height={320}
            className="block h-full w-full rounded-xl object-cover sm:block sm:h-96 md:hidden lg:hidden xl:hidden 2xl:hidden"
          />
        </div>
      </div>
    </section>
  )
}

export default Hero
