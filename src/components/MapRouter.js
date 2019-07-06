import React, { Component } from 'react';
import { Map, InfoWindow, Polygon, Polyline, Marker, GoogleApiWrapper } from 'google-maps-react';

const mapStyles = {
    width: '100%',
    height: '100%'
};


export class MapRouter extends Component {
    // initMap() {
    //     let directionsDisplay = Map.DirectionsRenderer;
    //     let directionsService = Map.DirectionsService;
    //     let map = Map(document.getElementById('map'), {
    //         zoom: 14,
    //         center: { lat: 37.77, lng: -122.447 }
    //     });
    //     directionsDisplay.setMap(map);

    //     this.calculateAndDisplayRoute(directionsService, directionsDisplay);
    //     document.getElementById('mode').addEventListener('change', function () {
    //         this.calculateAndDisplayRoute(directionsService, directionsDisplay);
    //     });
    // }
    // calculateAndDisplayRoute(directionsService, directionsDisplay) {
    //     let selectedMode = document.getElementById('mode').value;
    //     directionsService.route({
    //         origin: { lat: 37.77, lng: -122.447 }, // Haight.
    //         destination: { lat: 37.768, lng: -122.511 }, // Ocean Beach.
    //         // Note that Javascript allows us to access the constant
    //         // using square brackets and a string value as its
    //         // "property."
    //         travelMode: Map.TravelMode[selectedMode]
    //     }, function (response, status) {
    //         if (status == 'OK') {
    //             directionsDisplay.setDirections(response);
    //         } else {
    //             window.alert('Directions request failed due to ' + status);
    //         }
    //     });
    // }
    render() {
        const triangleCoords = [
            { lat: 17.440081,
                lng: 78.348915 },
            { lat: 17.440081,
                lng: 78.448915 }
        ];

        return (
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
