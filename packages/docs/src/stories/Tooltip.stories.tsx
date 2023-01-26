import { Meta, StoryObj } from '@storybook/react'
import {
  Card,
  Tooltip,
  TooltipProps,
  TooltipProvider,
} from '@bfreguglia-ignite-ui/react'
import { Plus } from 'phosphor-react'

export default {
  title: 'Overlay/Tooltip',
  component: Tooltip,
  args: {
    children: (
      <Card
        css={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          div: {
            backgroundColor: '$ignite300',
            width: '$8',
            height: '$8',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '$full',
            cursor: 'pointer',

            svg: {
              color: '$white',
            },
          },
        }}
      >
        <div>
          <Plus weight="bold" />
        </div>
      </Card>
    ),
    text: 'Add a new message',
  },
  argTypes: {
    children: {
      control: {
        type: 'null',
      },
    },
  },
  decorators: [
    (Story) => {
      return (
        <TooltipProvider>
          <Card
            as="label"
            css={{
              display: 'flex',
              flexDirection: 'column',
              gap: '$2',
              minHeight: 300,
              padding: '$3 $4',
            }}
          >
            {Story()}
          </Card>
        </TooltipProvider>
      )
    },
  ],
} as Meta<TooltipProps>

export const Primary: StoryObj<TooltipProps> = {}
