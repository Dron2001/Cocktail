import React, { useEffect } from 'react'
import { Text, SectionList, StyleSheet } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { getCocktails, getFilters } from '../../modules/actions'
import { Cocktail } from '../../components'

const Drinks = () => {
  const { cocktails = [], filters = [] } = useSelector(state => state.session)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getFilters())
  }, [])

  useEffect(() => {
    if (filters.length) {
      dispatch(getCocktails(filters[0]))
    }
  }, [filters])

  const getNextCategories = () => {
    if (cocktails.length === filters.length) return
    const name = filters[cocktails.length]
    dispatch(getCocktails(name))
  }

  return (
    <SectionList
      style={s.container}
      sections={cocktails}
      keyExtractor={item => item.strDrink}
      initialNumToRender={10}
      renderItem={({ item }) => <Cocktail {...item} />}
      renderSectionHeader={({ section: { title } }) => <Text style={s.sectionTitle}>{title}</Text>}
      onEndReached={getNextCategories}
      removeClippedSubviews
    />
  )
}

const s = StyleSheet.create({
  container: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 14,
    color: '#7E7E7E',
    marginBottom: 20,
  },
})

export default Drinks
