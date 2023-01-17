import * as Toast from '@radix-ui/react-toast'
import { keyframes, styled } from '../../styles'

const slideIn = keyframes({
  from: {
    transform: 'translateX(8%)',
  },
  to: {
    transform: 'translateX(0)',
  },
})

const slideOut = keyframes({
  from: {
    transform: 'translateX(0)',
  },
  to: {
    transform: 'translateX(8%)',
  },
})

export const ToastContainer = styled(Toast.Root, {
  backgroundColor: '$gray800',
  display: 'flex',
  flexDirection: 'column',
  padding: '$3 $5',
  gap: '$1',
  border: '1px solid $gray600',
  borderRadius: '$sm',
  width: '320px',
  bottom: '2rem',
  right: '2rem',
  position: 'absolute',

  div: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',

    svg: {
      color: '$gray200',
      cursor: 'pointer',

      '&:hover': {
        color: '$gray400',
      },
    },
  },

  '&[data-state="open"]': {
    animation: `${slideIn} 200ms ease-out`,
  },

  '&[data-state="closed"]': {
    animation: `${slideOut} 200ms ease-out`,
  },
})
