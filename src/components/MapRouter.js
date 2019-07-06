import React, { Component } from 'react'
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

import FormComponent from './FormComponent';

class MapRouter extends Component {
    render() {
        return (     
          <div>
            <FormComponent></FormComponent>
            <Map google={this.props.google} zoom={14}>
            
            <Marker onClick={this.onMarkerClick}
                  name={'Current location'} />
            <InfoWindow onClose={this.onInfoWindowClose}>
              {/* <div>
                <h1>{this.state.selectedPlace.name}</h1>
              </div> */}
            </InfoWindow>
          </Map>
          </div>
          
        )
    }
}

export default GoogleApiWrapper({
    apiKey: ("AIzaSyAhAZI1a2yA-r7HHVTko9yWIEOv4M3iS2M")
  })(MapRouter)
