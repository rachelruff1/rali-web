import React, {Component} from 'react';

class SearchNetwork extends Component {

render(){
    return(
        <div className='network-search-container'>
        <input type='text' placholder='Enter network name..'/>
        <input type='password' placeholder='Enter network password..'/>
        <button>Submit</button>
        </div>
    )
}
}

export default SearchNetwork;
