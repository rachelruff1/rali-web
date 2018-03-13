import React, { Component } from "react";
import { connect } from "react-redux";
import { getUser, editUser } from "../../../ducks/reducer";
import EditProfile from "./EditProfile/EditProfile";
import Header from '../../Header/AppHeader/AppHeader';
import './Profile.css';

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false,
      user: this.props.user
    };
    this.toggleEdit = this.toggleEdit.bind(this);
    this.updateUserState = this.updateUserState.bind(this);
    this.saveUser = this.saveUser.bind(this);
  }

  componentDidMount() {
    this.props.getUser();
  }

  toggleEdit() {
    this.setState({ isEditing: !this.state.isEditing });
  }

  updateUserState(e) {
    const field = e.target.name;
    const user = this.state.user;
    user[field] = e.target.value;
    return this.setState({ user: user });
  }

  saveUser(e) {
    e.preventDefault();
    this.props.editUser(this.state.user);
  }
  componentWillReceiveProps(nextProps) {
    if (this.props.user.id !== nextProps.user.id) {
      this.setState({ user: nextProps.user });
    }
  }
  render() {
    console.log(this.props);
    const { firstname, lastname, email, cell, picture } = this.props.user;
    return this.state.isEditing ? (
      <div className='edit-profile-container'>
        <Header/>
        <h1>Edit Profile</h1>
        <EditProfile
          firstname={this.state.user.firstname}
          lastname={this.state.user.lastname}
          email={this.state.user.email}
          cell={this.state.user.cell}
          picture={this.state.user.picture}
          onSave={this.saveUser}
          onChange={this.updateUserState}
          toggle={this.toggleEdit}
        />
      </div>
    ) : (
      <div className='profile-display'>
        <Header/>
        <h1>{`${firstname} ${lastname}`}</h1>
        <p>Email: {email}</p>
        <p>Cell: {cell}</p>
        {/* <p>Profile Picture: {picture}</p> */}
        <div>
          <button onClick={this.toggleEdit}>Edit</button>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { user: state.user };
}
export default connect(mapStateToProps, { getUser, editUser })(Profile);
