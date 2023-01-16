import "./App.css";
import TopNavBar from "./components/TopNavBar";
import BottomNavBar from "./components/BottomNavBar";
import Main from "./components/Main";
import ContentLeft from "./components/ContentLeft";
import FromTheFireHose from "./components/FromTheFireHose";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="App__Main">
        <TopNavBar />
        <BottomNavBar />
        <Main />
        <div className="App__Content">
          <ContentLeft />
          <ContentLeft />
        </div>

        {/* <div className="App__Bottom">
          <About />
        </div> */}
        <div className="App__ContentFireTheHose">
          <FromTheFireHose />
        </div>
      </div>
      <Footer />;
    </>
  );
}

export default App;
