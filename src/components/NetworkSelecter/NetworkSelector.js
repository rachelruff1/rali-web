import React, { Component } from "react";
import { connect } from "react-redux";
import { getUser } from "../../ducks/UserReducer";
import Header from "../Header/Header";

class NetworkSelector extends Component {
    componentDidMount() {
        this.props.getUser();
      }
      render() {
        return (
          <div>
              < Header />
            
            <div>
                <h1>{ this.props.user.user ? this.props.user.user.firstname : 'Blank' }'s Networks</h1>
                <button>+ Create</button>
                <button>Search</button>
                </div>
          </div>
        );
      }
    }


let mapStateToProps = state => state;


export default connect(mapStateToProps, { getUser })(NetworkSelector);

