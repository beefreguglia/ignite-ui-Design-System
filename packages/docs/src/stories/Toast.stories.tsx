import { Meta, StoryObj } from '@storybook/react'
import {
  Card,
  Toast,
  ToastProps,
  ToastProvider,
} from '@bfreguglia-ignite-ui/react'

export default {
  title: 'Overlay/Toast',
  component: Toast,
  args: {
    open: true,
    title: 'Scheduled: Catch up',
    description: 'Monday: January 16, 2023',
  },
  decorators: [
    (Story) => {
      return (
        <Card
          as="label"
          css={{
            display: 'flex',
            flexDirection: 'column',
            gap: '$2',
            position: 'relative',
            minHeight: 100,
          }}
        >
          <ToastProvider>{Story()}</ToastProvider>
        </Card>
      )
    },
  ],
} as Meta<ToastProps>

export const Primary: StoryObj<ToastProps> = {}
