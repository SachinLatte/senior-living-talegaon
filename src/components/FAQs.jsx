import React, { useState } from 'react'
import { HiChevronDown } from 'react-icons/hi'

const faqData = [
  {
    question: 'What amenities are available at Cradle of Life?',
    answer: 'Cradle of Life offers a range of amenities, including fitness centers, wellness programs, social clubs, and serene natural surroundings. These amenities are thoughtfully designed to enhance the daily experience, support healthy living, and foster a close-knit community. For a more personalized overview, feel free to reach out!',
  },
  {
    key: 'healthcare',
    question: 'How is healthcare managed on-site?',
    answer: 'We have on-site healthcare facilities staffed by medical professionals available 24/7, ensuring immediate access to primary and preventive care. This integrated healthcare setup is designed to provide peace of mind to our residents. Contact us for detailed healthcare support information.',
  },
  {
    question: 'Are there social and recreational activities offered?',
    answer: 'Yes, Cradle of Life offers an array of social and recreational activities, from clubs to special events, designed to keep residents engaged and active. These activities cater to diverse interests, helping residents form meaningful bonds. Reach out for our upcoming activity schedule.',
  },
  {
    question: 'What safety measures are in place for residents?',
    answer: 'Cradle of Life prioritizes safety with a 3-tier security system, CCTV surveillance, emergency response protocols, and age-friendly design features. This comprehensive approach ensures a secure environment, giving peace of mind to both residents and families. For more details on our safety protocols, get in touch.',
  },
  {
    question: 'Are family and guests allowed to visit?',
    answer: 'Absolutely! We welcome families and friends to visit, allowing residents to share special moments with loved ones in a warm, welcoming environment. To know more about visitor access and accommodation, please contact us.',
  },
  {
    question: 'How can I schedule a tour of the property?',
    answer: 'We would be delighted to host you for a personal tour of Cradle of Life. Our team will guide you through the facilities, amenities, and residences to help you see firsthand the unique living experience we offer. Simply fill out our contact form to book your visit.',
  },
]

const FAQs = () => {
  const [openIndex, setOpenIndex] = useState(null)

  const toggleFAQ = (index) => {
    if (openIndex === index) {
      setOpenIndex(null)
    } else {
      setOpenIndex(index)
    }
  }

  return (
    <section id="faqs" className="py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="sm:text-center">
          <h2 className="text-3xl font-bold text-gray-900 lg:text-4xl font-['Inter']">
            Frequently Asked Questions
          </h2>
        </div>
        <div className="mx-auto mt-12 md:mt-14 lg:w-10/12">
          {faqData.map((item, index) => {
            const isOpen = openIndex === index
            return (
              <div
                key={index}
                className="relative select-none overflow-hidden border-b border-gray-200"
              >
                <p
                  onClick={() => toggleFAQ(index)}
                  className="flex cursor-pointer items-center justify-between pb-6 pt-4 text-xl font-medium text-gray-800"
                >
                  <span className="w-11/12 font-['Inter']">{item.question}</span>
                  <HiChevronDown
                    className={`mr-2 h-6 w-6 transform transition-all duration-200 ease-out text-gray-600 ${
                      isOpen ? '-rotate-180' : 'rotate-0'
                    }`}
                  />
                </p>
                <div
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    isOpen ? 'max-h-[500px] opacity-100 pb-8' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="text-gray-600 font-['Inter'] leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default FAQs
