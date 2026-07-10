import React from "react";
import LazyImage from "./LazyImage";

const BenefitsSection = ({ onOpenPopup }) => {
  return (
    <section id="benefits" className="py-7 sm:py-16 lg:py-24 bg-green-50/50">
      <div className="mx-auto max-w-5xl px-6">
        <div className="sm:text-center">
          <h2 className="text-3xl font-bold text-gray-900 font-['Inter'] leading-[40px] md:leading-normal">
            Unique Benefits of Cradle Of Life
          </h2>
          <p className="mt-4 text-gray-600 font-['Inter']">
            Discover Thoughtful Amenities Enhancing Every Aspect of Life
          </p>
        </div>

        {/* First 3 alternate-layout rows */}
        <div className="mt-8 sm:mt-20 grid gap-8">
          {/* Row 1: Nature Zone */}
          <div className="justify-between gap-x-10 sm:flex lg:gap-x-16">
            {/* Mobile Image */}
            <div className="inline-block lg:hidden w-full">
              <LazyImage
                src="/images/image-8.webp"
                alt="Service 1"
                className="h-60 w-full rounded-2xl object-cover"
                width={240}
                height={240}
              />
            </div>
            {/* Content */}
            <div className="self-center sm:w-6/12 mt-2 lg:mt-0">
              <h3 className="mb-2 text-xl font-semibold capitalize lg:text-xl font-['Inter'] text-gray-900">
                Nature Zone
              </h3>
              <p className="text-gray-600 font-['Inter']">
                Embrace tranquility with scenic gardens, trails, and
                nature-inspired areas.
              </p>
              <div className="mt-4">
                <div>
                  <div
                    onClick={onOpenPopup}
                    className="inline-block w-full cursor-pointer rounded-xl px-6 py-3 text-center text-white font-medium bg-green-700 hover:bg-green-900 hover:shadow-md duration-200 sm:w-auto"
                  >
                    Know More
                  </div>
                </div>
              </div>
            </div>
            {/* Desktop Image */}
            <div className="hidden lg:inline-block sm:w-6/12">
              <LazyImage
                src="/images/image-8.webp"
                alt="Service 1"
                className="h-60 w-full rounded-2xl object-cover"
                width={456}
                height={240}
              />
            </div>
          </div>

          {/* Row 2: Fitness and Wellness Zone */}
          <div className="justify-between gap-x-10 sm:flex lg:gap-x-16">
            {/* Image */}
            <div className="inline-block w-full sm:w-6/12">
              <LazyImage
                src="/images/image-7.webp"
                alt="Service 2"
                className="h-60 w-full rounded-2xl object-cover object-top"
                width={456}
                height={240}
              />
            </div>
            {/* Content */}
            <div className="self-center sm:w-6/12 mt-2 lg:mt-0">
              <h3 className="mb-2 text-xl font-semibold capitalize lg:text-xl font-['Inter'] text-gray-900">
                Fitness and Wellness Zone
              </h3>
              <p className="text-gray-600 font-['Inter']">
                Spaces designed for physical health, mental clarity, and
                holistic wellness.
              </p>
              <div className="mt-4">
                <div>
                  <div
                    onClick={onOpenPopup}
                    className="inline-block w-full cursor-pointer rounded-xl px-6 py-3 text-center text-white font-medium bg-green-700 hover:bg-green-900 hover:shadow-md duration-200 sm:w-auto"
                  >
                    Know More
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Row 3: Sports and Gaming Zone */}
          <div className="justify-between gap-x-10 sm:flex lg:gap-x-16">
            {/* Mobile Image */}
            <div className="inline-block lg:hidden w-full">
              <LazyImage
                src="/images/image-11.webp"
                alt="Service 3"
                className="h-60 w-full rounded-2xl object-cover"
                width={240}
                height={240}
              />
            </div>
            {/* Content */}
            <div className="self-center sm:w-6/12 mt-2 lg:mt-0">
              <h3 className="mb-2 text-xl font-semibold capitalize lg:text-xl font-['Inter'] text-gray-900">
                Sports and Gaming Zone
              </h3>
              <p className="text-gray-600 font-['Inter']">
                Engage in sports and games alone or with others for active,
                energetic senior living.
              </p>
              <div className="mt-4">
                <div>
                  <div
                    onClick={onOpenPopup}
                    className="inline-block w-full cursor-pointer rounded-xl px-6 py-3 text-center text-white font-medium bg-green-700 hover:bg-green-900 hover:shadow-md duration-200 sm:w-auto"
                  >
                    Know More
                  </div>
                </div>
              </div>
            </div>
            {/* Desktop Image */}
            <div className="hidden lg:inline-block sm:w-6/12">
              <LazyImage
                src="/images/image-11.webp"
                alt="Service 3"
                className="h-60 w-full rounded-2xl object-cover"
                width={456}
                height={240}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Grid items below */}
      <section className="mt-8 lg:mt-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 sm:grid-cols-2 lg:grid-cols-3">
          {/* Card 1 */}
          <div>
            <LazyImage
              src="/images/image-2.webp"
              alt="Service 4"
              className="w-full sm:mx-auto rounded-xl"
              width={384}
              height={276}
            />
            <div className="sm:text-center">
              <p className="mb-2 mt-4 text-lg font-semibold capitalize lg:text-xl font-['Inter'] text-gray-900">
                Social Zone
              </p>
              <div className="mb-1 text-gray-600 font-['Inter']">
                Connect with others in vibrant spaces fostering friendship and
                community.
              </div>
              <div className="mt-4">
                <div>
                  <div
                    onClick={onOpenPopup}
                    className="inline-block w-full cursor-pointer rounded-xl px-6 py-3 text-center text-white font-medium bg-green-700 hover:bg-green-900 hover:shadow-md duration-200 sm:w-auto"
                  >
                    Know More
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div>
            <LazyImage
              src="/images/Creative-Zone.webp"
              alt="Service 5"
              className="w-full sm:mx-auto rounded-xl"
              width={384}
              height={276}
            />
            <div className="sm:text-center">
              <p className="mb-2 mt-4 text-lg font-semibold capitalize lg:text-xl font-['Inter'] text-gray-900">
                Creative Zone
              </p>
              <div className="mb-1 text-gray-600 font-['Inter']">
                Explore hobbies, crafts, and arts for creativity and personal
                expression.
              </div>
              <div className="mt-4">
                <div>
                  <div
                    onClick={onOpenPopup}
                    className="inline-block w-full cursor-pointer rounded-xl px-6 py-3 text-center text-white font-medium bg-green-700 hover:bg-green-900 hover:shadow-md duration-200 sm:w-auto"
                  >
                    Know More
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div>
            <LazyImage
              src="/images/service6.webp"
              alt="Service 6"
              className="w-full sm:mx-auto rounded-xl"
              width={384}
              height={276}
            />
            <div className="sm:text-center">
              <p className="mb-2 mt-4 text-lg font-semibold capitalize sm:text-center lg:text-xl font-['Inter'] text-gray-900">
                Celebrations Zone
              </p>
              <div className="mb-1 text-gray-600 font-['Inter']">
                Enjoy community events and celebrations that bring joy to daily
                life.
              </div>
              <div className="mt-4">
                <div>
                  <div
                    onClick={onOpenPopup}
                    className="inline-block w-full cursor-pointer rounded-xl px-6 py-3 text-center text-white font-medium bg-green-700 hover:bg-green-900 hover:shadow-md duration-200 sm:w-auto"
                  >
                    Know More
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default BenefitsSection;
