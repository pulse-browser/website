import Link from 'next/link'

import { Button } from '..'
import 'bootstrap-icons/font/bootstrap-icons.css'

export const Nav = () => (
  <nav className="p-8 place-content-center flow-root">
    <div className="float-left">
      <Link href="/">
        <img
          src="https://raw.githubusercontent.com/pulse-browser/assets/main/pulse-logo.png"
          alt="Pulse Logo"
          className="h-16"
        />
      </Link>
    </div>
    <div className=" float-right">
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
