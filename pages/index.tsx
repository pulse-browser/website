import type { NextPage } from 'next'
import Head from 'next/head'

import { Hero, Footer, HeaderContent } from '../components'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Pulse Browser - A better Firefox fork</title>
        <meta
          name="description"
          content="An experimental Firefox fork that enhances focus and increases work productivity due to its hyper minimalistic UI and built-in tools."
        />

        <meta
          property="og:title"
          content="Pulse Browser - An Experimental Firefox Fork"
        />
        <meta
          property="og:description"
          content="An experimental Firefox fork that enhances focus and increases work productivity due to its hyper minimalistic UI and built-in tools."
        />
        <meta property="og:type" content="article" />
        <meta property="og:image" content="/assets/promotional-embed.png" />

        <HeaderContent path="" />
      </Head>

      <Hero />

      <div id="features" className="container text-center m-auto p-8 md:p-24">
        <h2 className="font-bold text-4xl mb-8">Features</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-content-center gap-4 place-items-stretch text-left">
          <div className="p-8 flex items-center">
            <div>
              <h3 className="text-4xl pr-4">🍫</h3>
            </div>
            <div className="flex-shrink">
              <h3 className="font-bold text-xl pb-2">Sidebars</h3>
              <p>
                To get quick access to all your tools right at the side of the
                browser
              </p>
            </div>
          </div>
          <div className="p-8 flex items-center">
            <div>
              <h3 className="text-4xl pr-4">🗡️</h3>
            </div>
            <div className="flex-shrink">
              <h3 className="font-bold text-xl pb-2">Goodbye spyware</h3>
              <p>
                uBlock Origin, a wide spectrum blocker, is included right inside
                of the browser, blocking spyware on websites
              </p>
            </div>
          </div>
          <div className="p-8 flex items-center">
            <div>
              <h3 className="text-4xl pr-4">🍱</h3>
            </div>
            <div className="flex-shrink">
              <h3 className="font-bold text-xl pb-2">Hello customisability</h3>
              <p>
                Customize your interface with full browser themes, making it
                just right for you
              </p>
            </div>
          </div>
        </div>

        <div className='text-left max-w-3xl'>
          <h2 className='font-bold text-4xl mb-8'>Looking for new features</h2>
          <p>
            This is currently a combination of a tech demo and the browser that we want to daily drive. If you have ideas for what you want to see in the browser, we encourage you to let us know on <a href='https://github.com/pulse-browser/browser/discussions/categories/ideas' className='text-blue-800 underline cursor-pointer'>GitHub</a>.
          </p>
        </div>
      </div>

      {/* <div id="features" className="container text-center m-auto p-8 md:p-24">
        <h2 className="font-bold text-4xl mb-8">Features</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-content-center gap-4 place-items-stretch text-left">
          <div className="p-8 flex items-center">
            <div>
              <h3 className="text-4xl pr-4">🛡️</h3>
            </div>
            <div className="flex-shrink">
              <h3 className="font-bold text-xl pb-2">Removed telemetry</h3>
              <p>
                No one but you should know what you are doing in your browser.
              </p>
            </div>
          </div>
          <div className="p-8 flex items-center">
            <div>
              <h3 className="text-4xl pr-4">🗡️</h3>
            </div>
            <div className="flex-shrink">
              <h3 className="font-bold text-xl pb-2">Goodbye spyware</h3>
              <p>
                uBlock Origin, a wide spectrum blocker is included right inside
                of the browser, blocking spyware on websites
              </p>
            </div>
          </div>
          <div className="p-8 flex items-center">
            <div>
              <h3 className="text-4xl pr-4">🍱</h3>
            </div>
            <div className="flex-shrink">
              <h3 className="font-bold text-xl pb-2">Hello customisability</h3>
              <p>
                Customise your interface with full browser themes, making it
                just right for you
              </p>
            </div>
          </div>
          <div className="p-8 flex items-center">
            <div>
              <h3 className="text-4xl pr-4">🍫</h3>
            </div>
            <div className="flex-shrink">
              <h3 className="font-bold text-xl pb-2">Sidebars</h3>
              <p>
                To get quick access to all your tools right at the side of the
                browser
              </p>
            </div>
          </div>
          <div className="p-8 flex items-center">
            <div>
              <h3 className="text-4xl pr-4">💃</h3>
            </div>
            <div className="flex-shrink">
              <h3 className="font-bold text-xl pb-2">Emoji pickers</h3>
              <p>The right emoji for the occasion is just two clicks away</p>
            </div>
          </div>
          <div className="p-8 flex items-center">
            <div>
              <h3 className="text-4xl pr-4">🦊</h3>
            </div>
            <div className="flex-shrink">
              <h3 className="font-bold text-xl pb-2">Firefox based</h3>
              <p>Built on a fast, efficient, core</p>
            </div>
          </div>
        </div>
      </div>

      <div id="themes" className="container text-center m-auto p-8 md:p-24">
        <h2 className="font-bold text-4xl mb-8">Themes</h2>
        <p className="text-lg font-normal">
          Pulse Browser supports theming via addons to let users freely modify
          the browser UI to their needs and liking.
        </p>
        <p className="font-bold">We all love personalization. 🎨</p>
      </div>

      <div id="goals" className="container text-center m-auto p-8 md:p-24">
        <h2 className="font-bold text-4xl mb-8">Our Goals</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 place-content-center gap-4 place-items-stretch text-left">
          <div className="p-8 flex items-center">
            <div>
              <h3 className="text-4xl pr-4">
                <i className="bi bi-menu-button-fill"></i>
              </h3>
            </div>
            <div className="flex-shrink">
              <h3 className="font-bold text-xl pb-2">Minimalist UI</h3>
              <p>
                Minimalist ui that feels more native than firefox's (custom
                skin, not a rewrite)
              </p>
            </div>
          </div>

          <div className="p-8 flex items-center">
            <div>
              <h3 className="text-4xl pr-4">🤔</h3>
            </div>
            <div className="flex-shrink">
              <h3 className="font-bold text-xl pb-2">
                Open-Source Alternatives
              </h3>
              <p>
                Replace some internal firefox components with better open source
                alternatives (e.g. uBlock origin)
              </p>
            </div>
          </div>

          <div className="p-8 flex items-center">
            <div>
              <h3 className="text-4xl pr-4">
                <i className="bi bi-eraser-fill"></i>
              </h3>
            </div>
            <div className="flex-shrink">
              <h3 className="font-bold text-xl pb-2">Telemetry</h3>
              <p>Remove mozilla's telemetry, ads and pocket</p>
            </div>
          </div>
        </div>
      </div> */}

      <Footer />
    </div>
  )
}

export default Home
