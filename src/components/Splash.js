import React from 'react'
import {Link} from 'react-router-dom' 

class Splash extends React.Component {

    render ( ) {
        return (
          <div>
            <Link to="/login">Log In</Link>
            <br></br>
            <Link to="/signup">Sign Up</Link>
          </div>
        );
    }
}

export default Splash;