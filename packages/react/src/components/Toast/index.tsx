import { ComponentProps } from 'react'
import { Heading } from '../Heading'
import { Text } from '../Text'
import { ToastContainer } from './styles'
import * as ToastRadix from '@radix-ui/react-toast'
import { X } from 'phosphor-react'

export interface ToastProps extends ComponentProps<typeof ToastContainer> {
  title: string
  description: string
}

export function Toast({ title, description, ...props }: ToastProps) {
  return (
    <ToastContainer {...props}>
      <div>
        <ToastRadix.Title asChild>
          <Heading size="sm" color="$white">
            {title}
          </Heading>
        </ToastRadix.Title>
        <ToastRadix.Close asChild>
          <X weight="bold" size={20} />
        </ToastRadix.Close>
      </div>
      <ToastRadix.Description asChild>
        <Text size="sm" color="$gray200">
          {description}
        </Text>
      </ToastRadix.Description>
    </ToastContainer>
  )
}

export interface ToastProviderProps
  extends ComponentProps<typeof ToastRadix.Provider> {}

export function ToastProvider({ children, ...props }: ToastProviderProps) {
  return (
    <ToastRadix.Provider duration={400} {...props}>
      {children}
      <ToastRadix.Viewport />
    </ToastRadix.Provider>
  )
}
Toast.displayName = 'Toast'
