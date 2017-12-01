import { connect } from 'react-redux';
import { login, logout, signup } from '../../actions/session_actions';
import AuthNav from './auth_nav';

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = () => dispatch => ({
  login: user => dispatch(login(user)),
  logout: () => dispatch(logout()),
  signup: user => dispatch(signup(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthNav);