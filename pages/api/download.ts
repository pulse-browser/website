import type { NextApiRequest, NextApiResponse } from 'next'
import { releases } from '../../data/releases'

interface RequestQuery {
  platform?: 'windows' | 'macos' | 'linux' | string
  channel?: 'alpha' | 'beta' | 'stable' | string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { platform, channel } = req.query as RequestQuery

  if (!platform) {
    res.status(400).json({
      code: 1,
      error: 'Missing platform',
    })
    return
  }

  if (!channel) {
    res.status(400).json({
      code: 2,
      error: 'Missing channel',
    })
    return
  }

  if (channel !== 'alpha' && channel !== 'beta' && channel !== 'stable') {
    res.status(400).json({
      code: 3,
      error: 'Invalid channel. Try alpha, beta or stable',
    })
    return
  }

  if (platform !== 'windows' && platform !== 'macos' && platform !== 'linux') {
    res.status(400).json({
      code: 4,
      error: 'Invalid platform. Try windows, macos or linux',
    })
    return
  }

  const releaseChannels = await releases()

  if (!releaseChannels[channel]) {
    res.status(400).json({
      code: 5,
      error: `No releases found for ${channel}`,
    })
    return
  }

  const release = releaseChannels[channel]

  if (!release || !release.binaries) {
    res.status(400).json({
      code: 6,
      error: `No binaries found for ${channel}`,
    })
    return
  }

  const binary = release.binaries.find((binary) =>
    binary.name.includes(platform.replace('windows', 'exe'))
  )

  if (!binary) {
    res.status(400).json({
      code: 7,
      error: `No binaries found for ${platform}`,
    })
    return
  }

  res.redirect(307, binary.url)
}
