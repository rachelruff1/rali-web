import React, {Component} from "react";
import MyEvents from "./components/MyEvents/MyEvents";
import {Link, withRouter} from 'react-router-dom';
import NetworkEvents from "./components/NetworkEvents/NetworkEvents";

class ViewNetwork extends Component {
  constructor(props){
    super(props);
  }
  render(){
    console.log(this.props);
    const networkid= this.props.match.params.id;
    
  return (
    <div className="view-network container">
      <h1>Network Name</h1>
      <Link to  ='/network-selector'><button>Go back</button></Link>
      <MyEvents networkid={networkid}/>
      <NetworkEvents networkid={networkid}/>
    </div>
  );
}
}
export default withRouter(ViewNetwork);