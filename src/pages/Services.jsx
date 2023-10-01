import header from "../assets/img/computer.png";
import respon from "../assets/img/responsive.png";
import wordress from "../assets/img/wotrdre.png";
import Ecommarce from "../assets/img/shop.png";
import Computer from "../assets/img/laptop.png";
import Computer1 from "../assets/img/laptopphoto.png";
import table from "../assets/img/table.png";
import Cupid from "../assets/img/cubid.png";

const Services = () => {
  return (
    <div>
      <section className="mt-10">
        <div>
          <img
            src={header}
            alt=""
            className="relative brightness-50 object-cover"
          />
          <h1 className="absolute top-[200px] left-[150px] text-white text-7xl">
            Trippro - An Ecommarce Solution
          </h1>
          <p className="text-center absolute top-[350px] left-[140px] text-white font-semibold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
            ducimus voluptate corrupti aliquam fuga iste necessitatibus voluptas
            molestiae expedita,
            <br /> cupiditate natus cumque ratione? Quae porro totam, tenetur
            officia sunt ipsam.
          </p>
          <div className="absolute top-[450px] left-[300px]">
            <h1 className="font-semibold text-xl items-center text-white flex border-r-4 p-3">
              Built For: <img src={respon} alt="" className="mx-3" />
            </h1>
          </div>
          <div className="absolute top-[450px] left-[500px]">
            <h1 className="font-semibold text-xl items-center text-white flex border-r-4 p-3">
              Technologies Wordpress:{" "}
              <img src={wordress} alt="" className="mx-3" />
            </h1>
          </div>
          <div className="absolute top-[450px] left-[850px]">
            <h1 className="font-semibold text-xl items-center text-white flex p-3">
              Industry Ecommerce:{" "}
              <img src={Ecommarce} alt="" className="mx-3" />
            </h1>
          </div>
          <img
            src={Computer}
            alt=""
            className="absolute bottom-[-500px] left-[300px]"
          />
          <img
            src={Computer1}
            alt=""
            className="absolute bottom-[-449px] left-[400px]"
          />
        </div>
      </section>
      <section className="mt-96 mb-10">
        <div className="container mx-auto px-28">
          <div className="grid grid-cols-2 items-center">
            <div>
              <div className="flex items-center">
                <h1 className="font-semibold text-4xl underline decoration-sky-500">
                  ABOUT
                </h1>
                <span className="text-sky-500 font-semibold text-4xl mx-3">
                  TRIPPRO
                </span>
              </div>
              <p className="font-semibold mt-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                <br /> Debitis eos, doloremque deleniti nostrum est provident
                blanditiis,
                <br /> suscipit labore consectetur dolorem consequatur, rem vel
                quam dolor aperiam.Impedit ipsam vitae consequuntur.
              </p>
              <button className="px-10 py-3 bg-sky-500 mt-5 rounded-full text-white font-semibold">
                TOUR TO WEBSITE
              </button>
            </div>
            <div>
              <img src={table} alt="" className="ml-32" />
            </div>
          </div>
        </div>
      </section>
      <section className="my-10">
        <div className="container mx-auto px-28">
          <div className="grid grid-cols-2 items-center justify-between">
            <div>
              <img src={Cupid} alt="" className="w-96" />
            </div>
            <div>
              <div className="flex items-center">
                <h1 className="font-semibold text-4xl">OUR</h1>
                <span className="font-semibold text-4xl text-sky-500 ml-3">
                  CHALLENGES
                </span>
              </div>
              <div className="font-semibold flex items-center mt-5 bg p-3 shadow-md rounded-lg">
                <span className="text-3xl text-gray-300">01.</span>
                <p className="text-lg text-gray-300 ml-10">
                  Export/Import From Old Website.
                </p>
              </div>
              <div className="font-semibold flex items-center mt-10  p-3 shadow-md rounded-lg">
                <span className="text-3xl text-sky-500">02.</span>
                <p className="text-lg  ml-10">Product Bandle.</p>
              </div>
              <div className="font-semibold flex items-center mt-10  p-3 shadow-md rounded-lg">
                <span className="text-3xl text-sky-500">03.</span>
                <p className="text-lg  ml-10">Data Processing.</p>
              </div>
              <div className="font-semibold flex items-center mt-10  p-3 shadow-md rounded-lg">
                <span className="text-3xl text-sky-500">04.</span>
                <p className="text-lg  ml-10">
                  Export/Import From Old Website.
                </p>
              </div>
              <div className="font-semibold flex items-center mt-10  p-3 shadow-md rounded-lg">
                <span className="text-3xl text-sky-500">05.</span>
                <p className="text-lg  ml-10">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis
                  fuga.
                </p>
              </div>
              <button className="px-10 py-3 bg-sky-500 mt-5 rounded-full text-white font-semibold">
                VIEW MORE
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
