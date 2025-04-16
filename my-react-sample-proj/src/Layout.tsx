import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";
import Contact from "./components/Contact";

const Layout = () => {
  return (
    <div className="h-full text-[#283747] bg-[#f0f0f5]">
      <Header></Header>
      <Content></Content>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
};

export default Layout;
