import AddEventSection from "./components/AddEventSection";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import TopEventSection from "./components/TopEventSection";

function App() {
  return (
    <div className="">
      <Header />
      <Navigation />
      <AddEventSection />
      <TopEventSection />
      <Footer />
    </div>
  );
}

export default App;
