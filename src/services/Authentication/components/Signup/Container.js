import React, { useEffect, useState } from "react";
import { handleSignup } from "../../middleware/middleware";
import Presentation from "./Presentation";
import { connect } from "react-redux";
const Container = (props) => {
  const { _handleSignup, auth } = props;
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const buttonDisble = () => {
    return email.length > 0 && password.length > 0;
  };

  const handleSubmitSignUP = (e) => {
    e.preventDefault();
    const data = { email, password };
    _handleSignup(data);
  };

  return (
    <div>
      <Presentation
        firstName={firstName}
        setFirstName={setFirstName}
        lastName={lastName}
        setLastName={setLastName}
        email={email}
        auth={auth}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        buttonDisble={buttonDisble}
        handleSubmitSignUP={handleSubmitSignUP}
      />
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
    _handleSignup: (data) => dispatch(handleSignup(data)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Container);
