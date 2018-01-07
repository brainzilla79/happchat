import { combineReducers } from "redux";
import SessionReducer from './session_reducer';
import ErrorsReducer from './errors_reducer';
import ChannelsReducer from './channels_reducer';

export default combineReducers({
  session: SessionReducer,
  errors: ErrorsReducer,
  channels: ChannelsReducer
});