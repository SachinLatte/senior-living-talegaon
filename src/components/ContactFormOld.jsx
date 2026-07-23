import React, { useState } from 'react'

/**
 * Reusable ContactForm component to unify form logic and CRM integration.
 * Supports three variants: "popup", "contact", and "inline".
 */
const ContactForm = ({ variant = 'contact', onSuccess, buttonText }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    purpose: '',
    agreeToContact: true,
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errors, setErrors] = useState({
    name: '',
    phone: '',
    email: '',
    purpose: '',
  })

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    let updatedValue = value

    if (name === 'name') {
      // Your Name field should not take numeric inputs
      updatedValue = value.replace(/\d/g, '')
    } else if (name === 'phone') {
      // Mobile Number takes only numeric inputs, prevent input after 10 numbers input
      updatedValue = value.replace(/\D/g, '').slice(0, 10)
    }

    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : updatedValue,
    }))

    // Clear validation error when user types
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: '',
      }))
    }
  }

  const validateForm = () => {
    let isValid = true
    const newErrors = { name: '', phone: '', email: '', purpose: '' }

    // Your Name validation
    if (!formData.name.trim()) {
      newErrors.name = 'Your Name is required'
      isValid = false
    } else if (/\d/.test(formData.name)) {
      newErrors.name = 'Your Name should not contain numeric inputs'
      isValid = false
    }

    // Mobile Number validation
    const digitsOnly = formData.phone.replace(/\D/g, '')
    if (!formData.phone.trim()) {
      newErrors.phone = 'Mobile Number is required'
      isValid = false
    } else if (digitsOnly.length < 10) {
      newErrors.phone = 'Mobile Number must be 10 digits'
      isValid = false
    }

    // Your Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!formData.email.trim()) {
      newErrors.email = 'Your Email is required'
      isValid = false
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
      isValid = false
    }

    // Purpose of Enquiry validation
    if (!formData.purpose.trim()) {
      newErrors.purpose = 'Purpose of enquiry is required'
      isValid = false
    }

    setErrors(newErrors)
    return isValid
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

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

      // Get URL parameters
      const urlParams = new URLSearchParams(window.location.search);

      const source =
        urlParams.get("utm_source") ||
        urlParams.get("source") ||
        "Direct";

      const subSource =
        urlParams.get("sub_source") ||
        urlParams.get("utm_medium") ||
        "";

      const campaignName =
        urlParams.get("utm_campaign") ||
        urlParams.get("campaign_name") ||
        "";

      const adGroup =
        urlParams.get("ad_group") ||
        urlParams.get("adgroup") ||
        urlParams.get("adset") ||
        "";

      // Create form data
      const data = new FormData();

      data.append("name", formData.name);
      data.append("phone", formData.phone);
      data.append("email", formData.email);
      data.append("purpose", formData.purpose);

      data.append("source", source);
      data.append("sub_source", subSource);
      data.append("campaign_name", campaignName);
      data.append("ad_group", adGroup);

      const response = await fetch(
        "/form-submit.php",
        {
          method: "POST",
          body: data,
        }
      );

      const result = await response.json();

      if (!result.success) {
        throw new Error(result.message);
      }

      window.location.href = "/senior-living-talegaon/thank-you/";

      // Reset form
      setFormData({
        name: '',
        phone: '',
        email: '',
        purpose: '',
        agreeToContact: true,
      })

      if (onSuccess) {
        onSuccess()
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
      <form onSubmit={handleSubmit} className="my-form" noValidate>
        <label className="form-lable">Your Name <span className="text-red-700">*</span></label>
        <div>
          <input
            type="text"
            placeholder="Enter your name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            aria-label="Type your name here"
            autoComplete="off"
            className="form-input"
          />
          {errors.name && <span className="field-required-error text-sm mt-1">{errors.name}</span>}
        </div>
        <label className="form-lable lable">Mobile Number <span className="text-red-700">*</span></label>
        <div>
          <input
            type="text"
            placeholder="+91"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            aria-label="Type your mobile number here"
            autoComplete="off"
            className="form-input"
          />
          {errors.phone && <span className="field-required-error text-sm mt-1">{errors.phone}</span>}
        </div>
        <label className="form-lable lable">Your Email <span className="text-red-700">*</span></label>
        <div>
          <input
            type="email"
            placeholder="Enter your email address"
            name="email"
            value={formData.email}
            onChange={handleChange}
            aria-label="Type your email here"
            autoComplete="off"
            className="form-input"
          />
          {errors.email && <span className="field-required-error text-sm mt-1">{errors.email}</span>}
        </div>
        <label className="form-lable lable">Purpose Of Enquiry <span className="text-red-700">*</span></label>
        <div>
          <select
            name="purpose"
            value={formData.purpose}
            onChange={handleChange}
            aria-label="Select purpose of enquiry"
            className={`form-input bg-white cursor-pointer font-sans ${!formData.purpose ? 'text-gray-400' : 'text-gray-800'}`}
          >
            <option value="" className="text-gray-400">Select..</option>
            <option value="Exploring active lifestyle for myself" className="text-gray-800">Exploring active lifestyle for myself</option>
            <option value="For parents or relatives" className="text-gray-800">For parents or relatives</option>
            <option value="Planning for future retirement" className="text-gray-800">Planning for future retirement</option>
          </select>
          {errors.purpose && <span className="field-required-error text-sm mt-1">{errors.purpose}</span>}
        </div>
        <div className="flex items-start gap-2.5 mt-6">
          <input
            type="checkbox"
            id="popup-agreeToContact"
            name="agreeToContact"
            checked={formData.agreeToContact}
            onChange={handleChange}
            className="mt-1 h-5 w-5 shrink-0 rounded border-gray-300 text-green-700 focus:ring-green-700 cursor-pointer"
          />
          <label htmlFor="popup-agreeToContact" className="text-sm text-gray-600 leading-normal select-none cursor-pointer">
            I authorise CradleOfLife & its representatives to contact me with updates and notifications via Email/SMS/What'sApp/Call. This will override DND/NDNC.
          </label>
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
        noValidate
      >
        {/* Name field */}
        <div className="relative col-span-12 sm:col-span-6 lg:col-span-4">
          <label className="font-medium text-gray-800">Your Name <span className="text-red-700">*</span></label>
          <div>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              aria-label="name"
              placeholder="Enter your name"
              autoComplete="off"
              className="mt-2 block w-full rounded-xl border border-gray-300 bg-white px-4 py-3 outline-none transition-all duration-300 ease-in-out"
            />
            {errors.name && <span className="field-required-error text-sm mt-1">{errors.name}</span>}
          </div>
        </div>

        {/* Mobile number field */}
        <div className="relative col-span-12 sm:col-span-6 lg:col-span-4">
          <label className="font-medium text-gray-800">Mobile Number <span className="text-red-700">*</span></label>
          <div>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+91"
              autoComplete="off"
              className="mt-2 block w-full rounded-xl border border-gray-300 bg-white px-4 py-3 outline-none transition-all duration-300 ease-in-out"
            />
            {errors.phone && <span className="field-required-error text-sm mt-1">{errors.phone}</span>}
          </div>
        </div>

        {/* Email Address field */}
        <div className="relative col-span-12 sm:col-span-6 lg:col-span-4">
          <label className="font-medium text-gray-800">Email Address <span className="text-red-700">*</span></label>
          <div>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              aria-label="email"
              placeholder="Enter your email"
              autoComplete="off"
              className="mt-2 block w-full rounded-xl border border-gray-300 bg-white px-4 py-3 outline-none transition-all duration-300 ease-in-out"
            />
            {errors.email && <span className="field-required-error text-sm mt-1">{errors.email}</span>}
          </div>
        </div>

        {/* Purpose Of Enquiry field */}
        <div className="relative col-span-12 sm:col-span-6 lg:col-span-8">
          <label className="font-medium text-gray-800">Purpose Of Enquiry<span className="text-red-700">*</span></label>
          <div>
            <select
              name="purpose"
              value={formData.purpose}
              onChange={handleChange}
              className={`mt-2 block w-full rounded-xl border border-gray-300 bg-white px-4 py-3 outline-none transition-all duration-300 ease-in-out cursor-pointer ${!formData.purpose ? 'text-gray-400' : 'text-gray-800'}`}
            >
              <option value="" className="text-gray-400">Select..</option>
              <option value="Exploring active lifestyle for myself" className="text-gray-800">Exploring active lifestyle for myself</option>
              <option value="For parents or relatives" className="text-gray-800">For parents or relatives</option>
              <option value="Planning for future retirement" className="text-gray-800">Planning for future retirement</option>
            </select>
            {errors.purpose && <span className="field-required-error text-sm mt-1">{errors.purpose}</span>}
          </div>
        </div>

        {/* Submit Button */}
        <div className="relative col-span-12 sm:col-span-6 lg:col-span-4">
          <label className="hidden lg:block font-medium text-transparent select-none">&nbsp;</label>
          <button
            type="submit"
            disabled={isSubmitting}
            className="mt-2 block w-full rounded-xl border bg-green-700 px-8 py-3 font-semibold text-white hover:bg-green-800 hover:text-gray-50 duration-200 cursor-pointer text-center"
          >
            {isSubmitting ? 'Submitting...' : buttonText || 'Talk To Us Today'}
          </button>
        </div>

        {/* Consent Checkbox */}
        <div className="col-span-12 flex items-start gap-2.5 pt-2">
          <input
            type="checkbox"
            id="inline-agreeToContact"
            name="agreeToContact"
            checked={formData.agreeToContact}
            onChange={handleChange}
            className="mt-1 h-5 w-5 shrink-0 rounded border-gray-300 text-green-700 focus:ring-green-700 cursor-pointer"
          />
          <label htmlFor="inline-agreeToContact" className="text-sm text-gray-600 leading-normal select-none cursor-pointer">
            I authorise CradleOfLife & its representatives to contact me with updates and notifications via Email/SMS/What'sApp/Call. This will override DND/NDNC.
          </label>
        </div>
      </form>
    )
  }


  // Default: variant === 'contact'
  return (
    <form
      onSubmit={handleSubmit}
      className="relative w-full space-y-4 rounded-xl bg-white p-4 shadow sm:p-12 md:p-8 lg:px-14 lg:py-16"
      noValidate
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
            placeholder="Enter your name"
            autoComplete="off"
            className="mt-2 block w-full rounded-lg border px-4 py-2 text-[18px] text-gray-800 md:mt-3 focus:outline-none focus:border-green-700 bg-white"
          />
          {errors.name && <span className="field-required-error text-sm mt-1">{errors.name}</span>}
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
            placeholder="+91"
            autoComplete="off"
            className="mt-2 block w-full rounded-lg border px-4 py-2 text-[18px] text-gray-800 md:mt-3 focus:outline-none focus:border-green-700 bg-white"
          />
          {errors.phone && <span className="field-required-error text-sm mt-1">{errors.phone}</span>}
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
            placeholder="Enter your email"
            autoComplete="off"
            className="mt-2 block w-full rounded-lg border px-4 py-2 text-[18px] text-gray-800 md:mt-3 focus:outline-none focus:border-green-700 bg-white"
          />
          {errors.email && <span className="field-required-error text-sm mt-1">{errors.email}</span>}
        </div>
      </div>
      {/* Purpose Of Enquiry field */}
      <div className="relative lg:pt-1">
        <label className="font-medium text-gray-800 font-['Inter']">
          Purpose Of Enquiry <span className="text-red-700">*</span>
        </label>
        <div>
          <select
            name="purpose"
            value={formData.purpose}
            onChange={handleChange}
            className={`mt-2 block w-full rounded-lg border px-4 py-2 text-[18px] md:mt-3 focus:outline-none focus:border-green-700 bg-white cursor-pointer ${!formData.purpose ? 'text-gray-400' : 'text-gray-800'}`}
          >
            <option value="" className="text-gray-400">Select..</option>
            <option value="Exploring active lifestyle for myself" className="text-gray-800">Exploring active lifestyle for myself</option>
            <option value="For parents or relatives" className="text-gray-800">For parents or relatives</option>
            <option value="Planning for future retirement" className="text-gray-800">Planning for future retirement</option>
          </select>
          {errors.purpose && <span className="field-required-error text-sm mt-1">{errors.purpose}</span>}
        </div>
      </div>
      {/* Consent Checkbox */}
      <div className="flex items-start gap-2.5 pt-2">
        <input
          type="checkbox"
          id="contact-agreeToContact"
          name="agreeToContact"
          checked={formData.agreeToContact}
          onChange={handleChange}
          className="mt-1 h-5 w-5 shrink-0 rounded border-gray-300 text-green-700 focus:ring-green-700 cursor-pointer"
        />
        <label htmlFor="contact-agreeToContact" className="text-sm text-gray-600 leading-normal select-none cursor-pointer">
          I authorise CradleOfLife & its representatives to contact me with updates and notifications via Email/SMS/What'sApp/Call. This will override DND/NDNC.
        </label>
      </div>
      <div className="relative pt-2 lg:pt-3">
        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-block w-full rounded-lg bg-green-700 px-5 py-2 text-center font-medium text-white transition-all duration-200 ease-in-out hover:bg-green-800 cursor-pointer"
        >
          {isSubmitting ? 'Submitting...' : buttonText || 'Get a Reply in 24 Hours'}
        </button>
      </div>
    </form>
  )
}

export default ContactForm
