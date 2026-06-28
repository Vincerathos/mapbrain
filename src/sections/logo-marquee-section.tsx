const marqueeLogos = Array.from({ length: 10 }, (_, index) => ({
  id: `logo-marquee-${index + 1}`,
  src: '/logo-mapbrain.png'
}))

export function LogoMarqueeSection() {
  const loopedLogos = [...marqueeLogos, ...marqueeLogos]

  return (
    <section
      aria-label="Partenaires visuels"
      className="relative -mt-4 border-b border-[var(--line)] bg-[var(--surface)]"
    >
      <div className="section-shell mx-auto max-w-[1720px] overflow-hidden px-4 sm:px-6 lg:px-8">
        <div className="logo-marquee-track flex min-w-max items-center gap-14">
          {loopedLogos.map((logo, index) => (
            <div
              key={`${logo.id}-${index}`}
              className="flex h-10 w-[10.5rem] shrink-0 items-center justify-center"
            >
              <img
                alt=""
                aria-hidden="true"
                className="logo-marquee-mark h-9 w-auto object-contain"
                loading="lazy"
                src={logo.src}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
