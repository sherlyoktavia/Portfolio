
function Navbar(){
    return <div className="navbar pt-10 flex items-center justify-between">
    <div className="logo sm:pl-3 md:pl-4 lg:pl-10 xl:pl-20 pl-0">
      <h1 className=" sm:text-3xl font-bold">
        Portfolio
      </h1>
    </div>
    <ul className="menu items-center hidden md:display md:flex gap-6 lg:gap-10 sm:pr-3 md:pr-4 lg:pr-10 xl:pr-20 pr-0 ">
      <li>
        <a href="#home">
          Home
        </a>
      </li>
      <li>
        <a href="#about">
          About
        </a>
      </li>
      <li>
        <a href="#project">
          Project
        </a>
      </li>
      <li>
        <a href="#contact">
          Contact
        </a>
      </li>
    </ul>
  </div>
}

export default Navbar