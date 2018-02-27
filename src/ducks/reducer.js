import { combineReducers } from 'redux';
import UserReducer from './UserReducer';

const reducer = combineReducers({
    user: UserReducer
    // network: NetworkReducer,
    // event: EventReducer
})

export default reducer;