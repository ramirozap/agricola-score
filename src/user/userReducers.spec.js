import userReducers from './userReducers'
import deepFreeze from 'deep-freeze'

describe('Test User Reducers',()=>{
  it('should add an user to the state', () => {
    let initialState = []
    deepFreeze(initialState)
    expect(
      userReducers(initialState, {type: 'ADD_USER', userName: 'ramirozap'})
    ).toEqual([{name: 'ramirozap'}])
  });

  it('should add another user to the state', () => {
    let initialState = [{name: 'ramirozap'}]
    deepFreeze(initialState)
    expect(
      userReducers(initialState, {type: 'ADD_USER', userName: 'acyd'})
    ).toEqual([{name: 'ramirozap'},{name: 'acyd'}])
  });

  it('should remove an user from the state', () => {
    let initialState = [{name: 'ramirozap'}]
    deepFreeze(initialState)
    expect(
      userReducers(initialState, {type: 'DELETE_USER', userName: 'ramirozap'})
    ).toEqual([])
  });
});
