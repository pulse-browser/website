import Link from 'next/link'
import { FC, MouseEventHandler } from 'react'
import { ping } from '../../data/ping'

type ButtonType = 'primary' | 'toned-secondary' | 'text' | 'large-text'

const InternalButton: FC<{
  type: ButtonType
  className?: string
  onClick?: MouseEventHandler<HTMLButtonElement>
  children?: React.ReactNode
}> = ({ children, type, className, onClick }) => (
  <button
    onClick={onClick}
    className={`${
      type == 'primary'
        ? 'bg-pulse-primary-500 bg-opacity-30 transition duration-500 hover:bg-opacity-50 text-pulse-primary-100'
        : ''
    } ${
      type == 'toned-secondary'
        ? 'bg-pulse-secondary-400 bg-opacity-30 transition duration-500 hover:bg-opacity-50 text-pulse-secondary-100'
        : ''
    } ${
      type == 'text'
        ? 'text-gray-100 px-4 py-2 transition duration-500 ease select-none hover:bg-gray-200'
        : ''
    } ${
      type == 'large-text'
        ? 'border-gray-100 text-gray-700 px-6 py-4 transition duration-500 ease select-none hover:bg-gray-200'
        : ''
    } font-bold py-2 px-4 rounded-lg ${className}`}
  >
    {children}
  </button>
)

export const Button: FC<{
  href?: string
  type?: ButtonType
  className?: string
  pingName?: string
  pingProps?: Record<string, string>
  children?: React.ReactNode
}> = ({ children, href, type, className, pingName, pingProps }) => (
  <>
    {href ? (
      <Link href={href}>
        <a className={className}>
          <InternalButton
            type={type || 'text'}
            onClick={(e) => {
              if (!pingName) return

              ping(pingName, { props: pingProps })

              // Bodge, if we are going to navigate away, we have to delay the
              // navigation to allow time for the ping to take into effect
              if (href.startsWith('http')) {
                e.preventDefault()
                setTimeout(() => (location.href = href), 150)
              }
            }}
          >
            {children}
          </InternalButton>
        </a>
      </Link>
    ) : (
      <InternalButton
        type={type || 'text'}
        className={className}
        onClick={() => {
          if (!pingName) return
          ping(pingName, { props: pingProps })
        }}
      >
        {children}
      </InternalButton>
    )}
  </>
)
