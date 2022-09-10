import Link from 'next/link'
import Image from 'next/image'

import { Button } from '..'
import logo from '../../public/assets/pulse-logo.png'
import 'bootstrap-icons/font/bootstrap-icons.css'

export const Nav = () => (
  <nav className="flex p-2 lg:p-8 items-center justify-between">
    <div className="float-left">
      <Link href="/">
        <a>
          <Image
            src={logo}
            alt="Pulse Logo"
            width={64}
            height={64}
            layout="fixed"
          />
        </a>
      </Link>
    </div>
    <div className="float-right">
      <Button type="text" href="https://discord.com/invite/xNkretH7sD">
        <i className="bi bi-discord"></i>
      </Button>
      <Button type="text" href="https://github.com/pulse-browser/browser">
        <i className="bi bi-github"></i>
      </Button>
      <Button type="primary" href="/download">
        <i className="bi bi-download"></i> Download
      </Button>
    </div>
  </nav>
)
