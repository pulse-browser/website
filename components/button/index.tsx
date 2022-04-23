import Link from 'next/link'
import { FC, MouseEventHandler } from 'react'
import { ping } from '../../data/ping'

type ButtonType =
  | 'primary'
  | 'toned-secondary'
  | 'text'
  | 'download'
  | 'large-text'

const InternalButton: FC<{
  type: ButtonType
  className?: string
  onClick?: MouseEventHandler<HTMLButtonElement>
}> = ({ children, type, className, onClick }) => (
  <button
    onClick={onClick}
    className={`${
      type == 'primary'
        ? 'bg-blue-600 transition duration-500 hover:bg-blue-800 text-white'
        : ''
    } ${
      type == 'toned-secondary'
        ? 'bg-indigo-100 transition duration-500 hover:bg-indigo-200'
        : ''
    } ${
      type == 'text'
        ? 'border-gray-100 text-gray-700 px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-200'
        : ''
    } ${
      type == 'download'
        ? 'bg-blue-600  hover:bg-blue-800 text-white px-6 py-4 shadow-md hover:outline outline-offset-2 outline-blue-600 transition duration-500'
        : ''
    } ${
      type == 'large-text'
        ? 'border-gray-100 text-gray-700 px-6 py-4 m-2 transition duration-500 ease select-none hover:bg-gray-200'
        : ''
    } font-bold py-2 px-4 ${className}`}
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
