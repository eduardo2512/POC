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

  async obterGeoJson() {
    return await fetch("https://raw.githubusercontent.com/eduardo2512/POC/main/teste.json")
      .then(response => response.json())
      .then(data => {
        return data;
      });
  }
}

export default new HomeService();
