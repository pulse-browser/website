import { useEffect, useState } from 'react'
import { Octokit, App } from 'octokit'

export interface Binary {
  name: string
  url: string
  size: number
  id: number
}

export interface Releases {
  alphaLoading: boolean
  alpha?: {
    binaries: Binary[]
    releaseDate: Date
  }

  betaLoading: boolean
  beta?: {
    binaries: Binary[]
    releaseDate: Date
  }

  stableLoading: boolean
  stable?: {
    binaries: Binary[]
    releaseDate: Date
  }
}

export const useReleases = () => {
  const [releases, setReleases] = useState<Releases>({
    alphaLoading: true,
    betaLoading: true,
    stableLoading: true,
  })

  useEffect(() => {
    const octokit = new Octokit({})

    octokit.rest.repos
      .listReleases({ owner: 'pulse-browser', repo: 'browser' })
      .then((ghReleses) => {
        const alpha = ghReleses.data.find(
          ({ prerelease, target_commitish }) =>
            prerelease && target_commitish == 'alpha'
        )

        setReleases((releases) => ({ ...releases, alphaLoading: false }))

        if (alpha) {
          setReleases((releases) => ({
            ...releases,
            alpha: {
              binaries: alpha.assets.map(
                ({ name, browser_download_url, size, id }) => ({
                  name,
                  url: browser_download_url,
                  size,
                  id,
                })
              ),
              releaseDate: new Date(alpha.published_at || ''),
            },
          }))
        }

        const beta = ghReleses.data.find(
          ({ prerelease, target_commitish }) =>
            prerelease && target_commitish == 'beta'
        )

        setReleases((releases) => ({ ...releases, betaLoading: false }))

        if (beta) {
          setReleases((releases) => ({
            ...releases,
            beta: {
              binaries: beta.assets.map(
                ({ name, browser_download_url, size, id }) => ({
                  name,
                  url: browser_download_url,
                  size,
                  id,
                })
              ),
              releaseDate: new Date(beta.published_at || ''),
            },
          }))
        }

        const stable = ghReleses.data.find(
          ({ prerelease, target_commitish }) =>
            prerelease && target_commitish == 'stable'
        )

        setReleases((releases) => ({ ...releases, stableLoading: false }))

        if (stable) {
          setReleases((releases) => ({
            ...releases,
            stable: {
              binaries: stable.assets.map(
                ({ name, browser_download_url, size, id }) => ({
                  name,
                  url: browser_download_url,
                  size,
                  id,
                })
              ),
              releaseDate: new Date(stable.published_at || ''),
            },
          }))
        }
      })
  }, [])

  return releases
}
