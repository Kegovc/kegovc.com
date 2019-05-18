import React, { Component } from 'react'
import './Landing.scss'
import Sky from '../../sky/containers/Sky';
import NavbarLanding from './NavbarLanding';

export class Landing extends Component {  
  render() {
    
    return (
      <div className="landing">
        <NavbarLanding 
          scroll={300}
        />
        <Sky />
      </div>
    )
  }

}

export default Landing
