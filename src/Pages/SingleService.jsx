import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useAxiosPublic from "../useServiceHook/useAxiosPublic";

const SingleService = () => {
  const { id } = useParams();
  console.log(id);
  const axiosPublic = useAxiosPublic();
  const [service, setService] = useState({});

  useEffect(() => {
    axiosPublic.get(`/singleService/${id}`).then((res) => setService(res.data));
  }, [axiosPublic, id]);

  return (
    <div>
      <div>
        <div className="p-4 shadow-md dark:dark:bg-gray-900 dark:dark:text-gray-100">
          <div className="space-y-4">
            <div className="space-y-2">
              <img
                src={service.img}
                alt=""
                className="block object-cover object-center w-full rounded-md h-72 dark:dark:bg-gray-500"
              />
              <div className="flex items-center text-xs">
                <span>6 min ago</span>
              </div>
            </div>
            <div className="space-y-2">
              <a
                rel="noopener noreferrer"
                href="#"
                className="flex justify-between "
              >
                <h3 className="text-xl font-semibold dark:dark:text-violet-400">
                  {service.title}
                </h3>
                <h3 className="text-xl font-semibold dark:dark:text-violet-400 text-purple-800">
                  Price : {service.price}
                </h3>
              </a>
              <p className="leadi dark:dark:text-gray-400">
                {service.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleService;
