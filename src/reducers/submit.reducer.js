import { submitConstants } from '../constants';

const initialState = {
  isPreparing: false,
  isLoading: false
};

export function submit(state = initialState, action) {
  switch (action.type) {
    case submitConstants.PREPARE_START:
      return Object.assign({}, state, {
        isPreparing: true
      });
    case submitConstants.PREPARE_END:
      return Object.assign({}, state, {
        isPreparing: false
      });
    case submitConstants.SUBMIT_START:
      return Object.assign({}, state, {
        isLoading: true
      });
    case submitConstants.SUBMIT_END:
      return Object.assign({}, state, {
        isLoading: false
      });
    default:
      return state
  }
}