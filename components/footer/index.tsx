import Link from 'next/link'

export const Footer = () => (
  <footer className="p-8 text-center">
    &copy; {new Date().getFullYear()} TrickyPR, PressJump and contributors under{' '}
    <Link href={'/legal/license'}>
      <a className="text-pulse-secondary-200 underline cursor-pointer">
        MPL 2.0
      </a>
    </Link>{' '}
    -{' '}
    <Link href={'/legal/privacy-policy'}>
      <a className="text-pulse-secondary-200 underline cursor-pointer">
        Privacy Policy
      </a>
    </Link>
  </footer>
)
