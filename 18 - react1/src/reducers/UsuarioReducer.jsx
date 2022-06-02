const initialState = {
  name: ''
}
const UsuarioReducer = (state = initialState, action) => {


  // eslint-disable-next-line default-case
  switch(action.type){
    case 'SET_NAME':

    return  {...state, name: action.payload.name}
    // eslint-disable-next-line no-unreachable
    break;
  }

  return state
};

export default UsuarioReducer