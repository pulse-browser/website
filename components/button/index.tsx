import Link from 'next/link'
import { FC } from 'react'

type ButtonType =
  | 'primary'
  | 'toned-secondary'
  | 'text'
  | 'download'
  | 'large-text'

const InternalButton: FC<{ type: ButtonType; className?: string }> = ({
  children,
  type,
  className,
}) => (
  <button
    className={`${
      type == 'primary'
        ? 'bg-blue-500 transition duration-500 hover:bg-blue-700 text-white'
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
        ? 'bg-blue-500  hover:bg-blue-700 text-white px-6 py-4 shadow-md hover:outline outline-offset-2 outline-blue-500 transition duration-500'
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
}> = ({ children, href, type, className }) => (
  <>
    {href ? (
      <Link href={href}>
        <a className={className}>
          <InternalButton type={type || 'text'}>{children}</InternalButton>
        </a>
      </Link>
    ) : (
      <InternalButton type={type || 'text'} className={className}>
        {children}
      </InternalButton>
    )}
  </>
)
