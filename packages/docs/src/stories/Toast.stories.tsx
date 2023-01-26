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
        <ToastProvider>
          <Card
            as="label"
            css={{
              display: 'flex',
              flexDirection: 'column',
              gap: '$2',
              minHeight: 300,
              overflow: 'hidden',
            }}
          >
            {Story()}
          </Card>
        </ToastProvider>
      )
    },
  ],
} as Meta<ToastProps>

export const Primary: StoryObj<ToastProps> = {}
