import _ from "lodash";

class TreeMapService {
  obterJsonTreeMap(geoJson, categoria, detalhes, valor) {
    const propertiesGeoJson = geoJson.features.map(feature => feature.properties);

    const teste = _.groupBy(propertiesGeoJson, categoria);
    const teste2 = Object.entries(teste);

    const children = [];
    teste2.forEach(regiao => {
      const retorno = {
        name: regiao[0],
        value: regiao[1].reduce((accumulator, currentValue) => accumulator + currentValue[valor], 0)
      };

      children.push(retorno);
    });

    const teste3 = _.groupBy(teste, detalhes);

    const treemapJson = {
      children: children
    };

    console.log(treemapJson);
    return treemapJson;
  }
}

export default new TreeMapService();
