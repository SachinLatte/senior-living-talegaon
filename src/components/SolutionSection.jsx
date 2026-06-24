import React from 'react'
import LazyImage from './LazyImage'
import { BiCheck } from 'react-icons/bi'

const SolutionSection = ({ onOpenPopup }) => {
  const solutions = [
    'Age-friendly, secure apartments offer seamless living spaces designed for comfort.',
    'Wide variety of social activities and clubs encourage strong, lasting community bonds.',
    'On-site medical facilities for ever-significant healthcare support that is accessible & trusted.',
    'Professional services simplify daily tasks, enhancing convenience and independence.',
    'Fitness and wellness zones promote active, healthy, and fulfilling lifestyles for all our seniors here.',
    'Carefully maintained advanced security systems guarantee a safe, secure, worry-free environment.',
  ]

  return (
    <section id="solution" className="py-16 lg:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-6 px-6 md:grid-cols-2 md:gap-10 lg:gap-14">
        {/* Left Side: Images */}
        <div className="h-80 overflow-hidden rounded-xl sm:h-96 lg:h-auto">
          {/* Desktop Image */}
          <LazyImage
            src="/img/image-5.webp"
            width="532"
            height="420"
            alt="solution that fit you"
            className="hidden h-full w-full object-cover sm:block"
          />
          {/* Mobile Image */}
          <LazyImage
            src="/img/image-5.webp"
            width="365"
            height="320"
            alt="solution that fit you"
            className="h-full w-full object-cover sm:hidden md:hidden lg:hidden xl:hidden"
          />
        </div>

        {/* Right Side: Content */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900">
            Your Ideal Senior Living Solutions
          </h2>
          <div className="mt-4 text-gray-600">
            Thoughtfully Designed for Comfort, Health, and Peace of Mind
          </div>
          <div className="my-4 grid gap-3">
            {solutions.map((text, idx) => (
              <div key={idx} className="flex space-x-3">
                <div>
                  <span className="grid place-items-center rounded-full bg-green-700 p-1">
                    <BiCheck className="text-white w-[14px] h-[14px]" />
                  </span>
                </div>
                <div className="text-gray-600">{text}</div>
              </div>
            ))}
          </div>
          <div className="mt-6">
            <div>
              <div
                onClick={onOpenPopup}
                className="inline-block w-full cursor-pointer rounded-xl bg-green-700 px-14 py-4 text-center font-medium text-white duration-200 hover:bg-green-900 sm:w-auto hover:shadow-md"
              >
                Contact Us Now
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SolutionSection
