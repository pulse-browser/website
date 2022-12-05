import { GetServerSideProps } from 'next'
import Head from 'next/head'
import 'bootstrap-icons/font/bootstrap-icons.css'

import { Nav, Button, Footer, HeaderContent } from '../components'
import { Release, Releases, releases } from '../data/releases'
import { ReactElement } from 'react'

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
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

const DownloadComponent = ({
  imageSrc,
  children,
  releaseInfo,
}: {
  imageSrc: string
  children: ReactElement
  releaseInfo?: Release
}) => (
  <div className="bg-pulse-grey-850 md:flex p-4 m-4 justify-between rounded-lg">
    <div className="inline-flex">
      <img src={imageSrc} className="w-32 h-32" />
      <div>{children}</div>
    </div>
    <div className="">
      {releaseInfo ? (
        <>
          {releaseInfo.binaries.map((release) => (
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
)

const Downloads = ({ releases }: { releases: Releases }) => {
  return (
    <div className="container m-auto bg-pulse-grey-900 text-pulse-grey-100">
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

        <DownloadComponent
          imageSrc="https://raw.githubusercontent.com/pulse-browser/assets/main/alpha/pulse-alpha.png"
          releaseInfo={releases.alpha}
        >
          <>
            <h2 className="text-1xl font-bold">Alpha builds</h2>
            <div className="text-pulse-grey-200 md:mt-4">
              Get the latest features with less stability and polish
            </div>
            <div className="text-pulse-grey-300">
              Released on: {releases.alpha?.releaseDate || 'none'}
            </div>
          </>
        </DownloadComponent>

        <DownloadComponent
          imageSrc="https://raw.githubusercontent.com/pulse-browser/assets/main/beta/pulse-beta.png"
          releaseInfo={releases.beta}
        >
          <>
            <h2 className="text-1xl font-bold">Beta builds</h2>
            <div className="text-pulse-grey-200 md:mt-4">
              Get slightly more stable and polished builds but still with a risk
              of crashes
            </div>
            <div className="text-pulse-grey-300">
              Released on: {releases.beta?.releaseDate || 'none'}
            </div>
          </>
        </DownloadComponent>

        <DownloadComponent
          imageSrc="https://raw.githubusercontent.com/pulse-browser/assets/main/stable/pulse-stable.png"
          releaseInfo={releases.stable}
        >
          <>
            <h2 className="text-1xl font-bold">Stable builds</h2>
            <div className="text-pulse-grey-200 md:mt-4">
              Stable builds with more features than firefox
            </div>
            <div className="text-pulse-grey-300">
              Released on: {releases.stable?.releaseDate || 'none'}
            </div>
          </>
        </DownloadComponent>
      </div>

      <Footer />
    </div>
  )
}

export default Downloads
