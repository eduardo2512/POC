import Treemap from "../components/Treemap";
import Mapa from "../components/Mapa";
import Header from "../components/Header";
import TesteMapa from "../components/TesteMapa";
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
        <Treemap />
      </div>
    </>
  );
}

export default Home;
