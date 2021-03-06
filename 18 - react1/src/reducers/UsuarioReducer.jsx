const initialState = {
  name: 'Visitante',
  contador: 0
}
const UsuarioReducer = (state = initialState, action) => {


  // eslint-disable-next-line default-case
  switch(action.type){
    case 'SET_NAME':

    return  {...state, name: action.payload.name}
    // eslint-disable-next-line no-unreachable
    break;
    case 'INCREMENT_CONTADOR':
      let newCount = state.contador +1
      return {...state, contador:newCount}

    
  }

  return state
};

export default UsuarioReducer