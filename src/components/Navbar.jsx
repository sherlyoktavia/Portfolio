
function Navbar(){
    return <div className="navbar pt-10 flex items-center justify-between">
    <div className="logo sm:pl-3 md:pl-4 lg:pl-10 xl:pl-20 pl-0">
      <h1 className=" sm:text-3xl font-bold">
        Portfolio
      </h1>
    </div>
    <ul className="menu flex items-center sm:font-semibold sm:text-lg gap-1 sm:gap-4 md:gap-6 lg:gap-10 sm:pr-3 md:pr-4 lg:pr-10 xl:pr-20 pr-0 ">
      <li>
        <a href="">
          Home
        </a>
      </li>
      <li>
        <a href="">
          About
        </a>
      </li>
      <li>
        <a href="">
          Project
        </a>
      </li>
      <li>
        <a href="">
          Contact
        </a>
      </li>
    </ul>
  </div>
}

export default Navbar