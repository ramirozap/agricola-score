import { addUser } from './userActions'

describe('users actions', () => {
  it('should create an action to add a user', () => {
    const userName = 'ramirozap'
    const expectedAction = {
      type: 'ADD_USER',
      userName
    }
    expect(addUser(userName)).toEqual(expectedAction)
  })
})
