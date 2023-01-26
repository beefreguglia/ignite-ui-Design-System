import * as TooltipPrimitive from '@radix-ui/react-tooltip'
import { ComponentProps, ReactNode } from 'react'
import { Text } from '../Text'
import { TooltipContainer } from './styles'

export interface TooltipProps extends ComponentProps<typeof TooltipContainer> {
  children: ReactNode
  text: string
}

export function Tooltip({ children, text, ...rest }: TooltipProps) {
  return (
    <TooltipPrimitive.Root>
      <TooltipPrimitive.Trigger asChild>{children}</TooltipPrimitive.Trigger>
      <TooltipPrimitive.Portal>
        <TooltipContainer {...rest}>
          <Text size="sm">{text}</Text>
          <TooltipPrimitive.Arrow />
        </TooltipContainer>
      </TooltipPrimitive.Portal>
    </TooltipPrimitive.Root>
  )
}

export interface TooltipProviderProps
  extends ComponentProps<typeof TooltipPrimitive.Provider> {
  children: ReactNode
}

export function TooltipProvider({ children, ...rest }: TooltipProviderProps) {
  return (
    <TooltipPrimitive.Provider {...rest}>{children}</TooltipPrimitive.Provider>
  )
}
