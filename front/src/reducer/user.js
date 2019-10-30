const tokenFromLocalStorage = localStorage.getItem('login');

const initialState = {
  token: tokenFromLocalStorage,
};

const user = (state = initialState, action ) =>{
  switch(action.type){
    case 'USER_REGISTER' : {
      return {...action.user};
    }
    default:
      return state;
  }
}

export default user;