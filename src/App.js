import React from 'react';
import GoogleMapReact from 'google-map-react';
import './App.css';

const MapMarker = ({ text }) => <div className="map-marker">{text}</div>;

const App = () => {
  
    const center = {
      lat: 36.8065, // Latitude de Tunis
      lng: 10.1815, // Longitude de Tunis
    };

  const zoom = 11;

  return (
    <div className="app">
      <GoogleMapReact
        bootstrapURLKeys={{ key: null }} //key null pour avoir accès à googl map avec utilisation manuel 
        defaultCenter={center}
        defaultZoom={zoom}
      >
        <MapMarker lat={center.lat} lng={center.lng} text="Vous etes Ici" />
      </GoogleMapReact>
    </div>
  );
};

export default App;