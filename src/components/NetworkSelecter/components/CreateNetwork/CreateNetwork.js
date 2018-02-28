import React, {Component} from 'react';

class CreateNetwork extends Component {

render(){
    return(
        <div className='network-creator-container'>
        <input type='text' placholder='Enter network name..'/>
        <input type='password' placeholder='Enter network password..'/>
        <button>Submit</button>
        </div>
    )
}
}

export default CreateNetwork;
