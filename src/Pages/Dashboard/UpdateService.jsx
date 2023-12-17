import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import useAxiosPublic from "../../useServiceHook/useAxiosPublic";
import { useParams } from "react-router-dom";
import useAxiosSecure from "../../useServiceHook/useAxiosSecure";
import Swal from "sweetalert2";

const UpdateService = () => {
  const { id } = useParams();
  const [service, setService] = useState([]);
  const axiosSecure = useAxiosSecure();
  const axiosPublic = useAxiosPublic();
  const { register, handleSubmit } = useForm();

  useEffect(() => {
    axiosPublic.get(`/singleService/${id}`).then((res) => {
      setService(res.data);
    });
  }, [axiosPublic, id]);

  const onSubmit = (data) => {
    // why i don.t change only one ite

    console.log(data.title);
    const serviceItem = {
      title: data.title,
      description: data.description,
      price: parseFloat(data.price),
      img: data.img,
      service_area: data.area,
    };
    const res = axiosSecure
      .put(`/serviceUpdate/${id}`, serviceItem)
      .then((res) => {
        console.log(res.data);
        if (res.data?.modifiedCount > 0) {
          Swal.fire("Add your Assignment", "", "success");
        }
      });

    console.log(res);
  };

  return (
    <div>
      <div className="my-24">
        <div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="p-6 bg-gradient-to-r from-purple-200 to-blue-200 text-gray-50 rounded-md"
          >
            <p className="bg-purple-500 w-1/4 font-bold text-3xl rounded-t-md p-2">
              Update Your Service
            </p>
            <div
              action=""
              className="container flex flex-col mx-auto space-y-12"
            >
              <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-b-md rounded-tr-lg shadow-sm bg-gradient-to-r from-purple-500 to-blue-500">
                <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                  <div className="col-span-full sm:col-span-3 space-y-2">
                    <label className="text-sm">Service-Name</label>
                    <input
                      {...register("title")}
                      id="firstname"
                      defaultValue={service.title}
                      type="text"
                      placeholder="Service Name"
                      className="w-full p-3 rounded-md focus:ring focus:ri focus:ri border-gray-700 text-gray-900"
                    />
                  </div>
                  <div className="col-span-full sm:col-span-3 space-y-2">
                    <label className="text-sm">Service-Price</label>
                    <input
                      {...register("price")}
                      id="lastname"
                      defaultValue={service.price}
                      type="text"
                      placeholder="Price"
                      className="w-full p-3 rounded-md focus:ring focus:ri focus:ri border-gray-700 text-gray-900"
                    />
                  </div>
                  <div className="col-span-full sm:col-span-3 space-y-2">
                    <label className="text-sm">Service-Image</label>
                    <input
                      {...register("img")}
                      type="text"
                      defaultValue={service.img}
                      placeholder="Service Image"
                      className="w-full p-3 rounded-md focus:ring focus:ri focus:ri border-gray-700 text-gray-900"
                    />
                  </div>
                  <div className="col-span-full">
                    <label className="text-sm">Service-Description</label>
                    <textarea
                      {...register("description")}
                      defaultValue={service?.description}
                      placeholder="Service Description"
                      className="w-full p-3 text-black rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900"
                    ></textarea>
                  </div>

                  <div className="col-span-full sm:col-span-2 space-y-2">
                    <select
                      defaultValue={service.service_area}
                      {...register("area")}
                      className="w-full max-w-xs text-black p-2 rounded-md"
                    >
                      <option disabled selected={service.service_area}>
                        Select Your Service_Area?
                      </option>
                      <option
                        selected={service.service_area === "United States"}
                        value={"United States"}
                      >
                        United States
                      </option>
                      <option
                        selected={service.service_area === "Australia"}
                        value={"Australia"}
                      >
                        Australia
                      </option>
                      <option
                        selected={service.service_area === "Germany"}
                        value={"Germany"}
                      >
                        Germany
                      </option>
                      <option
                        selected={service.service_area === "Japan"}
                        value={"Japan"}
                      >
                        Japan
                      </option>
                      <option
                        selected={service.service_area === "Brazil"}
                        value={"Brazil"}
                      >
                        Brazil
                      </option>
                      <option
                        selected={service.service_area === "South Africa"}
                        value={"South Africa"}
                      >
                        South Africa
                      </option>
                      <option
                        selected={service.service_area === "Italy"}
                        value={"Italy"}
                      >
                        Italy
                      </option>
                      <option
                        selected={service.service_area === "Russia"}
                        value={"Russia"}
                      >
                        Russia
                      </option>
                    </select>
                  </div>
                </div>
              </fieldset>
            </div>
            <button className="bg-purple-500 font-bold text-2xl p-2 flex justify-center items-center mx-auto mt-6 rounded-md">
              Update Service
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateService;
