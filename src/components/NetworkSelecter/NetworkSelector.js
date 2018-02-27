import React, { Component } from "react";
import { connect } from "react-redux";
// import { Field, reduxForm, reset } from 'redux-form';
import { getUser } from "../../ducks/UserReducer";

class NetworkSelector extends Component {
  componentDidMount() {
    this.props.getUser();
  }
  componentWillReceiveProps(nextProps){
      console.log(nextProps);
  }
  render() {
    return <div>ViewNetwork</div>;
  }
}



let mapStateToProps = state => {
  const { user } = state;
  return {
    user
  };
};

export default connect(mapStateToProps, { getUser })(NetworkSelector);
