import { createStore, combineReducers, applyMiddleware } from 'redux'; // Import your addUserReducer here
// import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { all_Users, singleUser } from './Reducer/Reducer';

const rootReducer = combineReducers({
    all:all_Users,
    single:singleUser
});


const store = createStore(rootReducer,applyMiddleware(thunk));

export default store;
