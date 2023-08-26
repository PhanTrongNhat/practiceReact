import { combineReducers } from 'redux';

import appDeviceReducer from 'slice/appDeviceSlice';

const rootReducer = combineReducers({
  appDevice: appDeviceReducer,
});

export default rootReducer;
