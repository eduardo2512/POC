import React, { useEffect, useRef } from "react";
import "./TesteMyMap.css";
import { Map, View } from "ol";
import FullScreen from "ol/control/FullScreen";
import olms from "ol-mapbox-style";
import { transform } from "ol/proj";

const MyMap = ({ mapIsReadyCallback /* To be triggered when a map object is created */ }) => {
  const mapContainer = useRef(null);

  useEffect(() => {
    const initialState = {
      lng: 11,
      lat: 49,
      zoom: 4
    };

    const myAPIKey = "YOUR_API_KEY";
    const mapStyle = "https://maps.geoapify.com/v1/styles/positron/style.json";

    olms(mapContainer.current, `${mapStyle}?apiKey=${myAPIKey}`).then(map => {
      map
        .getView()
        .setCenter(transform([initialState.lng, initialState.lat], "EPSG:4326", "EPSG:3857"));
      map.getView().setZoom(initialState.zoom);

      mapIsReadyCallback(map);
    });
  }, [mapContainer.current]);

  return <div className="map-container" ref={mapContainer}></div>;
};

export default MyMap;
