import { connect } from "react-redux";
import SessionForm from "./session_form";
import { login, signup, clearErrors } from "../../actions/session_actions.js";

const mapStateToProps = (state, ownProps) => ({
  loggedIn: Boolean(state.session.currentUser),
  errors: state.errors.session
});

const mapDispatchToProps = (dispatch, ownProps) => {
  const formType = ownProps.location.pathname.slice(1);
  const action = formType === "login" ? login : signup;
  return {
    action: user => dispatch(action(user)),
    formType,
    clearErrors: () => dispatch(clearErrors())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
