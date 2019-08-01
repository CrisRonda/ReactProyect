import React from 'react'
import { PhotoCard } from '../PhotoCard'

import { gql } from 'apollo-boost'
import { Query } from 'react-apollo'
const GET_PHOTOS = gql`
  query getPhotos($categoryId: ID){
  photos(categoryId: $categoryId){
    id
    categoryId
    src
    likes
    userId
    liked
  }
}
`
const renderPropListPhotos = ({ loading, error, data }) => {
  if (loading) return <p>Cargando....</p>
  if (error) return <p>Ha pasado algo! Recarga por favor</p>
  const { photos = [] } = data
  return (
    <ul>
      {photos.map(photo => <PhotoCard key={photo.id} {...photo} />)}
    </ul>
  )
}
export const ListOfPhotoCardsWithQuery = ({ categoryId }) => (
  <Query query={GET_PHOTOS} variables={{ categoryId }}>
    {renderPropListPhotos}
  </Query>
)
