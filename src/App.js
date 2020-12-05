//Components
import Nav from "./components/Nav/Nav";
import AboutMe from "./components/AboutMe/AboutMe";
import MyWork from "./components/MyWork/MyWork";
import Contact from "./components/ContactInfo/Contact";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Nav />
      <AboutMe />
      <MyWork />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
