import C from '../constants';

const defaultState = {
  isLoading: false,
  isError: '',
  entities: [],
};

export default (state = defaultState, action) => {
  const { type, payload } = action;

  switch (type) {
    case C.FETCH_WEATHER + C.START_LOADING:
      return { ...state, isLoading: true, isError: '' };
    case C.FETCH_WEATHER + C.ERROR_LOADING:
      return { ...state, isError: payload, isLoading: false };
    case C.FETCH_WEATHER + C.FINISH_LOADING:
      return { ...state, isLoading: false, isError: '', entities: [...state.entities, payload] };
    case C.REMOVE_CITY:
      return { ...state, entities: state.entities.filter((item) => item.id !== payload) };
    default:
      return state;
  }
}
