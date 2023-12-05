import React from "react";
import useService from "../useServiceHook/useService";

const Services = () => {
  const [service] = useService();
  return (
    <div className="grid grid-cols-4 gap-4">
      {service.map((item) => (
        <div
          key={item._id}
          className="rounded-md shadow-md dark:bg-gray-900 dark:text-gray-100"
        >
          <div className="flex items-center justify-between p-3">
            <div className="flex items-center space-x-2">
              <div className="-space-y-1">
                <h2 className="text-sm font-semibold leadi">{item.title}</h2>
                <span className="inline-block text-xs leadi dark:text-gray-400">
                  {item.service_area}
                </span>
              </div>
            </div>
          </div>
          <img
            src={item.img}
            alt=""
            className="object-cover object-center w-full h-72 dark:bg-gray-500"
          />
          <div className="p-3">
            <div className="flex flex-wrap items-center pt-3 pb-1">
              <div className="flex items-center space-x-2">
                <span className="text-sm">Price : ${item.price}</span>
              </div>
            </div>
            <div className="space-y-3">
              <p className="text-sm">{item.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Services;
