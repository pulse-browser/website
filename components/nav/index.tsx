import Link from 'next/link'
import Image from 'next/image'

import { Button } from '..'
import logo from '../../public/assets/pulse-logo.png'
import githubLogo from '../../public/assets/GitHub-Mark-32px.png'
import discord from '../../public/assets/discord.svg'
import download from '../../public/assets/downloads.svg'

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
        <Image src={githubLogo} layout="fixed" width={16} height={16} />
      </Button>
      <Button type="text" href="https://github.com/pulse-browser/browser">
        <Image
          src={discord}
          alt="GitHub Logo"
          layout="fixed"
          width={16}
          height={16}
        />
      </Button>
      <Button type="primary" href="/download">
        <Image
          src={download}
          alt="Download icon"
          layout="fixed"
          width={16}
          height={16}
        />{' '}
        Download
      </Button>
    </div>
  </nav>
)
