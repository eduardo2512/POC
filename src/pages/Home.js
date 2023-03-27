import Treemap from "../components/Treemap";
import Mapa from "../components/Mapa";
import Header from "../components/Header";
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
        <Mapa />
        <Treemap />
      </div>
    </>
  );
}

export default Home;
