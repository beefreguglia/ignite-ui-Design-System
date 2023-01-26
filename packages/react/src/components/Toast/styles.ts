import * as Toast from '@radix-ui/react-toast'
import { keyframes, styled } from '../../styles'

const hide = keyframes({
  '0%': { opacity: 1 },
  '100%': { opacity: 0 },
})

const slideIn = keyframes({
  from: { transform: `translateX(2rem)` },
  to: { transform: 'translateX(0)' },
})

const swipeOut = keyframes({
  from: { transform: 'translateX(var(--radix-toast-swipe-end-x))' },
  to: { transform: `translateX(calc(100% + 2rem))` },
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
  overflow: 'hidden',

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
    animation: `${slideIn} 200ms cubic-bezier(0.16, 1, 0.3, 1)`,
  },
  '&[data-state="closed"]': {
    animation: `${hide} 100ms ease-in`,
  },
  '&[data-swipe="move"]': {
    transform: 'translateX(var(--radix-toast-swipe-move-x))',
  },
  '&[data-swipe="cancel"]': {
    transform: 'translateX(0)',
    transition: 'transform 200ms ease-out',
  },
  '&[data-swipe="end"]': {
    animation: `${swipeOut} 100ms ease-out`,
  },
})
