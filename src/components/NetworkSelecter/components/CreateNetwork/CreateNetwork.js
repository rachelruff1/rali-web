import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class CreateNetwork extends Component {

render(){
    return(
        <div className='network-creator-container'>
        <input type='text' placholder='Enter network name..'/>
        <input type='password' placeholder='Enter network password..'/>
        <button>Submit</button>
        <Link to='/network-selector'><button>Back</button></Link>
        </div>
    )
}
}

export default CreateNetwork;
