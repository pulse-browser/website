import { useEffect, useState } from 'react'
import { Octokit, App } from 'octokit'

export interface Binary {
  name: string
  url: string
  size: number
  id: number
}

export interface Release {
  binaries: Binary[]
  releaseDate: string
}

export interface Releases {
  alpha?: Release
  beta?: Release
  stable?: Release
}

function getReleasesOnBranch<T>(
  ghReleases: { data: T[] },
  branchName: string
): T | undefined {
  return ghReleases.data.find(
    ({ target_commitish }: any) => target_commitish == branchName
  )
}

function getNewData(data: any): any {
  return {
    binaries: data.assets.map(
      ({ name, browser_download_url, size, id }: any) => ({
        name,
        url: browser_download_url,
        size,
        id,
      })
    ),
    releaseDate: new Date(data.published_at || '').toLocaleDateString(),
  }
}

export async function releases(): Promise<Releases> {
  let releases: Releases = {}

  const octokit = new Octokit({})

  // Get all available releases
  const ghReleases = await octokit.rest.repos.listReleases({
    owner: 'pulse-browser',
    repo: 'browser',
  })

  // Grab alpha data and store it for later
  const alpha = getReleasesOnBranch(ghReleases, 'alpha')

  if (alpha) {
    releases.alpha = getNewData(alpha)
  }

  // Grab beta data and store it for later
  const beta = getReleasesOnBranch(ghReleases, 'beta')

  if (beta) {
    releases.beta = getNewData(beta)
  }

  const stable = getReleasesOnBranch(ghReleases, 'stable')

  if (stable) {
    releases.stable = getNewData(stable)
  }

  return releases
}
