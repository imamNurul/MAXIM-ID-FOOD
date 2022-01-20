import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import { alert } from './alert.reducer';
import { submit } from './submit.reducer';

const rootReducer = combineReducers({

    alert,
    submit,

    routing: routerReducer


})

export default rootReducer;