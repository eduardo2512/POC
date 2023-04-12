import _ from "lodash";
import * as d3 from "d3";

class HomeService {
  obterValoresFiltro(geoJson) {
    console.log(geoJson);
    const propertiesGeoJson = geoJson.features.map(feature => feature.properties);
    const keysGeoJson = [];
    for (const [key] of Object.entries(propertiesGeoJson)) {
      keysGeoJson.push(key);
    }
    return keysGeoJson;
  }

  obterGeoJson() {
    d3.json("https://raw.githubusercontent.com/eduardo2512/POC/main/estado.geojson").then(data => {
      console.log(data);
      return data;
    });
  }
}

export default new HomeService();
