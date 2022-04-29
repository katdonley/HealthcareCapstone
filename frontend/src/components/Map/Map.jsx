import React, { useEffect } from 'react'
import { GoogleMap, useJsApiLoader, LoadScript, Marker } from '@react-google-maps/api';
import { useState, useCallback, memo } from 'react';
import api_key from '../../local_settings';
import "./Map.css";
import axios from "axios";
import useAuth from '../../hooks/useAuth';







function PatientMap () {
  // const [patientAddress, setPatientAddress] = useState([])
  const [user, token] = useAuth();

  

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
    googleMapsApiKey: api_key
  })

  const [map, setMap] = useState(null)

  const [markers, setMarkers] = useState([
    // latLing = address.latLing,
    // addressArray = latLing.split(" "),
    // {lat: addressArray[0], lng: addressArray[1]}
    {lat: 45.675260926686, lng: -111.05023027358634},
    {lat: 45.68197519565491, lng: -111.0347223024214},
    {lat: 45.65905825266612, lng: -110.99404490242216},
    {lat: 45.670797585585156, lng: -111.03593440953259},
    {lat: 45.69629567128898, lng: -111.07529377785012},
  ]);

  // useEffect(() => {
  //   const fetchAddresses = async () => {
  //     try {
  //       let response = await axios.get("http://127.0.0.1:8000/api/addresses/all/addresses/", {
  //         headers: {
  //           Authorization: "Bearer " + token,
  //         },
  //       });
  //       setMarkers(response.data);
  //     } catch (error) {
  //       console.log(error.message);
  //     }
  //   };
  //   fetchAddresses();
  // }, [token]);

  const onUnmount = useCallback(function callback(map) {
    setMap(null)
  }, [])

  const[markerClass, setMarkerClass] = useState('inactive');
  function handleClick(){
    if(markerClass === 'inactive'){
      setMarkerClass('active');
    }
    else {
      setMarkerClass('inactive');
    }
  }

  return isLoaded ? (
    <div>
      
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={11.75}
        onLoad={onLoad}
        onUnmount={onUnmount}
      
      >
      {markers &&
        markers.map((marker) => (
        <p key={marker.id}>
        <Marker 
        position={marker} 
        onClick={handleClick}
        />
        </p>
      ))}
      
      
        { /* Child components, such as markers, info windows, etc. */ }
        <></>
      </GoogleMap>
      
      </div>
  ) : <></>
}

export default memo(PatientMap)