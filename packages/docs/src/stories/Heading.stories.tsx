import { Meta, StoryObj } from '@storybook/react'
import { Heading, HeadingProps } from '@bfreguglia-ignite-ui/react'

export default {
  title: 'Typography/Heading',
  component: Heading,
  argTypes: {
    size: {
      options: ['sm', 'md', 'lg', 'xl', '2xl', '4xl', '5xl', '6xl'],
      control: {
        type: 'inline-radio',
      },
    },
  },
  args: {
    children: 'Custom Title',
  },
} as Meta<HeadingProps>

export const Primary: StoryObj<HeadingProps> = {}

export const CustomTag: StoryObj<HeadingProps> = {
  args: {
    children: 'H1 Heading',
    as: 'h1',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Por padrão o heading sempre sera um `h2`, mas podemos alterar isto com a propriedade `as`',
      },
    },
  },
}
