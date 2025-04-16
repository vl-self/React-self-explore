import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white px-30 py-10">
      <div className="grid grid-cols-5 gap-x-8 pb-10 border-b-1 border-gray-200">
        <div className="footer-widget col-span-2">
          <a href="">
            <img src="../src/assets/images/logo.svg"></img>
          </a>
          <p className="pt-10 pr-20">
            Lorem ipsum dolor sit amco nsetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna .
          </p>
        </div>
        <FooterWidget
          links={["Quick Links", "Home", "Courses", "Events", "Blog"]}
        ></FooterWidget>
        <FooterWidget
          links={[
            "Our Courses",
            "Design",
            "Development",
            "Marketing",
            "SEO Design",
          ]}
        ></FooterWidget>
        <FooterWidget
          links={[
            "Contact Us",
            "Phone: +884-9273-3867",
            "Email: hello@gmail.com",
            "Address: Random Road, USA",
          ]}
        ></FooterWidget>
      </div>
      <div className="pt-10 pb-10">
        Reference Taken from Online css templates
      </div>
    </footer>
  );
};

type listProps = {
  links: string[];
};
export const FooterWidget: React.FC<listProps> = ({ links }) => {
  return (
    <div>
      <ul className="mt-3">
        {links.map((item: string, index: number) => {
          return (
            <li className="mb-2">
              {index == 0 ? (
                <h5 className="text-xl">{item}</h5>
              ) : (
                <a href="javascript:void(0)">{item}</a>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Footer;
