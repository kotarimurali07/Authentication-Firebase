import React, { useState } from "react";
import Presentation from "./Presentation";
import { handleEmail } from "../../middleware/middleware";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
const Container = (props) => {
  const { _handleEmail, auth } = props;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    const data = { email, password };
    _handleEmail(data);
  };

  return (
    <div>
      <Presentation
        email={email}
        setEmail={setEmail}
        password={password}
        auth={auth}
        setPassword={setPassword}
        handleLogin={handleLogin}
      />
    </div>
  );
};
const mapStateToProps = (state) => {
  console.log(state.firebase.auth.uid);
  return {
    auth: state.firebase.auth,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    _handleEmail: (creds) => dispatch(handleEmail(creds)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Container);
