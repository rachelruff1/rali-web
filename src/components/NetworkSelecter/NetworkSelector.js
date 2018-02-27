import React, { Component } from "react";
import { connect } from "react-redux";
// import { Field, reduxForm, reset } from 'redux-form';
import { getUser } from "../../ducks/UserReducer";
import {withRouter} from "react-router-dom";

class NetworkSelector extends Component {
    componentDidMount() {
        this.props.getUser();
      }
      render() {
        console.log(this.props.user.name);
        return (
          <div>
            {this.props.user ? (
              <div>
                <h1>{this.props.user.authid}</h1>
                <h1>{this.props.user.name}</h1>
              </div>
            ) : (
              <h1>No User On Session</h1>
            )}
          </div>
        );
      }
    }


let mapStateToProps = state => state;

export default withRouter(connect(mapStateToProps), { getUser })(NetworkSelector);

// export default connect(mapStateToProps, { getUser })(NetworkSelector);
