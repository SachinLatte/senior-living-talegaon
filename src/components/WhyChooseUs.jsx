import React from 'react'
import LazyImage from './LazyImage'

const whyChooseUsData = [
  {
    num: 1,
    title: 'Age-Friendly Design',
    description: 'Every home is crafted for safety and easy accessibility.',
  },
  {
    num: 2,
    title: 'Engaging Community',
    description: 'Foster friendships through clubs and enriching social activities.',
  },
  {
    num: 3,
    title: 'Reliable Healthcare',
    description: 'Access to on-site healthcare ensures immediate support when needed.',
  },
  {
    num: 4,
    title: 'Daily Convenience',
    description: 'Comprehensive daily assistance allows for a worry-free lifestyle.',
  },
  {
    num: 5,
    title: 'Secure Environment',
    description: 'Advanced security systems provide peace of mind and safety.',
  },
  {
    num: 6,
    title: 'Holistic Wellness',
    description: 'Wellness amenities support physical, mental, and emotional well-being.',
  },
]

const WhyChooseUs = () => {
  return (
    <section id="whyus" className="py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div>
          <div className="grid-cols-2 items-center gap-x-16 lg:grid">
            {/* Left side: Images */}
            <div className="order-1">
              <div className="gap-5 sm:grid sm:grid-cols-2">
                <div className="relative">
                  <LazyImage
                    src="/img/image-1.webp"
                    width="280"
                    height="382"
                    alt="why choose sec. us img-1"
                    className="h-80 w-full rounded-xl border object-cover object-left sm:mt-24 sm:h-96"
                  />
                </div>
                <div className="hidden sm:block">
                  <LazyImage
                    src="/img/image-4.webp"
                    width="280"
                    height="382"
                    alt="why choose sec. us img-2"
                    className="h-60 w-full rounded-xl border object-cover sm:h-96"
                  />
                </div>
              </div>
            </div>

            {/* Right side: Content */}
            <div className="mt-14 flex-col justify-center sm:mt-14 lg:mt-0 lg:flex">
              <div className="col-span-12 self-center lg:col-span-5 lg:col-start-8">
                <div className="mb-8 text-left">
                  <h2 className="text-3xl font-bold text-gray-900 font-['Inter']">
                    Why Choose Cradle of Life?
                  </h2>
                  <p className="mt-4 text-gray-600 font-['Inter']">
                    Unmatched Senior Living For Safety, Wellness &amp; Social Connection
                  </p>
                </div>
                <div className="grid justify-start">
                  {whyChooseUsData.map((item, index) => (
                    <div
                      key={item.num}
                      className="flex justify-between"
                    >
                      <div className="w-10 lg:w-12">
                        <div className="mt-1 text-2xl font-semibold text-green-700 md:text-3xl font-['Inter']">
                          {item.num}
                        </div>
                      </div>
                      <div className={`w-full pt-1 ${index < whyChooseUsData.length - 1 ? 'pb-6' : ''}`}>
                        <p className="mb-1 text-xl font-semibold capitalize lg:text-xl font-['Inter'] text-gray-800">
                          {item.title}
                        </p>
                        <p className="text-gray-600 font-['Inter']">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs
