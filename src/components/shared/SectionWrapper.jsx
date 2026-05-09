import { useInView } from 'react-intersection-observer'

export default function SectionWrapper({ id, children, className = '', style = {} }) {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <section
      id={id}
      ref={ref}
      className={`section-full ${className}`}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(20px)',
        transition: 'opacity 0.9s ease, transform 0.9s ease',
        ...style,
      }}
    >
      {children}
    </section>
  )
}
