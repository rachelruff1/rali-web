import React, { Component } from "react";
import LoginBox from "./LoginBox";
import InputField from "./InputField";
import FooterFormButton from "./FooterFormButton";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }
  renderBody() {
    return (
      <div>
        <InputField
          id="email"
          type="text"
          label="Email"
          inputAction={event => this.setState({ email: event.target.value })}
        />
        <InputField
          id="password"
          type="password"
          label="Password"
          inputAction={event => this.setState({ password: event.target.value })}
        />
        <FooterFormButton
          submitLabel="Sign in"
          otherLabel="Create Account"
          goToLink="/createaccount" {...this.props}
        />
      </div>
    );
  }

  render() {
    return (
      <div>
        <LoginBox title="Sign in" body={this.renderBody()} />
      </div>
    );
  }
}
