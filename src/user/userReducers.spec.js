import userReducers from './userReducers'

describe('Test User Reducers',()=>{
  it('should add an user to the state', () => {
      let state = []
      state = userReducers(state,{type: 'ADD_USER', userName: 'ramirozap'})
      expect(state).toEqual([{userName: 'ramirozap'}])
  });
  it('should add another user to the state', () => {
      let state = [{userName: 'ramirozap'}]
      state = userReducers(state,{type: 'ADD_USER', userName: 'acyd'})
      expect(state).toEqual([{userName: 'ramirozap'},{userName: 'acyd'}])
  });
});
