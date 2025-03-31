
import './App.css';
import Accordian from './components/accordian';
import ImageSlider from "./components/image-slider";
import ScrollToSection from "./components/scroll-to-top-and-bottom/scroll-to-section";


function App() {
  return (
    <div className="App">
      {/* Accordian component */}
      <Accordian/>
      {/* Image slider component */}
       <ImageSlider
        url={"https://picsum.photos/v2/list"}
        page={"1"}
        limit={"5"}
      /> 
      
    
      <ScrollToSection/>
    </div>
  );
}

export default App;
