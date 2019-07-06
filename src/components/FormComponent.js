import React, { Component } from 'react';

class FormComponent extends Component {
    constructor(props) {
      super(props);
      this.state = {
        value: '0,0',
        error: null,
      }
    }
    
    componentDidMount() {
     /* if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            this.setState({
              value: position.coords.latitude + ',' + position.coords.longitude,
              error: null,
            });
          },
          (error) => this.setState(
            {error: error.message}
          )
        );
      }*/
    }   
  changeLocation(evt) {
      this.setState({
          value: evt.target.value,
        }
      )
    }
    
    render() {
      return (
        <div className="container-fluid">
            <div className="form-group">
                <label htmlFor="sourceInput">Source</label>
                <input type="text" className="form-control" id="sourceInput" placeholder="Enter source" value={ this.state.value }
                        onChange={ evt => this.changeLocation(evt) }/>
            </div>
            <div className="form-group">
                <label htmlFor="destinationInput">Destination</label>
                <input type="text" className="form-control" id="destinationInput" placeholder="Enter destination"  value={ this.state.value } 
                onChange={ evt => this.changeLocation(evt) } />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </div>
      )
    }
  }

  export default FormComponent;