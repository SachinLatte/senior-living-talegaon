const needsData = [
  {
    title: "Are Homes Senior-Friendly?",
    description:
      "Spaces must offer safety, comfort, and age-appropriate accessibility.",
  },
  {
    title: "Is Community Engagement Available?",
    description:
      "Social connections and activities are vital for mental well-being for everyone - more so at advanced age.",
  },
  {
    title: "How Is Healthcare Managed?",
    description:
      "Accessible, quality medical support is essential for peace of mind of both the residents and their loved ones.",
  },
  {
    title: "Is Daily Assistance Reliable?",
    description:
      "Reliable help for daily tasks enhances convenience and independence; which is important for all.",
  },
  {
    title: "Are There Wellness Options?",
    description:
      "Physical wellness amenities promote an active, healthy lifestyle for everyone in their sunset years.",
  },
  {
    title: "Is Security Prioritized?",
    description:
      "Seniors need secure environments for stress-free, safe living under a watchful care of someone responsible.",
  },
];

const SeniorsNeeds = () => {
  return (
    <section className="py-5 sm:py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto px-0 sm:px-4 sm:w-full sm:text-center">
          <h2 className="text-3xl font-bold text-gray-900">
            Seniors' Unique Needs
          </h2>
          <div className="mt-4 text-gray-600">
            Exploring Key Needs For A Fulfilling Retirement Lifestyle
          </div>
        </div>
        <div className="mx-auto mt-10 flex w-full max-w-5xl grid-cols-2 gap-4 overflow-auto px-0 sm:px-4 pb-8 sm:mt-12 sm:grid sm:gap-10 sm:pb-0 md:mt-14">
          {needsData.map((need, index) => (
            <div
              key={index}
              className="min-width rounded-xl bg-zinc-100/75 p-4 sm:bg-white sm:p-0"
            >
              <div className="mb-1 text-xl font-semibold capitalize lg:text-xl">
                {need.title}
              </div>
              <div className="text-gray-600">{need.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SeniorsNeeds;
