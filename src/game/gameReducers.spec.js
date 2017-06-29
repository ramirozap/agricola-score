import gameReducers from './gameReducers'
import deepFreeze from 'deep-freeze'

describe('Test User Reducers', () => {
  it('should return the default state', () => {
    expect(
      gameReducers(undefined, {})
    ).toEqual([])
  })
  describe('Test ADD_PLAYER action', () => {
    it('should create a game', () => {
      let initialState = []
      deepFreeze(initialState)
      expect(
        gameReducers(initialState, {
          type: 'ADD_PLAYER',
          player: {
            name: 'ramiro',
            color: 'blue'
          }
        })
      ).toEqual([{
        name: 'ramiro',
        color: 'blue'
      }])
    })
  })
})
