import { combineReducers } from 'redux';

import storage from './storage';
import route from './route';
import auth from './auth';
import activity from './activity';
import location from './location';
import direction from './direction';
import friends from './friends';
import forgot from './forgot';

/**
 * appReducer using combineReducers The resulting reducer calls every child reducer
 * and gathers their results into a single state object.
 */
const appReducer = combineReducers({
    storage,
    route,
    auth,
    activity,
    location,
    direction,
    friends,
    forgot
});

/**
 * rootReducer handling logout action
 * @param  state  type of data which changes in component and rerenders
 * @param  action tells reducer to perform certain actions
 * @return {appReducer} return state to all child reducers of appReducer
 */
const rootReducer = (state, action) => {
    if (action.type === 'USER_LOGOUT') {
        state = undefined;
    }
    return appReducer(state, action);
};

export default rootReducer;
