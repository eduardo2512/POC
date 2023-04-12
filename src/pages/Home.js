import Treemap from "../components/Treemap";
import Mapa from "../components/Mapa";
import Header from "../components/Header";
import TesteMapa from "../components/TesteMapa";
import MultipleSelectCheckmarks from "../components/MultipleSelectCheckmarks";
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
        <MultipleSelectCheckmarks />
        <Treemap />
      </div>
    </>
  );
}

export default Home;
