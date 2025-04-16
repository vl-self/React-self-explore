import "./App.css";
import Contact from "./components/Contact";
import Content from "./components/Content";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <div className="h-full text-[#283747] bg-[#f0f0f5]">
      <Header></Header>
      <Content></Content>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}

export default App;
