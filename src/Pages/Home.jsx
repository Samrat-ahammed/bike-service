import { useLoaderData } from "react-router-dom";
import Contact from "../Componants/Contact";
import HomeSwiper from "../Componants/HomeSwiper";
import Service from "../Componants/Service";
import Slider from "../Componants/Slider";
import { useEffect, useState } from "react";
import useAxiosPublic from "../useServiceHook/useAxiosPublic";

const Home = () => {
  const [service, setService] = useState();
  const axiosPublic = useAxiosPublic();

  useEffect(() => {
    axiosPublic.get("/service").then((res) => setService(res.data));
  }, [axiosPublic]);

  return (
    <div>
      <Slider></Slider>
      <div>
        <h1 className="text-4xl w-[400px] mx-auto text-center rounded-lg font-bold mt-24 mb-24 py-10 text-white bg-gradient-to-r from-indigo-500 via-purple-300 to-pink-400">
          Our Services
        </h1>
        <div className="grid grid-cols-3 gap-5">
          {service?.map((item) => (
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
