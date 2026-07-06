import React, { useState } from 'react'

/**
 * Reusable ContactForm component to unify form logic and CRM integration.
 * Supports three variants: "popup", "contact", and "inline".
 */
const ContactForm = ({ variant = 'contact', onSuccess, buttonText, turl }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '+91',
    email: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // ==========================================
      // TODO: CONNECT YOUR CRM HERE
      // Example CRM integration:
      //
      // const response = await fetch('YOUR_CRM_API_ENDPOINT', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify(formData),
      // })
      // if (!response.ok) throw new Error('CRM submission failed')
      // ==========================================

      // Simulate API call success
      await new Promise((resolve) => setTimeout(resolve, 500))

      if (turl) {
        // Decode the base64 URL and redirect the user
        const redirectUrl = atob(turl)
        window.location.href = redirectUrl
      } else {
        alert('Thank you for contacting us! We will get back to you in 24 hours.')

        // Reset form (except phone prefix if preferred)
        setFormData({
          name: '',
          phone: '+91',
          email: '',
        })

        if (onSuccess) {
          onSuccess()
        }
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      alert('There was an issue submitting your request. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (variant === 'popup') {
    return (
      <form onSubmit={handleSubmit} className="my-form">
        <label className="form-lable">Your Name <span className="text-red-700">*</span></label>
        <div>
          <input
            type="text"
            placeholder=""
            name="name"
            value={formData.name}
            onChange={handleChange}
            aria-label="Type your name here"
            required
            autoComplete="off"
            className="form-input"
          />
        </div>
        <label className="form-lable lable">Mobile Number <span className="text-red-700">*</span></label>
        <div>
          <input
            type="text"
            placeholder=""
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            aria-label="Type your mobile number here"
            autoComplete="off"
            className="form-input"
          />
        </div>
        <label className="form-lable lable">Your Email <span className="text-red-700">*</span></label>
        <div>
          <input
            type="email"
            placeholder=""
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            aria-label="Type your email here"
            autoComplete="off"
            className="form-input"
          />
        </div>
        <button type="submit" disabled={isSubmitting} className="button-1">
          {isSubmitting ? 'Submitting...' : buttonText || 'Get Reply in 24 Hours'}
        </button>
      </form>
    )
  }

  if (variant === 'inline') {
    return (
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-12 gap-4 rounded-xl lg:gap-5"
      >
        {/* Name field */}
        <div className="relative col-span-12 sm:col-span-6 lg:col-span-3">
          <label className="font-medium text-gray-800">Your Name <span className="text-red-700">*</span></label>
          <div>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
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
          <label className="font-medium text-gray-800">Mobile Number <span className="text-red-700">*</span></label>
          <div>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              placeholder="+91"
              autoComplete="off"
              className="mt-2 block w-full rounded-xl border border-gray-300 bg-white px-4 py-4 outline-none transition-all duration-300 ease-in-out"
            />
          </div>
        </div>

        {/* Email Address field */}
        <div className="relative col-span-12 sm:col-span-6 lg:col-span-3">
          <label className="font-medium text-gray-800">Email Address <span className="text-red-700">*</span></label>
          <div>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
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
            disabled={isSubmitting}
            className="relative isolation-auto z-10 mt-4 inline-flex w-full transform cursor-pointer items-center justify-center gap-x-2 overflow-hidden rounded-xl border bg-green-700 px-8 py-4 font-semibold text-white hover:bg-green-800 hover:text-gray-50 sm:w-56 duration-200"
          >
            {isSubmitting ? 'Submitting...' : buttonText || 'Talk To Us Today'}
          </button>
        </div>
      </form>
    )
  }

  if (variant === 'redirect') {
    return (
      <form
        onSubmit={handleSubmit}
        className="space-y-6"
      >
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Your Name <span className="text-red-700">*</span>
          </label>
          <input
            type="text"
            name="name"
            required
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
            autoComplete="name"
            className="w-full rounded-xl border border-gray-300 px-4 py-3.5 text-gray-800 placeholder-gray-400 focus:outline-none focus:border-green-700 focus:ring-1 focus:ring-green-700 transition"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Mobile Number <span className="text-red-700">*</span>
          </label>
          <input
            type="text"
            name="phone"
            required
            placeholder="+91"
            value={formData.phone}
            onChange={handleChange}
            autoComplete="tel"
            className="w-full rounded-xl border border-gray-300 px-4 py-3.5 text-gray-800 placeholder-gray-400 focus:outline-none focus:border-green-700 focus:ring-1 focus:ring-green-700 transition"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Your Email <span className="text-red-700">*</span>
          </label>
          <input
            type="email"
            name="email"
            required
            placeholder="Enter your email address"
            value={formData.email}
            onChange={handleChange}
            autoComplete="email"
            className="w-full rounded-xl border border-gray-300 px-4 py-3.5 text-gray-800 placeholder-gray-400 focus:outline-none focus:border-green-700 focus:ring-1 focus:ring-green-700 transition"
          />
        </div>
        <div className="pt-2">
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full rounded-xl bg-green-700 hover:bg-green-800 active:bg-green-900 py-4 font-semibold text-white transition shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-green-700 focus:ring-offset-2 cursor-pointer"
          >
            {isSubmitting ? 'Connecting...' : buttonText || 'Get Reply in 24 Hours'}
          </button>
        </div>
      </form>
    )
  }

  // Default: variant === 'contact'
  return (
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
            value={formData.name}
            onChange={handleChange}
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
            value={formData.phone}
            onChange={handleChange}
            required
            placeholder="+91"
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
            value={formData.email}
            onChange={handleChange}
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
          disabled={isSubmitting}
          className="inline-block w-full rounded-lg bg-green-700 px-5 py-4 text-center font-medium text-white transition-all duration-200 ease-in-out hover:bg-green-800 cursor-pointer"
        >
          {isSubmitting ? 'Submitting...' : buttonText || 'Get a Reply in 24 Hours'}
        </button>
      </div>
    </form>
  )
}

export default ContactForm
