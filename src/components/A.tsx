import Link from 'next/link'

const defaultLinkStyles = "underline text-blue-600 hover:text-blue-800 visited:text-purple-600"

export default function A(props: React.AllHTMLAttributes<HTMLAnchorElement>) {
  const { href, children, ...rest } = props
  const isInternalLink = href && (href.startsWith('/') || href.startsWith('#'))

  if (isInternalLink) {
    return (
      <Link href={href as any} passHref={true}>
        <a className={defaultLinkStyles} {...rest}>{children}</a>
      </Link>
    )
  }

  return (
    <a target="_blank" rel="noopener noreferrer" href={href} className={defaultLinkStyles} {...rest}>
      {children}
    </a>
  )
}