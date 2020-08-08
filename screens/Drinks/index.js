import React, { useEffect } from 'react'
import { View, Text } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { getCocktails, getFilters } from '../../modules/actions'

const Drinks = () => {
  const state = useSelector(state => state.session)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getCocktails('Ordinary Drink'))
    dispatch(getFilters())
  }, [])

  return (
    <View>
      <Text>Drsinks</Text>
    </View>
  )
}

export default Drinks
