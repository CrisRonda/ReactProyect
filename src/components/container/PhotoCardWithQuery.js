import React from 'react'
import { PhotoCard } from '../PhotoCard'

import { gql } from 'apollo-boost'
import { Query } from 'react-apollo'

const GET_SINGLE_PHOTO = gql`
query getSinglePhoto($id: ID!){
  photo(id: $id){
    id
    categoryId
    src
    likes
    userId
    liked
  }
}
`
export const PhotoCardWithQuery = ({ id }) => (
  <Query query={GET_SINGLE_PHOTO} variables={{ id }}>
    {
      ({ loading, error, data }) => {
        const { photo = {} } = data
        return <PhotoCard {...photo} />
      }
    }
  </Query>
)
