import React from "react";

const Layout = () => {
  return (
    <div className="LayoutWrapper h-lvh flex justify-center text-center flex-col text-[#283747] bg-[#f0f0f5]">
      <div className="HeaderWrapper">Navbar</div>
      <div className="ContentWrapper">
        <div className="HeroLeft"></div>
        <div className="HeroRight">
          <h2>Education and Online Course Site Template</h2>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            diam voluptua.
          </p>
          <button type="button" className="btnCls">
            Courses
          </button>
        </div>
      </div>
      <div className="FooterWrapper">footer</div>
    </div>
  );
};

export default Layout;
