import { ComponentProps } from 'react'
import { User } from 'phosphor-react'
import { AvatarContainer, AvatarFallback, AvatarImage } from './styles'

export interface AvatarImageProps extends ComponentProps<typeof AvatarImage> {}

export function Avatar(avatarImageProps: AvatarImageProps) {
  return (
    <AvatarContainer>
      <AvatarImage {...avatarImageProps} />
      <AvatarFallback delayMs={600}>
        <User />
      </AvatarFallback>
    </AvatarContainer>
  )
}

Avatar.displayName = 'Avatar'
