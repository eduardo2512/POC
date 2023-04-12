import _ from "lodash";

class TreeMapService {
  obterJsonTreeMap(geoJson, primeiraColunaComparativa, segundaColunaComparativa, valorMostrado) {
    const propertiesGeoJson = geoJson.features.map(feature => feature.properties);

    const colunateste = "regiao";
    const teste = _.groupBy(propertiesGeoJson, colunateste);
    const teste2 = Object.entries(teste);
  }
}

export default new TreeMapService();
