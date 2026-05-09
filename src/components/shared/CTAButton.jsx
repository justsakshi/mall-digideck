export default function CTAButton({ children, onClick, href, className = '', variant = 'gold' }) {
  const Tag = href ? 'a' : 'button'
  const props = href ? { href, target: '_blank', rel: 'noopener noreferrer' } : { onClick }

  if (variant === 'ghost') {
    return (
      <Tag
        {...props}
        className={`btn-gold ${className}`}
        style={{ borderColor: 'rgba(255,255,255,0.3)', color: 'rgba(255,255,255,0.7)' }}
      >
        {children}
      </Tag>
    )
  }

  return (
    <Tag {...props} className={`btn-gold ${className}`}>
      {children}
    </Tag>
  )
}
