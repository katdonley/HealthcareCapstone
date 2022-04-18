import React from 'react'
import { GoogleMap, useJsApiLoader, LoadScript, Marker } from '@react-google-maps/api';
import { useState, useCallback, memo } from 'react';






function PatientMap () {
  // const [patientAddress, setPatientAddress] = useState([])

  

  // const position = {
  //   lat: 45.675260926686,
  //   lng: -111.05023027358634
  // }

  const containerStyle = {
    width: '400px',
    height: '400px'
  };
  
  
  // BOZEMAN, MT 45.67132893684237, -111.05399414046711
  const center = {
    lat: 45.67132893684237,
    lng: -111.05399414046711
  };
  
  const onLoad = marker => {
    console.log('marker: ', marker)
  }

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyCi-K7or6pfWQfKGqW8U_rDh_Wbxy343-Y"
  })

  const [map, setMap] = useState(null)

  const [markers, setMarkers] = useState([
    {lat: 45.675260926686, lng: -111.05023027358634},
    {lat: 45.68197519565491, lng: -111.0347223024214},
    {lat: 45.65905825266612, lng: -110.99404490242216},
    {lat: 45.670797585585156, lng: -111.03593440953259},
    {lat: 45.69629567128898, lng: -111.07529377785012},
  ]);

  const onUnmount = useCallback(function callback(map) {
    setMap(null)
  }, [])

  return isLoaded ? (
    <div>
      
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={11.75}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
      {markers.map((marker) => (
        <Marker position={marker} />
      ))}
      
      
        { /* Child components, such as markers, info windows, etc. */ }
        <></>
      </GoogleMap>
      
      </div>
  ) : <></>
}

export default memo(PatientMap)