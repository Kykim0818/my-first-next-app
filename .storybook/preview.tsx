import type { Preview } from '@storybook/react'
import React from 'react'
import StoreProvider from '../src/app/StoreProvider'

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => {
      return (
        <StoreProvider>
          <Story />
        </StoreProvider>
      )
    },
  ],
}

export default preview
