import React from 'react'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import {
  Container,
  ImgAvatar,
  P,
  AvatarContent,
  ContainerSkeleton
} from './styles'
import useUser from '../../hooks/useUser'
export default function Avatar() {
  const user = useUser()
  return (
    <Container>
      {user ? (
        <AvatarContent>
          <ImgAvatar
            alt={user.userName}
            src={user.avatar}
            title={user.userName}
          />
          <P>{user.userName}</P>
        </AvatarContent>
      ) : (
        <SkeletonTheme color="#202020" highlightColor="#444">
          <ContainerSkeleton>
            <Skeleton
              circle={true}
              height={50}
              width={50}
              style={{ margin: '0 1rem 0 0' }}
            />
            <Skeleton count={1} height={30} width={200} style={{ margin: 0 }} />
          </ContainerSkeleton>
        </SkeletonTheme>
      )}
    </Container>
  )
}
