import { styled } from '../../styles'
import { Content, Arrow } from '@radix-ui/react-tooltip'

export const TooltipContainer = styled(Content, {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: '$gray900',
  borderRadius: '$md',
  padding: '$3 $4',
  filter: 'drop-shadow(4px 16px 24px rgba(0, 0, 0, 0.25))',
})

export const TooltipArrow = styled(Arrow, {
  width: '$4',
  height: '$2',
  background: '$gray900',
})
