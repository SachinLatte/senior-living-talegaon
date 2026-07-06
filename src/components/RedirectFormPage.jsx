import React from "react";
import ContactForm from "./ContactForm";

const RedirectFormPage = ({ type }) => {
  const isWhatsapp = type === "whatsapp";

  // Decoded URLs:
  // WhatsApp: https://wa.me/+918983012334?text=Hi,%20I%20want%20to%20inquire%20about%20Cradle%20of%20Life
  // Call: tel:6209506070
  const turlValue = isWhatsapp
    ? "aHR0cHM6Ly93YS5tZS8rOTE4OTgzMDEyMzM0P3RleHQ9SGksJTIwSSUyMHdhbnQlMjB0byUyMGlucXVpcmUlMjBhYm91dCUyMENyYWRsZSUyMG9mJTIwTGlmZQ=="
    : "dGVsOjYyMDk1MDYwNzA=";

  const pageTitle = isWhatsapp
    ? "Connect with us on Whatsapp"
    : "Connect with us on Call";

  return (
    <div className="font bg-white min-h-screen flex flex-col justify-between">
      <main className="flex-grow flex items-center justify-center py-10 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-5xl bg-white border border-gray-200 rounded-2xl shadow-xl overflow-hidden flex flex-col lg:flex-row">

          {/* Left Column - Hero/Brand Info */}
          <div className="w-full lg:w-1/2 bg-gradient-to-br from-white via-gray-50 to-gray-100 p-8 sm:p-12 flex flex-col justify-between">
            <div className="mb-12">
              <a href="/senior-living-talegaon/">
                <img
                  src="/images/Cradle%20of%20Life_newlogo.webp"
                  alt="Cradle of Life Logo"
                  className="h-16 w-auto"
                  loading="lazy"
                />
              </a>
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
                {pageTitle}
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Begin Your Journey Today to
                <br />
                Comfortable, Secure Senior Living.
              </p>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="w-full lg:w-1/2 p-8 sm:p-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
              Connect with Us
            </h3>
            <p className="text-gray-500 text-sm mb-8">
              Please fill out the form below to initiate the connection.
            </p>

            <ContactForm
              variant="redirect"
              turl={turlValue}
              buttonText="Get Reply in 24 Hours"
            />
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-50 border-t border-gray-200 py-6 text-center text-sm text-gray-500">
        Copyright © {new Date().getFullYear()} Cradle of life Pvt. Ltd. All Rights Reserved.
      </footer>
    </div>
  );
};

export default RedirectFormPage;
