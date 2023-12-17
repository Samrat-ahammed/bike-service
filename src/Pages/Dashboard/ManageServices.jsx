import { AiOutlineDelete } from "react-icons/ai";
import { RxUpdate } from "react-icons/rx";
import { Link } from "react-router-dom";
import useAxiosSecure from "../../useServiceHook/useAxiosSecure";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";

const ManageServices = () => {
  const { user } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();
  const [service, setService] = useState();

  const fetchService = () => {
    axiosSecure
      .get(`/serviceByEmail/${user?.email}`)
      .then((res) => setService(res.data));
  };

  useEffect(() => {
    fetchService();
  }, [fetchService]);

  const handleDelete = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const res = await axiosSecure.delete(`/service/${id}`);
          console.log(res.data);
          if (res.data.deletedCount > 0) {
            fetchService();
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          }
        } catch (error) {
          console.error("Error deleting service:", error);
        }
      }
    });
  };
  return (
    <div className="bg-rose-200 p-6">
      <div className="grid grid-cols-4 gap-5">
        {service?.map((item) => (
          <div
            key={item._id}
            className="rounded-md shadow-md bg-gradient-to-r from-purple-300"
          >
            <img
              src={item.img}
              alt=""
              className="object-cover object-center w-full rounded-t-md h-72 dark:dark:bg-gray-500"
            />
            <div className="flex flex-col justify-between p-6 space-y-8">
              <div className="space-y-2">
                <h2 className="text-3xl font-semibold tracki">{item.title}</h2>
                <p className="dark:dark:text-gray-100">{item.description}</p>
                <p className="dark:dark:text-gray-100 text-blue-900 font-bold">
                  Price : {item.price}
                </p>
              </div>
              <div className="flex justify-between space-x-3">
                <Link
                  to={`/dashboard/updateService/${item._id}`}
                  type="button"
                  className="flex items-center justify-center w-full p-3 font-semibold bg-white rounded-md"
                >
                  Update <RxUpdate className="text-2xl ml-3" />
                </Link>
                <button
                  onClick={() => handleDelete(item._id)}
                  type="button"
                  className="flex items-center justify-center text-red-900 w-full p-3 font-semibold bg-white rounded-md"
                >
                  Delete
                  <AiOutlineDelete className="text-2xl ml-3" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageServices;
