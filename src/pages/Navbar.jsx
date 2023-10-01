import header from "../assets/img/Header.png";

const Navbar = () => {
  return (
    <div className="fixed top-0 w-full z-10">
      <div className="w-full bg-gray-300 pt-3 ">
        <div className="container mx-auto flex items-center justify-between">
          <img src={header} className="w-52" />
          <div className="text-right flex items-center">
            <div className="mr-5">
              <i className="fa-solid fa-phone mr-2 text-sky-500"></i>
              <span className="font-semibold">694 897 01</span>
            </div>
            <div className="mr-5">
              <i className="fa-brands fa-viber mr-2 text-sky-500"></i>
              <span className="font-semibold">694 897 01</span>
            </div>
            <div className="mr-5">
              <i className="fa-solid fa-envelope mr-2 text-sky-500"></i>
              <span className="font-semibold">info@visiableone.com</span>
            </div>
            <button className="px-5 py-2 bg-green-500 rounded-lg font-semibold text-white">
              <i className="fa-solid fa-copy mx-2"></i>
              Quote
            </button>
            <div className="relative mx-3 ">
              <select className="py-1 px-5 border-2 border-sky-500 text-sky-500 bg-transparent outline-none appearance-none">
                <option>EN</option>
                <option>SG</option>
              </select>
            </div>
          </div>
        </div>
        <div className="bg-white py-2 text-right">
          <div className=" container mx-auto">
            <ul className="flex justify-end items-center">
              <li className="mr-3 font-semibold text-md">Home</li>
              <li className="text-sky-500 mr-3 font-semibold text-md">Services</li>
              <li className="mr-3 font-semibold text-md">Company</li>
              <li className="mr-3 font-semibold text-md">Blog</li>
              <li className="mr-3 font-semibold text-md">Contact Us</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
