import React from "react";

const InlineForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for contacting us! We will get back to you soon.");
  };

  return (
    <section id="inline-form" className="pt-10 pb-16 lg:pb-24">
      <div className="mx-auto max-w-7xl sm:px-12 md:px-16 lg:px-20 xl:px-10 2xl:px-0">
        <div className="border border-gray-100/50 bg-gray-100 px-5 py-12 sm:rounded-2xl sm:p-10 md:p-16 lg:p-20">
          <div className="mb-10 sm:mb-12 sm:text-center">
            <h2 className="text-3xl font-bold text-gray-900">
              Ensure The Ideal Senior Lifestyle For You
            </h2>
            <div className="mt-4 text-gray-600">
              Begin Your New Chapter With Us!
            </div>
          </div>
          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-12 gap-4 rounded-xl lg:gap-5"
          >
            {/* Name field */}
            <div className="relative col-span-12 sm:col-span-6 lg:col-span-3">
              <label className="font-medium text-gray-800">Your Name</label>
              <div>
                <input
                  type="text"
                  name="name"
                  aria-label="name"
                  required
                  placeholder=""
                  autoComplete="off"
                  className="mt-2 block w-full rounded-xl border border-gray-300 bg-white px-4 py-4 outline-none transition-all duration-300 ease-in-out"
                />
              </div>
            </div>

            {/* Mobile number field */}
            <div className="relative col-span-12 sm:col-span-6 lg:col-span-3">
              <label className="font-medium text-gray-800">Mobile Number</label>
              <div>
                <input
                  type="text"
                  name="phone"
                  required
                  placeholder="+91"
                  defaultValue="+91"
                  autoComplete="off"
                  className="mt-2 block w-full rounded-xl border border-gray-300 bg-white px-4 py-4 outline-none transition-all duration-300 ease-in-out"
                />
              </div>
            </div>

            {/* Email Address field */}
            <div className="relative col-span-12 sm:col-span-6 lg:col-span-3">
              <label className="font-medium text-gray-800">Email Address</label>
              <div>
                <input
                  type="email"
                  name="email"
                  aria-label="email"
                  required
                  placeholder=""
                  autoComplete="off"
                  className="mt-2 block w-full rounded-xl border border-gray-300 bg-white px-4 py-4 outline-none transition-all duration-300 ease-in-out"
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="relative col-span-12 pt-4 sm:col-span-6 lg:col-span-3">
              <button
                type="submit"
                name="submit"
                autoComplete="off"
                className="relative isolation-auto z-10 mt-4 inline-flex w-full transform cursor-pointer items-center justify-center gap-x-2 overflow-hidden rounded-xl border bg-green-700 px-8 py-4 font-semibold text-white hover:bg-green-800 hover:text-gray-50 sm:w-56 duration-200"
              >
                Talk To Us Today
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default InlineForm;
