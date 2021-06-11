import React from "react";
import Presentation from "./Presentation";
import { handleEmailSignout } from "../../../Authentication/middleware/middleware";
import { connect } from "react-redux";
const Container = (props) => {
  const { logout, auth } = props;
  return (
    <div>
      <Presentation logout={logout} auth={auth} />
    </div>
  );
};
const mapStateToProps = (state) => {
  console.log(state);
  return {
    auth: state.firebase.auth,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(handleEmailSignout()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Container);
