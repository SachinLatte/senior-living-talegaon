import { HiX } from 'react-icons/hi'

const ContactPopup = ({ isOpen, onClose }) => {
  if (!isOpen) return null

  const handleSubmit = (e) => {
    e.preventDefault()
    // Form submission logic
    alert('Thank you! We will get back to you within 24 hours.')
    onClose()
  }

  return (
    <div className="bg-black-1" onClick={onClose}>
      <div className="pop-up" onClick={(e) => e.stopPropagation()}>
        <div className="pop-up-1">
          <div className="close-popup">
            <span className="close-icon" onClick={onClose}>
              <HiX className="w-6 h-6 icon-color" />
            </span>
          </div>
          <h3 className="form-title">Contact Us Now</h3>
          <form onSubmit={handleSubmit} className="my-form">
            <label className="form-lable">Your Name</label>
            <div>
              <input
                type="text"
                placeholder=""
                name="name"
                aria-label="Type your name here"
                required
                autoComplete="off"
                className="form-input"
              />
            </div>
            <label className="form-lable lable">Mobile Number</label>
            <div>
              <input
                type="text"
                placeholder=""
                name="phone"
                defaultValue="+91"
                required
                aria-label="Type your mobile number here"
                autoComplete="off"
                className="form-input"
              />
            </div>
            <label className="form-lable lable">Your Email</label>
            <div>
              <input
                type="text"
                placeholder=""
                name="email"
                required
                aria-label="Type your email here"
                autoComplete="off"
                className="form-input"
              />
            </div>
            <button type="submit" className="button-1">
              Get Reply in 24 Hours
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ContactPopup
