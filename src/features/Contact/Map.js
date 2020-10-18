import React from 'react';
import {
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    Marker,
} from 'react-google-maps';


export default function Map() {
    const MapWithAMarker = withScriptjs(withGoogleMap(props =>
    <GoogleMap
        defaultZoom={10}
        defaultCenter={{ lat: 45.649490, lng: 25.606550 }}
    >
        <Marker
        position={{ lat: 45.649490, lng: 25.606550 }}
        />
    </GoogleMap>
    ));
    
    return(
        <MapWithAMarker
            googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyDuoNbK9RsMyeCgaNmsZCXko11fOoYFt00&v=3.exp&libraries=geometry,drawing,places"
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `300px` }} />}
            mapElement={<div style={{ height: `100%` }} />}
        />
    );
}

