import Header from "./components/Header";
import Footer from "./components/Footer";
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
      <Footer />
    </>
  );
}

export default App;
