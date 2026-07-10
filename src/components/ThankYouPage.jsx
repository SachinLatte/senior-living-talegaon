import React, { useEffect, useState } from "react";

const ThankYouPage = () => {
  const [secondsRemaining, setSecondsRemaining] = useState(4);

  useEffect(() => {
    const timer = setInterval(() => {
      setSecondsRemaining((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          window.location.href = "/senior-living-talegaon/";
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="font bg-[#f7f7f7] min-h-[calc(100vh-76px)] flex flex-col justify-between">
      {/* Spacer to help center the content vertically */}
      <div className="flex-grow flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl text-center space-y-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-gray-900 tracking-tight leading-tight">
            Thank you for your interest
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl font-medium text-[#f59e0b] sm:mt-4">
            Our team will get in touch with you.
          </p>

        </div>
      </div>

      {/* Footer countdown indicator */}
      <div className="pb-8 text-center text-sm text-gray-400">
        Redirecting automatically in {secondsRemaining} seconds...
      </div>
    </div>
  );
};

export default ThankYouPage;
