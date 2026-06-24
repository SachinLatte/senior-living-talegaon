import React from 'react'

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Thank you for contacting us! We will get back to you in 24 hours.')
  }

  return (
    <section id="contact" className="bg-gray-100 py-16 lg:py-24">
      <div className="mx-auto grid max-w-7xl px-6 md:grid-cols-2 md:px-10 lg:px-12">
        {/* Left Side: Address Details */}
        <div className="self-center md:pe-8 lg:pe-16 xl:pe-24">
          <h2 className="mx-auto max-w-4xl text-3xl font-bold text-gray-900 lg:text-4xl font-['Inter']">
            Ready to Redefine Retirement?
            <br />
            Join Cradle of Life!
            <br />
          </h2>
          <div className="mt-4 text-gray-600 font-['Inter']">
            Begin Your Journey Today to Comfortable, Secure Senior Living
            <br />
          </div>
          <div className="mt-10 sm:mt-12 md:mt-20 xl:mt-28">
            <a
              href="https://maps.app.goo.gl/THVTbaUwovQwntV19"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="#15803D"
                  className="-ms-2 mb-2 h-12 w-12"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                  />
                </svg>
              </div>
              <div className="flex items-center gap-x-3">
                <div className="grow">
                  <div className="text-lg font-medium text-gray-800 lg:text-xl font-['Inter']">
                    Cradle of Life Pvt. Ltd.
                  </div>
                </div>
              </div>
              <div className="mt-1">
                <div className="lg:w-10/12">
                  <div className="text-gray-600 font-['Inter']">
                    Gat 131-133, Next to Xrbia Ambi, MIDC Road, At Post Ambi,
                    Talegaon (D), Pune, Maharashtra, India- 410507.
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>

        {/* Right Side: Contact Form */}
        <div className="mt-10 self-center sm:mt-12 md:mt-0 md:ps-4 lg:ps-12 xl:ps-16">
          <form
            onSubmit={handleSubmit}
            className="relative w-full space-y-4 rounded-xl bg-white p-4 shadow sm:p-12 md:p-8 lg:px-14 lg:py-16"
          >
            <h3 className="mb-6 text-2xl font-semibold text-gray-800 sm:mb-6 md:text-3xl font-['Inter']">
              Connect with Us
            </h3>
            <div className="relative">
              <label className="font-medium text-gray-800 font-['Inter']">
                Your Name <span className="text-red-700">*</span>
              </label>
              <div>
                <input
                  type="text"
                  name="name"
                  aria-label="name"
                  required
                  placeholder=""
                  autoComplete="off"
                  className="mt-2 block w-full rounded-lg border px-4 py-4 text-xl text-gray-800 md:mt-3 focus:outline-none focus:border-green-700 bg-white"
                />
              </div>
            </div>
            <div className="relative lg:pt-1">
              <label className="font-medium text-gray-800 font-['Inter']">
                Mobile Number <span className="text-red-700">*</span>
              </label>
              <div>
                <input
                  type="text"
                  name="phone"
                  required
                  placeholder="+91"
                  defaultValue="+91"
                  autoComplete="off"
                  className="mt-2 block w-full rounded-lg border px-4 py-4 text-xl text-gray-800 md:mt-3 focus:outline-none focus:border-green-700 bg-white"
                />
              </div>
            </div>
            <div className="relative lg:pt-1">
              <label className="font-medium text-gray-800 font-['Inter']">
                Your Email <span className="text-red-700">*</span>
              </label>
              <div>
                <input
                  type="email"
                  name="email"
                  aria-label="email"
                  required
                  placeholder=""
                  autoComplete="off"
                  className="mt-2 block w-full rounded-lg border px-4 py-4 text-xl text-gray-800 md:mt-3 focus:outline-none focus:border-green-700 bg-white"
                />
              </div>
            </div>
            <div className="relative pt-2 lg:pt-3">
              <button
                type="submit"
                className="inline-block w-full rounded-lg bg-green-700 px-5 py-4 text-center font-medium text-white transition-all duration-200 ease-in-out hover:bg-green-800 cursor-pointer"
              >
                Get a Reply in 24 Hours
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
