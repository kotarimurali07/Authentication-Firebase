import React, { useEffect, useState } from "react";
import { handleSignup } from "../../middleware/middleware";
import Presentation from "./Presentation";
import { connect } from "react-redux";
const Container = (props) => {
  const { _handleSignup } = props;
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const buttonDisble = () => {
    return (
      firstName.length > 0 &&
      lastName.length > 0 &&
      email.length > 0 &&
      password.length > 0
    );
  };
  useEffect(() => {
    handleSubmitSignUP();
  }, []);
  const handleSubmitSignUP = (e) => {
    console.log("HELOO");
    const details = { email, password };
    _handleSignup(details);
  };
  return (
    <div>
      <Presentation
        firstName={firstName}
        setFirstName={setFirstName}
        lastName={lastName}
        setLastName={setLastName}
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        buttonDisble={buttonDisble}
        handleSubmitSignUP={handleSubmitSignUP}
      />
    </div>
  );
};
const mapDispatchToProps = (dispatch) => {
  return {
    _handleSignup: (data) => dispatch(handleSignup(data)),
  };
};
export default connect(null, mapDispatchToProps)(Container);
