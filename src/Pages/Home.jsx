import Contact from "../Componants/Contact";
import HomeSwiper from "../Componants/HomeSwiper";
import Service from "../Componants/Service";
import Slider from "../Componants/Slider";
import useService from "../useServiceHook/useService";

const Home = () => {
  const [service] = useService();

  return (
    <div>
      <Slider></Slider>
      <div>
        <h1 className="text-4xl w-[400px] mx-auto text-center rounded-lg font-bold mt-24 mb-24 py-10 text-white bg-gradient-to-r from-indigo-500 via-purple-300 to-pink-400">
          Our Services
        </h1>
        <div className="grid grid-cols-3 gap-5">
          {service.map((item) => (
            <Service key={item._id} item={item}></Service>
          ))}
        </div>
      </div>
      <Contact></Contact>
      <div className="">
        <HomeSwiper></HomeSwiper>
      </div>
    </div>
  );
};

export default Home;
