import LazyImage from "./LazyImage";

const amenitiesData = [
  {
    image:
      "/img/showcase1.webp",
    title: "Health Services",
    description: "Comprehensive On-Site\nMedical Care",
    alt: "nutrition-graduate",
  },
  {
    image:
      "/img/showcase2.webp",
    title: "Social Spaces",
    description: "Foster Daily Community\nInteractions",
    alt: "food-communication",
  },
  {
    image:
      "/img/showcase3.webp",
    title: "Fitness Zone",
    description: "Facilities For Active\nHealth to Live Blissfully",
    alt: "nutrition-listener",
  },
  {
    image:
      "/img/showcase4.webp",
    title: "Nature Retreats",
    description: "Beautiful Green Surroundings\nfor Daily Serenity",
    alt: "nutrition-listener",
  },
];

const Amenities = () => {
  return (
    <section id="amenities" className="py-20 bg-green-50/50">
      <div className="max-w-7xl px-6 mx-auto">
        <div className="sm:text-center">
          <h2 className="text-3xl font-bold text-gray-900">
            Superb Amenities Crafted for Elevated Living
          </h2>
          <p className="mt-4 text-gray-600">
            Discover A Suite Of Senior-Centric Amenities Designed For Safety,
            Wellness &amp; Vibrant Living
          </p>
        </div>
        <div className="mt-10 grid gap-10 sm:grid-cols-2 md:mt-24 lg:grid-cols-4">
          {amenitiesData.map((amenity, index) => (
            <div key={index}>
              <LazyImage
                src={amenity.image}
                alt={amenity.alt}
                width={64}
                height={60}
                className="w-16 sm:mx-auto"
              />
              <div className="sm:text-center">
                <p className="mb-2 mt-4 text-xl font-semibold capitalize lg:text-xl">
                  {amenity.title}
                </p>
                <div className="mb-1 text-gray-600 text-lg">
                  {amenity.description.split("\n").map((line, i) => (
                    <span key={i}>
                      {line}
                      {i < amenity.description.split("\n").length - 1 && <br />}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Amenities;
