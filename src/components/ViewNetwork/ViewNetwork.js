import React,  {Component} from 'react';

export default class ViewNetwork extends Component {
  componentDidMount(){
      this.props.getMyEvents();
      this.props.getNetworkEvents();
  }
    render(){
        return(
            <div>ViewNetwork</div>
        )
    }
}