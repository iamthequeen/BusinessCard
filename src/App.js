import Info from "./components/Info"
import Buttons from "./components/Buttons"
import About from "./components/About"
import Interests from "./components/Interests"
import Footer from "./components/Footer"


function App() {
  const url = ""
  return (
    <div className="container">
        <Info 
        url={url}
        />
        <Buttons 
        url={url}
        />
        <About />
        <Interests />
        <Footer />
    </div>
  );
}

export default App;
