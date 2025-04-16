const navLinks = [
  {
    name: "Home",
    index: "Home",
  },
  {
    name: "Courses",
    index: "Courses",
  },
  {
    name: "Mentors",
    index: "Mentors",
  },
  {
    name: "Blog",
    index: "Blog",
  },
  {
    name: "Contact",
    index: "Contact",
  },
];

import logo from "../assets/images/logo.svg";

const Header = () => {
  return (
    <header className="px-25 h-[85px] bg-white text-black text-lg">
      <div className="grid grid-cols-2 h-full w-full">
        <div className="flex items-center">
          <img src={logo} alt="learnapp" className="w-auto"></img>
        </div>
        <nav>
          <ul className="flex flex-row align-center justify-around items-center h-full">
            {navLinks.map((item) => {
              return (
                <li key={item.index}>
                  <a href={`\${{item.name}}`}></a>
                  {item.name}
                </li>
              );
            })}
            <a>
              <button className="btn-primary">Get Courses</button>
            </a>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
