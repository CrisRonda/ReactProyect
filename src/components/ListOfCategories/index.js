import React, { useEffect, useState } from 'react'
import { Category } from '../Category'
import { Item, List } from './styles'

function useCategoriesData () {
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(function () {
    setLoading(true)
    window.fetch('https://petgram-server.midudev.now.sh/categories')
      .then(res => res.json())
      .then(response => {
        setCategories(response)
        setLoading(false)
      })
  }, [])
  return { categories, loading }
}
export const ListOfCategories = () => {
  const { categories, loading } = useCategoriesData()
  const [showFixed, setshowFixed] = useState(false)
  const renderList = (fixed) => (<List fixed={fixed}>{
    loading ? <Item key='loading'><Category /></Item> : categories.map(category => <Item key={category.id}><Category {...category} /></Item>)
  }</List>)

  useEffect(function () {
    const onScroll = e => {
      window.scrollY > 200 ? setshowFixed(true) : setshowFixed(false)
    }
    document.addEventListener('scroll', onScroll)
    return () => document.removeEventListener('scroll', onScroll)
  }, [showFixed])
  return (<>
    {renderList()}
    {showFixed && renderList(true)}</>)
}
