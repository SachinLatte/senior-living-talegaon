import React from 'react'

const FloatingActions = () => {
  return (
    <div className="fixed right-3 bottom-3 z-50 grid gap-3">
      <a href="https://enquiry.cradleoflife.in/v/call" target="_blank" rel="noopener noreferrer">
        <img
          src="/img/call-icon.webp"
          alt="call logo"
          loading="lazy"
          width="44"
          height="44"
          className="h-11 w-auto cursor-pointer hover:scale-110 transition-transform duration-200"
        />
      </a>
      <a href="https://enquiry.cradleoflife.in/v/whatsapp" target="_blank" rel="noopener noreferrer">
        <img
          src="/img/whatsapp-icon.webp"
          alt="whatsapp logo"
          loading="lazy"
          width="44"
          height="44"
          className="h-11 w-auto cursor-pointer hover:scale-110 transition-transform duration-200"
        />
      </a>
    </div>
  )
}

export default FloatingActions
