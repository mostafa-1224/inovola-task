const initialState = {
  username: '',
  password: ''
};
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SAVE_USER_DATA':
      return {
        username: action.payload.username,
        password: action.payload.password
      };
    default:
      return state;
  }
};
export default userReducer;
