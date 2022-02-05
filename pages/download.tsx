import type { NextPage } from "next";
import Head from "next/head";
import "bootstrap-icons/font/bootstrap-icons.css";

import { Nav, Button, Footer } from "../components";
import { useReleases } from "../data/releases";

const Downloads: NextPage = () => {
  const releases = useReleases();
  console.log(releases);

  return (
    <div className="container m-auto">
      <Head>
        <title>Download Pulse Browser</title>
        <meta
          name="description"
          content="An experimental Firefox fork that enhances focus and increases work productivity due to its hyper minimalistic UI and built-in tools."
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://pulsebrowser.app/download" />

        <meta property="og:title" content="Pulse Browser - Download" />
        <meta
          property="og:description"
          content="An experimental Firefox fork that enhances focus and increases work productivity due to its hyper minimalistic UI and built-in tools."
        />
        <meta property="og:type" content="article" />
        <meta property="og:image" content="/assets/promotional-embed.png" />
      </Head>

      <Nav />

      <div className="p-4">
        <h1 className="text-4xl font-bold m-2">Downloads</h1>

        <div className="bg-gray-100 flex p-4 m-4 justify-between">
          <div>
            <h2 className="text-1xl font-bold">Alpha builds</h2>
            <div className="text-gray-700 mt-4">
              Get the latest features at the with less stability and polish
            </div>
            <div>
              Released on:{" "}
              {releases.alpha?.releaseDate.toLocaleDateString() || "none"}
            </div>
          </div>
          <div>
            {releases.alphaLoading ? (
              <p>Loading...</p>
            ) : releases.alpha ? (
              <>
                {releases.alpha.binaries.map((release) => (
                  <Button
                    href={release.url}
                    key={release.id}
                    type="toned-secondary"
                    className="block mb-1"
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
          <div>
            <h2 className="text-1xl font-bold">Beta builds</h2>
            <div className="text-gray-700 mt-4">
              Get slightly more stable and pollished builds but still with a
              risk of crashes
            </div>
            <div>
              Released on:{" "}
              {releases.beta?.releaseDate.toLocaleDateString() || "none"}
            </div>
          </div>
          <div>
            {releases.betaLoading ? (
              <p>Loading...</p>
            ) : releases.beta ? (
              <>
                {releases.beta.binaries.map((release) => (
                  <Button
                    href={release.url}
                    key={release.id}
                    type="toned-secondary"
                    className="block mb-1"
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
          <div>
            <h2 className="text-1xl font-bold">Stable builds</h2>
            <div className="text-gray-700 mt-4">
              Stable builds with more features than firefox
            </div>
            <div>
              Released on:{" "}
              {releases.stable?.releaseDate.toLocaleDateString() || "none"}
            </div>
          </div>
          <div>
            {releases.stableLoading ? (
              <p>Loading...</p>
            ) : releases.stable ? (
              <>
                {releases.stable.binaries.map((release) => (
                  <Button
                    href={release.url}
                    key={release.id}
                    type="toned-secondary"
                    className="block mb-1"
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
  );
};

export default Downloads;
