import userReducers from './userReducers'
import deepFreeze from 'deep-freeze'

describe('Test User Reducers', () => {
  it('should return the default state', () => {
    expect(
      userReducers(undefined, {})
    ).toEqual([])
  })
  describe('Test ADD_USER action', () => {
    it('should add an user to an empty state', () => {
      let initialState = []
      deepFreeze(initialState)
      expect(
        userReducers(initialState, {type: 'ADD_USER', userName: 'ramirozap'})
      ).toEqual([{name: 'ramirozap'}])
    })

    it('should add another user to the state', () => {
      let initialState = [{name: 'ramirozap'}]
      deepFreeze(initialState)
      expect(
        userReducers(initialState, {type: 'ADD_USER', userName: 'acyd'})
      ).toEqual([{name: 'ramirozap'},{name: 'acyd'}])
    })
  })
  describe('Test DELETE_USER action', () => {
    it('should remove an user from the state', () => {
      let initialState = [{name: 'ramirozap'}]
      deepFreeze(initialState)
      expect(
        userReducers(initialState, {type: 'DELETE_USER', userName: 'ramirozap'})
      ).toEqual([])
    })
  })
})
