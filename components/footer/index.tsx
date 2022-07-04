import Link from 'next/link'

export const Footer = () => (
  <footer className="p-8 text-center">
    &copy; {new Date().getFullYear()} TrickyPR, PressJump and contributors under{' '}
    <Link href={'/legal/license'}>
      <span className="text-blue-800 underline cursor-pointer">MPL 2.0</span>
    </Link>{' '}
    -{' '}
    <Link href={'/legal/privacy-policy'}>
      <span className="text-blue-800 underline cursor-pointer">
        Privacy Policy
      </span>
    </Link>
  </footer>
)
