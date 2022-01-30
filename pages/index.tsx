import type { NextPage } from 'next'
import Head from 'next/head'
import 'bootstrap-icons/font/bootstrap-icons.css'

import { Hero, Footer } from '../components'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Focus Browser</title>
        <meta
          name="description"
          content="An experimental Firefox fork that enhances focus and increases work productivity due to its hyper minimalistic UI and built-in tools."
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://pulsebrowser.app/" />

        <meta property="og:title" content="Focus Browser - An Experimental Firefox Fork" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/assets/promotional-embed.png" />
      </Head>

      <Hero />

      <div id="features" className="container text-center m-auto p-16">
        <h2 className="font-bold text-4xl mb-8">Features</h2>

        <div className="grid grid-cols-3 place-content-center gap-4 place-items-stretch text-left">
          <div className="p-8 flex items-center">
            <div>
              <h1 className="text-4xl pr-4">🛡️</h1>
            </div>
            <div className="flex-shrink">
              <h1 className="font-bold text-xl pb-2">Removed telemetry</h1>
              <p>
                Noone but you should know what you are doing in your browser.
              </p>
            </div>
          </div>
          <div className="p-8 flex items-center">
            <div>
              <h1 className="text-4xl pr-4">🗡️</h1>
            </div>
            <div className="flex-shrink">
              <h1 className="font-bold text-xl pb-2">Goodbye spyware</h1>
              <p>
                uBlock Origin, a wide spectrum blocker is included right inside
                of the browser, blocking spyware on website
              </p>
            </div>
          </div>
          <div className="p-8 flex items-center">
            <div>
              <h1 className="text-4xl pr-4">🍱</h1>
            </div>
            <div className="flex-shrink">
              <h1 className="font-bold text-xl pb-2">Hello customisability</h1>
              <p>
                Customise your interface with full browser themes, making it
                just right for you
              </p>
            </div>
          </div>
          <div className="p-8 flex items-center">
            <div>
              <h1 className="text-4xl pr-4">🍫</h1>
            </div>
            <div className="flex-shrink">
              <h1 className="font-bold text-xl pb-2">Sidebars</h1>
              <p>
                To get quick access to all your tools right at the side of the
                browser
              </p>
            </div>
          </div>
          <div className="p-8 flex items-center">
            <div>
              <h1 className="text-4xl pr-4">💃</h1>
            </div>
            <div className="flex-shrink">
              <h1 className="font-bold text-xl pb-2">Emoji pickers</h1>
              <p>The right emoji for the occasion is just two clicks away</p>
            </div>
          </div>
          <div className="p-8 flex items-center">
            <div>
              <h1 className="text-4xl pr-4">🦊</h1>
            </div>
            <div className="flex-shrink">
              <h1 className="font-bold text-xl pb-2">Firefox based</h1>
              <p>Built on a fast, efficient, core</p>
            </div>
          </div>
        </div>
      </div>

      <div id="themes" className="container text-center m-auto p-32">
        <h2 className="font-bold text-4xl mb-8">Themes</h2>
        <p className="text-lg font-normal">Pulse Browser supports theming via addons to let users freely modify the browser UI to their needs and liking.</p>
        <p className="font-bold">We all love personalization. 🎨</p>
      </div>

      <div id="goals" className="container text-center m-auto p-32">
        <h2 className="font-bold text-4xl mb-8">Our Goals</h2>
        <div className="grid grid-cols-3 place-content-center gap-4 place-items-stretch text-left">
          <div className="p-8 flex items-center">
            <div>
              <h1 className="text-4xl pr-4"><i className="bi bi-menu-button-fill"></i></h1>
            </div>
            <div className="flex-shrink">
              <h1 className="font-bold text-xl pb-2">Minimalist UI</h1>
              <p>
                Minimalist ui that feels more native than firefox's 
                (custom skin, not a rewrite)
              </p>
            </div>
          </div>

          <div className="p-8 flex items-center">
            <div>
              <h1 className="text-4xl pr-4">🤔</h1>
            </div>
            <div className="flex-shrink">
              <h1 className="font-bold text-xl pb-2">Open-Source Alternatives</h1>
              <p>
                Replace some internal firefox components with better open source alternatives (e.g. uBlock origin)
              </p>
            </div>
          </div>
          
          <div className="p-8 flex items-center">
            <div>
              <h1 className="text-4xl pr-4"><i className="bi bi-eraser-fill"></i></h1>
            </div>
            <div className="flex-shrink">
              <h1 className="font-bold text-xl pb-2">Telemetry</h1>
              <p>
                Remove mozilla's telemetry, ads and pocket
              </p>
            </div>
          </div>
        </div>
      </div>


      <Footer />
      <script>
        feather.replace()
      </script>
    </div>
  )
}

export default Home
