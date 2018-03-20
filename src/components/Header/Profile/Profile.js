import React, { Component } from "react";
import { connect } from "react-redux";
import { getUser, editUser, logout } from "../../../ducks/reducer";
import EditProfile from "./EditProfile/EditProfile";
import Header from '../../Header/AppHeader/AppHeader';
import RaisedButton from 'material-ui/RaisedButton';
import './Profile.css';

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false,
      firstname: '',
      lastname: '',
      email: '',
      cell: ''
    };
    this.toggleEdit = this.toggleEdit.bind(this);
    this.saveUser = this.saveUser.bind(this);
    this.updateFName=this.updateFName.bind(this);
    this.updateLName=this.updateLName.bind(this);
    this.updateEmail=this.updateEmail.bind(this);
    this.updateCell=this.updateCell.bind(this);
  }

  componentDidMount() {
    this.props.getUser().then(resp => this.setState({
      firstname: this.props.user.firstname,
      lastname: this.props.user.lastname,
      email: this.props.user.email,
      cell: this.props.user.cell
    }));
  }

  toggleEdit() {
    this.setState({ isEditing: !this.state.isEditing });
  }
updateFName(e){
  this.setState({firstname:e})
}

updateLName(e){
  this.setState({lastname:e})
}

updateEmail(e){
  this.setState({email:e})
}

updateCell(e){
  this.setState({cell:e})
}

  saveUser(e) {
    this.props.editUser(this.state.firstname, this.state.lastname, this.state.email, this.state.cell);
    window.location.reload();
  }

  render() {
    const style = {
      margin: 12,
    };
    console.log(this.props);
    const { firstname, lastname, email, cell } = this.state;
    return this.state.isEditing ? (
      <div className='edit-profile-container'>
        <Header/>
        <h1>Edit Profile</h1>
        <EditProfile
          firstname={firstname}
          updateFN={this.updateFName}
          lastname={lastname}
          updateLN={this.updateLName}
          email={email}
          updateE={this.updateEmail}
          cell={cell}
          updateC={this.updateCell}
          onSave={this.saveUser}
          toggle={this.toggleEdit}
        />
      </div>
    ) : (
      <div className='profile-display'>
        <Header/>
        <h1>{`${firstname} ${lastname}`}</h1>
        <p>Email: {email}</p>
        <p>Cell: {cell}</p>
        <div>
        <RaisedButton label="Edit" style={style}  onClick={this.toggleEdit}/>
        <RaisedButton label="Log Out" style={style} onClick={()=>this.props.logout().then(this.props.history.push("/"))}/>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { user: state.user };
}
export default connect(mapStateToProps, { getUser, editUser, logout })(Profile);
