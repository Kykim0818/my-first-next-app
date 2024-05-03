import { Content } from '@/app/Content'
import type { Meta, StoryObj } from '@storybook/react'
import { expect, userEvent, within } from '@storybook/test'

const meta = {
  title: 'pages/App',
  component: Content,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
    nextjs: {
      appDirectory: true,
    },
  },
} satisfies Meta<typeof Content>

export default meta
type Story = StoryObj<typeof meta>

export const GoDashBoard: Story = {}

// More on interaction testing: https://storybook.js.org/docs/writing-tests/interaction-testing
export const LoggedIn: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const loginButton = canvas.getByRole('button', { name: /Log in/i })
    await expect(loginButton).toBeInTheDocument()
    await userEvent.click(loginButton)
    await expect(loginButton).not.toBeInTheDocument()

    const logoutButton = canvas.getByRole('button', { name: /Log out/i })
    await expect(logoutButton).toBeInTheDocument()
  },
}
