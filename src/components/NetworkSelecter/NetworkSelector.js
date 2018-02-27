import React, { Component } from "react";
import { connect } from "react-redux";
import { getUser } from "../../ducks/UserReducer";

class NetworkSelector extends Component {
    componentDidMount() {
        this.props.getUser();
      }
      render() {
        console.log(this.props.user);
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


export default connect(mapStateToProps, { getUser })(NetworkSelector);

