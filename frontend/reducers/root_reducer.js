import { combineReducers } from "redux";
import SessionReducer from './session_reducer';
import ErrorsReducer from './errors_reducer';
import ChannelsReducer from './channels_reducer';
import MessageReducer from './message_reducer';
import UsersReducer from './users_reducer';

export default combineReducers({
  session: SessionReducer,
  errors: ErrorsReducer,
  channels: ChannelsReducer,
  messages: MessageReducer,
  users: UsersReducer
});