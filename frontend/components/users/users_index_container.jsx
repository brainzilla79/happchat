import { connect } from 'react-redux';
import UsersIndex from './users_index';
import { getUsers } from '../../actions/user_actions';

const mapStateToProps = state => ({
  users: Object.values(state.users)
});

const mapDispatchToProps = state => dispatch => ({
  getUsers: () => dispatch(getUsers())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UsersIndex);
