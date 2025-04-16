const Content = () => {
  return (
    <div className="grid grid-cols-2 relative bg-[#2E3C4C] text-white">
      <div>
        <img src="../src/assets/images/hero-img.png" alt="" />
      </div>
      <div className="content-center p-[15%] pt-0">
        <h2 className="text-[55px] font-[700] leading-[65px] mb-[30px]">
          Education and Online Course Site Template
        </h2>
        <p className="text-[18px] font-[700] leading-[28px] mb-[20px]">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam diam
          voluptua.
        </p>
        <button className="btn-primary">Courses</button>
      </div>
    </div>
  );
};

export default Content;
