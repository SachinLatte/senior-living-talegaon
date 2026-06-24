import LazyImage from './LazyImage'

const TestimonialBanner = () => {
  return (
    <section className="max-w-7xl px-6 mx-auto pt-0 pb-20">
      <LazyImage
        src="/img/testimonial-desktop.webp"
        alt="testimonial image"
        width={1232}
        height={135}
        className="hidden lg:block w-full"
      />
      <LazyImage
        src="/img/testimonial-mobile-2.webp"
        alt="testimonial image"
        width={756}
        height={309}
        className="block lg:hidden w-full"
      />
    </section>
  )
}

export default TestimonialBanner
