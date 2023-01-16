import { Meta, StoryObj } from '@storybook/react'
import { Avatar, AvatarImageProps } from '@bfreguglia-ignite-ui/react'

export default {
  title: 'Data display/Avatar',
  component: Avatar,
  argTypes: {
    src: {
      control: {
        type: 'text',
      },
    },
  },
  args: {
    src: 'https://github.com/beefreguglia.png',
    alt: 'Bernardo Freguglia',
  },
} as Meta<AvatarImageProps>

export const Primary: StoryObj<AvatarImageProps> = {}

export const WithFallback: StoryObj<AvatarImageProps> = {
  args: {
    src: undefined,
    alt: '',
  },
}
