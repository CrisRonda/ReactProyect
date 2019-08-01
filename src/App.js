import React from 'react'
import { ListOfCategories } from './components/ListOfCategories'
import { GlobalStyle } from './styles/GlobalStyles'
// import { ListOfPhotoCard } from './components/container/ListOfPhotoCards'
import { Logo } from './components/Logo'
import { PhotoCardWithQuery } from './components/container/PhotoCardWithQuery'
import { ListOfPhotoCardsWithQuery } from './components/container/ListOfPhotoCardsWithQuery'
export const App = () => {
  const urlParams = new window.URLSearchParams(window.location.search)
  const detailId = urlParams.get('detail')
  return (<>
    <GlobalStyle />
    <Logo />
    {
      detailId ? <PhotoCardWithQuery id={detailId} />
        : <>
          <ListOfCategories />
          {/* <ListOfPhotoCard categoryId={4} /> */}
          <ListOfPhotoCardsWithQuery categoryId={1} />
        </>
    }

  </>)
}
