import React from 'react'
import { Img, IgmWrapper, Button } from './styles'
import { MdFavoriteBorder } from 'react-icons/md'

const DEFAULT_IMAGE = 'https://images.unsplash.com/photo-1452857297128-d9c29adba80b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
export const PhotoCard = ({ id, liked, src }) => {
  return (
    <article>
      <a href={`/detail/${id}`}>
        <IgmWrapper>
          <Img src={DEFAULT_IMAGE} />
        </IgmWrapper>
      </a>
      <Button> <MdFavoriteBorder size='32px' />{liked} likes!</Button>
    </article>)
}
