import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";

const Layout = () => {
  return (
    <div className="h-full text-[#283747] bg-[#f0f0f5]">
      <Header></Header>
      <Content></Content>
      <Footer></Footer>
    </div>
  );
};

export default Layout;
