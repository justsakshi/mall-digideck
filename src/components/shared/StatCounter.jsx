import { useEffect, useRef, useState } from 'react'
import { useInView } from 'react-intersection-observer'

export default function StatCounter({ end, suffix = '', prefix = '', duration = 2000, label, sublabel }) {
  const [count, setCount] = useState(0)
  const [started, setStarted] = useState(false)
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true })

  useEffect(() => {
    if (inView && !started) {
      setStarted(true)
      const startTime = performance.now()
      const endValue = parseFloat(end)

      const update = (currentTime) => {
        const elapsed = currentTime - startTime
        const progress = Math.min(elapsed / duration, 1)
        const eased = 1 - Math.pow(1 - progress, 3)
        setCount(eased * endValue)
        if (progress < 1) requestAnimationFrame(update)
      }

      requestAnimationFrame(update)
    }
  }, [inView, started, end, duration])

  const displayValue = () => {
    const val = parseFloat(end)
    if (Number.isInteger(val)) {
      return Math.round(count).toLocaleString()
    }
    return count.toFixed(1)
  }

  return (
    <div ref={ref} className="flex flex-col gap-2">
      <div className="stat-number">
        {prefix}{displayValue()}{suffix}
      </div>
      <span className="label-text" style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.6rem' }}>{label}</span>
      {sublabel && <span className="body-text text-xs">{sublabel}</span>}
    </div>
  )
}
