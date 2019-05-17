import React, { Component } from 'react'
import './Landing.scss'
import Sky from '../../sky/containers/Sky';
import {
  Button
} from 'reactstrap'
export class Landing extends Component {
  render() {
    
    return (
      <div className="landing">
      <Button color="danger">Danger!</Button>
        <Sky/>
        <h2>
            submenu
        </h2>
      </div>
    )
  }

}

export default Landing
