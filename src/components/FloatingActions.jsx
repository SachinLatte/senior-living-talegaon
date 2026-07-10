import React from 'react'

const FloatingActions = () => {
  return (
    <div className="fixed right-3 bottom-3 z-50 grid gap-3">
      <a href="tel:+916209506070">
        <img
          src="/images/call-icon.webp"
          alt="call logo"
          loading="lazy"
          width="44"
          height="44"
          className="h-11 w-auto cursor-pointer hover:scale-110 transition-transform duration-200"
        />
      </a>
      <a href="https://api.whatsapp.com/send/?phone=%2B918983012334&text=Hi&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer">
        <img
          src="/images/whatsapp-icon.webp"
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
