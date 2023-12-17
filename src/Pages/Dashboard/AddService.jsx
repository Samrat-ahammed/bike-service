import { useForm } from "react-hook-form";
import useAxiosSecure from "../../useServiceHook/useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import useAxiosPublic from "../../useServiceHook/useAxiosPublic";
const image_hosting_kye = import.meta.env.VITE_IMAGE_HOSTING_KYE;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_kye}`;

const AddService = () => {
  const { user } = useContext(AuthContext);
  const { register, handleSubmit } = useForm();
  const axiosSecure = useAxiosSecure();
  const axiosPublic = useAxiosPublic();

  const onSubmit = async (data) => {
    // console.log(data);
    console.log("Image File Data:", data.image);
    const imageFile = new FormData();
    imageFile.append("image", data.image[0]);

    const res = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    console.log(res);

    if (res.data.success) {
      const service = {
        name: user.displayName,
        email: user.email,
        title: data.serviceName,
        description: data.description,
        price: data.price,
        img: res.data.data.display_url,
        service_area: data.area,
      };
      axiosSecure.post("/service", service).then((res) => {
        if (res.data.insertedId) {
          Swal.fire({
            title: "Add Item Success",
            showClass: {
              popup: `
                animate__animated
                animate__fadeInUp
                animate__faster
              `,
            },
            hideClass: {
              popup: `
                animate__animated
                animate__fadeOutDown
                animate__faster
              `,
            },
          });
        }
      });
    }
  };

  return (
    <div className="my-24">
      <form onSubmit={handleSubmit(onSubmit)}>
        <section className="p-6 bg-gradient-to-r from-purple-200 to-blue-200 text-gray-50 rounded-md">
          <p className="bg-purple-500 w-1/4 font-bold text-3xl rounded-t-md p-2">
            Add Your Service
          </p>
          <div action="" className="container flex flex-col mx-auto space-y-12">
            <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-b-md rounded-tr-lg shadow-sm bg-gradient-to-r from-purple-500 to-blue-500">
              <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                <div className="col-span-full sm:col-span-3 space-y-2">
                  <label className="text-sm">Service-Name</label>
                  <input
                    {...register("serviceName", { required: true })}
                    type="text"
                    placeholder="Service Name"
                    className="w-full p-3 rounded-md focus:ring focus:ri focus:ri border-gray-700 text-gray-900"
                  />
                </div>
                <div className="col-span-full sm:col-span-3 space-y-2">
                  <label className="text-sm">Service-Price</label>
                  <input
                    {...register("price", { required: true })}
                    type="text"
                    placeholder="Price"
                    className="w-full p-3 rounded-md focus:ring focus:ri focus:ri border-gray-700 text-gray-900"
                  />
                </div>

                <div className="col-span-full">
                  <label className="text-sm">Service-Description</label>
                  <textarea
                    {...register("description", { required: true })}
                    placeholder="Service Description"
                    className="w-full p-3 rounded-md text-black focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900"
                  ></textarea>
                </div>

                <div className="col-span-full sm:col-span-2 space-y-2">
                  <select
                    defaultValue={"default"}
                    {...register("area")}
                    className="w-full max-w-xs text-black p-2 rounded-md"
                  >
                    <option disabled selected>
                      Select Your Service_Area?
                    </option>
                    <option value={"United States"}>United States</option>
                    <option value={"Australia"}>Australia</option>
                    <option value={"Germany"}>Germany</option>
                    <option value={"Japan"}>Japan</option>
                    <option value={"Brazil"}>Brazil</option>
                    <option value={"South Africa"}>South Africa</option>
                    <option value={"Italy"}>Italy</option>
                    <option value={"Russia"}>Russia</option>
                  </select>
                </div>
                <div className="col-span-full sm:col-span-3 space-y-2">
                  <input
                    {...register("image")}
                    type="file"
                    className="px-8 py-12 border-2 border-dashed rounded-md dark:border-gray-700 dark:text-gray-400 dark:bg-gray-800"
                  />
                </div>
              </div>
            </fieldset>
          </div>
          <button
            type="submit"
            className="bg-purple-500 font-bold text-2xl p-2 flex justify-center items-center mx-auto mt-6 rounded-md"
          >
            Add Service
          </button>
        </section>
      </form>
    </div>
  );
};

export default AddService;
