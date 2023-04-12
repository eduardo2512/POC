import Treemap from "../components/Treemap";
import Mapa from "../components/Mapa";
import Header from "../components/Header";
import TesteMapa from "../components/TesteMapa";
import MultipleSelectCheckmarks from "../components/MultipleSelectCheckmarks";
import HomeService from "../services/HomeService";
import { useEffect, useState } from "react";
function Home() {
  const data = HomeService.obterGeoJson();
  console.log(data);
  const dadosFiltro = HomeService.obterValoresFiltro(data);

  return (
    <>
      <Header />
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          height: "100%",
          alignItems: "center"
        }}
      >
        <TesteMapa />
        <div>
          <div style={{ display: "flex" }}>
            <MultipleSelectCheckmarks listOptions={dadosFiltro} maxItensSelected={2} />
            <MultipleSelectCheckmarks listOptions={dadosFiltro} maxItensSelected={1} />
          </div>

          <Treemap />
        </div>
      </div>
    </>
  );
}

export default Home;
