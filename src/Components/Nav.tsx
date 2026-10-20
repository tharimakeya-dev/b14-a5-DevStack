import logo from "../assets/logo-text.png";
import hamburger from "../assets/hamburger.png";

const Nav = () => {
  return (
    <>
      {/* // todo for laptop device  */}
      <nav className="hidden md:flex gap-5 items-center justify-between pt-5 px-23 mb-2.5 sticky top-0 z-50 bg-white  font-jakarta">
        <div className="cursor-pointer">
          <img src={logo} alt="logo-with-text" />
        </div>
        <div>
          <ul className="flex gap-5 text-[#475569] text-[14px] font-medium list-none">
            <li className="hover:text-[#DB2777] ">
              <a href="#">Home</a>
            </li>
            <li className="hover:text-[#DB2777] ">
              <a href="#">Technologies</a>
            </li>
            <li className="hover:text-[#DB2777] ">
              <a href="#">Projects</a>
            </li>
            <li className="hover:text-[#DB2777] ">
              <a href="#">About</a>
            </li>
            <li className="hover:text-[#DB2777] ">
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
        <div className="text-[14px] font-medium flex gap-5 items-center justify-center">
          <button className="text-[#334155] cursor-pointer">Sign In</button>
          <button className="bg-[#D91B7E] rounded-full text-white px-5 py-2.5 cursor-pointer">
            Sign Up
          </button>
        </div>
      </nav>
      {/*// todo For mobile device */}

      <nav className="grid grid-cols-3 items-center justify-center px-4 py-4 sticky top-0 z-50 bg-white md:hidden">
        <div className="justify-self-start">
          <button>
            <img src={hamburger} alt="hamburger-icon" />
          </button>
        </div>

        <div className="justify-self-center">
          <img src={logo} alt="logo-with-text" />
        </div>

        <div className="justify-self-end text-[14px] font-medium flex gap-5 items-center justify-center">
          <button className="text-[#334155] cursor-pointer">Sign In</button>
          <button className="bg-[#D91B7E] rounded-full text-white px-5 py-2.5 cursor-pointer">
            Sign Up
          </button>
        </div>
      </nav>
    </>
  );
};

export default Nav;
