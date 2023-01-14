import { Meta, StoryObj } from '@storybook/react'
import { Card, CardProps, Text } from '@ignite-ui/react'

export default {
  title: 'Surfaces/Card',
  component: Card,
  args: {
    children: <Text>Testando o elemento Box</Text>,
  },
} as Meta<CardProps>

export const Primary: StoryObj<CardProps> = {}
