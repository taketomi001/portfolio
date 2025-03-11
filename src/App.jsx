import Header from "./components/Header";
// import Footer from "./components/Contact";
import BackgroundSlider from "./components/BackgroundSlider";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <main>
      <BackgroundSlider />
        <Outlet />
      </main>
      
    </>
  );
}

export default App;
