import React, { Component } from 'react';
import FormComponent from './FormComponent'
import { Map, InfoWindow, Polygon, Polyline, Marker, GoogleApiWrapper } from 'google-maps-react';

const mapStyles = {
    width: '100%',
    height: '100%'
};


export class MapRouter extends Component {
    
    render() {
        const triangleCoords = [
            { lat: 17.440081,
                lng: 78.348915 },
            { lat: 17.440081,
                lng: 78.448915 }
        ];

        return (
            <div>
            <FormComponent></FormComponent>
            <Map google={this.props.google} initialCenter={{
                lat: 17.440081,
                lng: 78.348915
            }}
                style={{ width: '100%', height: '100%', position: 'relative' }}
                className={'map'}
                zoom={14}>
                <Marker onClick={this.onMarkerClick}
                    title={'The marker`s title will appear as a tooltip.'}
                    name={'SOMA'}
                    position={{ lat: 17.440081,
                        lng: 78.348915 }} />
                <Marker
                    name={'Dolores park'}
                    position={{ lat: 17.440081,
                        lng: 78.448915 }} />
                <Marker />
                <Polyline
                    path={triangleCoords}
                    strokeColor="#0000FF"
                    strokeOpacity={0.8}
                    strokeWeight={2} />
            </Map>
            </div>
        )
    }

    // render() {
    //     return (
    //         <div>
    //             <Map
    //                 google={this.props.google}
    //                 zoom={14}
    //                 style={mapStyles}
    //                 initialCenter={{
    //                     lat: -1.2884,
    //                     lng: 36.8233
    //                 }}
    //             />

    //         </div>

    //     );
    // }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyDI_i2I0JuB1wABeEsm0nQqPx4VuGlG09k'
})(MapRouter);
