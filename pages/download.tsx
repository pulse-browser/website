import Head from 'next/head'
import 'bootstrap-icons/font/bootstrap-icons.css'

import { Nav, Button, Footer, HeaderContent } from '../components'
import { Releases, releases } from '../data/releases'

export async function getServerSideProps({ req, res }) {
  // Vercel will serve a cached page for half a day.
  //
  // If the page is 3 days old, it will reevaluate in 
  // the background, but still serve the user a cached
  // page for speed.
  //
  // This is primarily to improve webpage performance
  // so long as we retain two visitors per day.
  res.setHeader(
    'Cache-Control',
    'public, s-maxage=720, stale-while-revalidate=4320'
  )
  
  return {
    props: {
      releases: await releases(),
    },
  }
}

const Downloads = ({ releases }: { releases: Releases }) => {
  return (
    <div className="container m-auto">
      <Head>
        <title>Download Pulse Browser</title>
        <meta
          name="description"
          content="An experimental Firefox fork that enhances focus and increases work productivity due to its hyper minimalistic UI and built-in tools."
        />

        <meta property="og:title" content="Pulse Browser - Download" />
        <meta
          property="og:description"
          content="An experimental Firefox fork that enhances focus and increases work productivity due to its hyper minimalistic UI and built-in tools."
        />
        <meta property="og:type" content="article" />
        <meta property="og:image" content="/assets/promotional-embed.png" />

        <HeaderContent path="downloads" />
      </Head>

      <Nav />

      <div className="p-4">
        <h1 className="text-4xl font-bold m-2">Downloads</h1>

        <div className="bg-gray-100 flex p-4 m-4 justify-between outline outline-offset-2 outline-gray-600">
          <div className="inline-flex">
            <img
              src="https://raw.githubusercontent.com/pulse-browser/assets/main/alpha/pulse-alpha.png"
              className="w-32 h-32"
            />
            <div>
              <h2 className="text-1xl font-bold">Alpha builds</h2>
              <div className="text-gray-700 mt-4">
                Get the latest features at the with less stability and polish
              </div>
              <div>Released on: {releases.alpha?.releaseDate || 'none'}</div>
            </div>
          </div>
          <div className="">
            {releases.alpha ? (
              <>
                {releases.alpha.binaries.map((release) => (
                  <Button
                    href={release.url}
                    key={release.id}
                    type="toned-secondary"
                    className="block mb-1"
                    pingName="Download"
                    pingProps={{ file: release.name, branch: 'alpha' }}
                  >
                    <i className="bi bi-download"></i> {release.name}
                  </Button>
                ))}
              </>
            ) : (
              <p>No releases</p>
            )}
          </div>
        </div>

        <div className="bg-gray-100 flex p-4 m-4 justify-between">
          <div className="inline-flex">
            <img
              src="https://raw.githubusercontent.com/pulse-browser/assets/main/beta/pulse-beta.png"
              className="w-32 h-32"
            />
            <div>
              <h2 className="text-1xl font-bold">Beta builds</h2>
              <div className="text-gray-700 mt-4">
                Get slightly more stable and polished builds but still with a
                risk of crashes
              </div>
              <div>Released on: {releases.beta?.releaseDate || 'none'}</div>
            </div>
          </div>
          <div>
            {releases.beta ? (
              <>
                {releases.beta.binaries.map((release) => (
                  <Button
                    href={release.url}
                    key={release.id}
                    type="toned-secondary"
                    className="block mb-1"
                    pingName="Download"
                    pingProps={{ file: release.name, branch: 'beta' }}
                  >
                    <i className="bi bi-download"></i> {release.name}
                  </Button>
                ))}
              </>
            ) : (
              <p>No releases</p>
            )}
          </div>
        </div>

        <div className="bg-gray-100 flex p-4 m-4 justify-between">
          <div className="inline-flex">
            <img
              src="https://raw.githubusercontent.com/pulse-browser/assets/main/stable/pulse-stable.png"
              className="w-32 h-32"
            />
            <div>
              <h2 className="text-1xl font-bold">Stable builds</h2>
              <div className="text-gray-700 mt-4">
                Stable builds with more features than firefox
              </div>
              <div>Released on: {releases.stable?.releaseDate || 'none'}</div>
            </div>
          </div>
          <div>
            {releases.stable ? (
              <>
                {releases.stable.binaries.map((release) => (
                  <Button
                    href={release.url}
                    key={release.id}
                    type="toned-secondary"
                    className="block mb-1"
                    pingName="Download"
                    pingProps={{ file: release.name, branch: 'stable' }}
                  >
                    <i className="bi bi-download"></i> {release.name}
                  </Button>
                ))}
              </>
            ) : (
              <p>No releases</p>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Downloads
