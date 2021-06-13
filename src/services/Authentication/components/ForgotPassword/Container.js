import React, { useState } from "react";
import Presenation from "./Presenation";
import { connect } from "react-redux";
import { ForgotPassword } from "../../middleware/middleware";
const Container = (props) => {
  const { _ForgotPassword } = props;
  console.log(props);
  const [email, setEmail] = useState("");
  const handleCancleButton = () => {
    setEmail("");
  };
  const handleDoneButton = (e) => {
    e.preventDefault();
    _ForgotPassword(email);
  };
  return (
    <div>
      <Presenation
        email={email}
        setEmail={setEmail}
        handleCancleButton={handleCancleButton}
        handleDoneButton={handleDoneButton}
      />
    </div>
  );
};
const mapDispatchToProps = (dispatch) => {
  return {
    _ForgotPassword: (email) => dispatch(ForgotPassword(email)),
  };
};
export default connect(null, mapDispatchToProps)(Container);
