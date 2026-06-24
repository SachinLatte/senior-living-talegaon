import React from 'react'
import { FaStar } from 'react-icons/fa'

const testimonialData = [
  {
    name: 'Ms. Srushti Ingale',
    text: `"As a family of only daughters, I was deeply concerned about my parents' retirement. Cradle of Life turned out to be the perfect solution. I've secured a home for my parents that provides them the lifestyle they deserve, while managed property services take care of the hassles of ownership and generate high passive earnings. Cradle of Life offers the care, comfort, and quality of life they need in their retirement, giving me complete peace of mind."`,
  },
  {
    name: 'Mr. Bhandare',
    text: `"Cradle of Life isn't just a place to retire; it's a place to enjoy life with lifelong friends. My friends and I have chosen Cradle of Life for our retirement because it fosters a strong sense of community where we can live, laugh, and support each other. The variety of amenities offers engaging activities, while the social spaces encourage us to connect and build meaningful bonds with like-minded peers. It's the perfect place to create lasting memories together."`,
  },
  {
    name: 'Mr. Ramesh Deshpande',
    text: `"I've found the perfect lifestyle at Cradle of Life, where happiness, convenience, security, and tranquillity in nature all come together. I wanted to give my wife the gift of freedom from daily chores, and the convenient services here will lift the burden of domestic duties from her, providing a hassle-free day-to-day life and allowing her to truly enjoy this phase of life. The diverse amenities offer us fulfilling and engaging activities every day. It's the perfect place for us to unwind and savour the joys of retirement together."`,
  },
  {
    name: 'Mr. & Mrs. Athnikar',
    text: `"Cradle of Life marks our first step towards active living. The open home layout, smart automation, and safety features perfectly align with our vision of a modern retirement home. The peaceful, scenic location and vibrant community make it an ideal place to enjoy a truly fulfilling lifestyle. While you can buy a house anywhere, you can't buy great neighbours! We were especially impressed by the like-minded community and the vibrant companionship it offers. The promoters' vision and commitment to excellence are reflected in the thoughtful design, ensuring a truly active and enriching life."`,
  },
  {
    name: 'Mr. Sushmesh Sharma',
    text: `"After years of managing business stress and the hardships of life, I was searching for a peaceful retreat to relax, rejuvenate, and enjoy life. Talegaon, with its natural beauty, ideal climate, and excellent connectivity, was already on my radar. While exploring farmhouse plots, I came across Cradle of Life and it immediately became my top choice. The fully managed property takes away the worry of maintenance, and the recreational amenities, wellness spa, and sports activities provide the ideal escape from my hectic routine. My wife and I have found the perfect home where we can truly unwind and enjoy life away from the daily grind."`,
  },
  {
    name: 'Vikas Sinha',
    text: `"After years of living in the Middle East and travelling the world for our careers, my wife and I longed to return to our roots and reconnect with the culture where we belong. Choosing Cradle of Life for our retirement was the perfect decision. The modern design, premium specifications, and lifestyle offerings are truly world-class. The unique operating model, featuring partnerships with industry experts, guarantees top-tier quality and consistent services, offering the perfect balance of comfort and resort-style living. Here, we can live life to the fullest, at our own pace, exactly as we want. We're thrilled to have made the perfect decision to buy a home in a vibrant community as we return to India."`,
  },
]

const Testimonials = () => {
  return (
    <section id="testimonials" className="relative overflow-hidden bg-green-50/50 py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="sm:text-center">
          <h2 className="text-3xl font-bold text-gray-900 font-['Inter']">
            Voices from Cradle of Life Community
          </h2>
          <p className="mt-4 text-gray-600 font-['Inter']">
            Testimonials of Transformative Health and Wellness Journeys
          </p>
        </div>

        {/* Scrollable list of reviews on mobile, grid on sm/desktop */}
        <div className="flex mt-16 gap-6 lg:gap-10 pb-10 overflow-auto sm:grid sm:grid-cols-12 sm:pb-0 sm:overflow-visible">
          {testimonialData.map((item, idx) => (
            <div
              key={idx}
              className="p-5 rounded-xl shadow-lg bg-white min-width sm:col-span-6 lg:col-span-4 sm:w-auto sm:px-6 flex flex-col justify-between"
            >
              <div className="flex flex-col justify-between h-full">
                <div>
                  <div className="flex items-center mb-1 space-x-1 rtl:space-x-reverse">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} className="w-4 h-4 text-yellow-400" />
                    ))}
                  </div>
                  <div className="pt-4 pb-4 text-gray-600/90 sm:pb-5">
                    <p className="italic text-sm font-['Inter']">
                      {item.text}
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center justify-between space-x-3 h-1/5">
                    <div className="w-full">
                      <h2 className="font-medium text-sm font-['Inter'] text-gray-800">
                        {item.name}
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
