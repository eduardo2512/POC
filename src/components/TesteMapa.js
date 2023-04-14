import React, { useEffect, useRef } from "react";
import L from "leaflet";
import * as d3 from "d3";
import TreeMapService from "../services/TreeMapService";

import "leaflet/dist/leaflet.css";

function MapWithGeoJSON() {
  const mapRef = useRef(null);

  useEffect(() => {
    const map = L.map(mapRef.current, {
      attributionControl: false
    }).setView([-14.235, -51.9253], 4);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 18
    }).addTo(map);

    const geoJsonLayer = L.geoJSON(null, {
      style: feature => {
        const color = d3.interpolateInferno(Math.random());
        return { color };
      }
    }).addTo(map);

    d3.json("https://raw.githubusercontent.com/eduardo2512/POC/main/estado.geojson").then(data => {
      geoJsonLayer.addData(data);
    });

    return () => {
      map.remove();
    };
  }, []);

  return <div ref={mapRef} style={{ height: "500px", width: "50%" }} />;
}

export default MapWithGeoJSON;
