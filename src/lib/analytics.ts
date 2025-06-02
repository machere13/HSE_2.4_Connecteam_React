import ReactGA from 'react-ga4'

import { config } from '@/config'

const GA_TRACKING_ID = 'G-D6N7DTKDT6'

export const initGA = () => {
  ReactGA.initialize(GA_TRACKING_ID, {
    testMode: config.mocked,
  })

  if (config.mocked) {
    console.log('GA initialized in test mode')
  }
}

export const logPageView = (url: string) => {
  ReactGA.send({ hitType: 'pageview', page: url })

  if (config.mocked) {
    console.log('GA pageview:', url)
  }
}
