import { HiX } from 'react-icons/hi'
import ContactForm from './ContactForm'

const ContactPopup = ({ isOpen, onClose }) => {
  if (!isOpen) return null

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
          <ContactForm variant="popup" onSuccess={onClose} />
        </div>
      </div>
    </div>
  )
}

export default ContactPopup
