import React from 'react'
import { Article, Img, IgmWrapper, Button } from './styles'
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md'
import { useLocalStorage } from '../../hooks/useLocalStorage'
import { useNearScreen } from '../../hooks/useNearScreen'

export const PhotoCard = ({ id, likes = 0, src }) => {
  const [show, element] = useNearScreen()
  const key = `like-${id}`
  const [liked, setLiked] = useLocalStorage(key, false)

  const Icon = liked ? MdFavorite : MdFavoriteBorder

  return (
    <Article ref={element}>
      {show && <><a href={`/?detail=${id}`}>
        <IgmWrapper>
          <Img src={src} />
        </IgmWrapper>
      </a>
        <Button onClick={() => setLiked(!liked)}>
          <Icon size='32px' />{likes} likes!
        </Button></>}
    </Article>)
}
