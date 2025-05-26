import type { Preview } from '@storybook/react'
import '../src/index.css'

import { initialize, mswDecorator } from 'msw-storybook-addon'

initialize()

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    nextjs: {
      appDirectory: true,
    },
    viewport: {
      viewports: {
        mobileSmall: {
          name: 'Mobile (320px)',
          styles: {
            width: '320px',
            height: '568px',
          },
          type: 'mobile',
        },
        mobileLarge: {
          name: 'Mobile (440px)',
          styles: {
            width: '440px',
            height: '956px',
          },
          type: 'mobile',
        },
        tablet: {
          name: 'Tablet (768px)',
          styles: {
            width: '768px',
            height: '1024px',
          },
          type: 'tablet',
        },
        desktopSmall: {
          name: 'Desktop (1280px)',
          styles: {
            width: '1280px',
            height: '720px',
          },
          type: 'desktop',
        },
        desktop: {
          name: 'Desktop (1440px)',
          styles: {
            width: '1440px',
            height: '1024px',
          },
          type: 'desktop',
        },
        desktopLarge: {
          name: 'Desktop (1920px)',
          styles: {
            width: '1920px',
            height: '1080px',
          },
          type: 'desktop',
        },
      },
      defaultViewport: 'desktop',
    },
    layout: 'fullscreen',
    backgrounds: {
      default: 'light',
      values: [
        { name: 'light', value: '#ffffff' },
        { name: 'dark', value: '#1a1a1a' },
      ],
    },
  },
  decorators: [mswDecorator],
}

export default preview
