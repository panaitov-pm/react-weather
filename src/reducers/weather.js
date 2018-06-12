import C from '../constants';

const defaultState = {
  isLoading: false,
  isError  : '',
  entities : [],
  forecast : {}
};

export default ( state = defaultState, action ) => {
  const { type, payload, weather, forecast } = action;

  switch ( type ) {
    case C.FETCH_WEATHER + C.START_LOADING:
    case C.EDIT_CITY + C.START_LOADING:
      return { ...state, isLoading: true, isError: '' };
    case C.FETCH_WEATHER + C.ERROR_LOADING:
      return { ...state, isError: payload, isLoading: false };
    case C.FETCH_WEATHER + C.FINISH_LOADING:
      return {
        ...state,
        isLoading: false,
        isError  : '',
        entities : [...state.entities, weather],
        forecast : { ...forecast }
      };
    case C.EDIT_CITY + C.FINISH_LOADING:
      return { ...state, isLoading: false, isError: '', entities: [...weather], forecast: { ...forecast } };
    case C.REMOVE_CITY:
      return { ...state, entities: state.entities.filter( ( item ) => item.id !== payload ) };
    default:
      return state;
  }
}
