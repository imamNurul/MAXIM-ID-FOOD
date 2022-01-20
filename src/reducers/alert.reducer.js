import { alertConstants } from '../constants';
import { LOCATION_CHANGE } from 'react-router-redux';

const initialState = {
  type: null,
  message: null,
  modal: false
};

export function alert(state = initialState, action) {
  switch (action.type) {
    case alertConstants.SUCCESS:
      return Object.assign({}, state, {
        type: 'success',
        message: action.message
      });
    case alertConstants.ERROR:
      return Object.assign({}, state, {
        type: 'danger',
        message: action.message
      });
    case alertConstants.MODAL:
      return Object.assign({}, state, {
        modal: !state.modal
      });
    case alertConstants.MODAL_SHOW:
      return Object.assign({}, state, {
        modal: true
      });
    case alertConstants.MODAL_HIDE:
      return Object.assign({}, state, {
        modal: false
      });
    case LOCATION_CHANGE:
      return {};
    case alertConstants.CLEAR:
      return {};
    default:
      return state
  }
}