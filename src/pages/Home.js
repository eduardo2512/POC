import Treemap from "../components/Treemap";
import Mapa from "../components/Mapa";
import Header from "../components/Header";
import TesteMapa from "../components/TesteMapa";
import MultipleSelectCheckmarks from "../components/MultipleSelectCheckmarks";
import HomeService from "../services/HomeService";
import { useEffect, useState } from "react";
function Home() {
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
            <MultipleSelectCheckmarks
              listOptions={["teste1", "teste2", "teste3", "teste4"]}
              maxItensSelected={2}
            />
            <MultipleSelectCheckmarks
              listOptions={["teste1", "teste2", "teste3", "teste4"]}
              maxItensSelected={1}
            />
          </div>

          <Treemap />
        </div>
      </div>
    </>
  );
}

export default Home;
