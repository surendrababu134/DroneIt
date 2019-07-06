import React, { Component } from 'react';
import Input from './inputComponent'
class FormComponent extends Component {
  constructor (props) {
    super(props)
    this.getLocation = this.getLocation.bind(this)
  }
  getLocation (e) {
    console.log(e.geometry.location.lat())
  }
    render() {
      return (
        <div className="container-fluid">
            <div className="form-group row">
                <Input label = 'Source' onPlaceLoaded = {(e) => this.getLocation(e)} />
            </div>
            <div className="form-group row">
                <Input label = 'Destination' onPlaceLoaded = {(e) => console.log(e)} />
            </div>
            <div className="form-group row">
              <div className="col-sm-10 offset-sm-2">
                <button type="submit" className="btn btn-primary">Submit</button>
              </div>
            </div>
        </div>
      )
    }
  }

  export default FormComponent;
  