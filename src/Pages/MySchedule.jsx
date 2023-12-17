import { useContext, useEffect, useState } from "react";
import useAxiosSecure from "../useServiceHook/useAxiosSecure";
import { AuthContext } from "../Provider/AuthProvider";

const MySchedule = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useContext(AuthContext);
  const [cartService, setCartService] = useState();

  useEffect(() => {
    axiosSecure.get(`http://localhost:5000/cart/${user?.email}`).then((res) => {
      setCartService(res.data);
    });
  }, [axiosSecure, user]);

  const totalPrice = cartService?.reduce(
    (acc, item) => acc + parseInt(item.price, 10),
    0
  );
  return (
    <div>
      <h1 className="text-4xl w-[400px] mx-auto text-center rounded-lg font-bold mt-24 mb-24 py-10 text-white bg-gradient-to-r from-indigo-500 via-purple-300 to-pink-400">
        My Cart
      </h1>
      <div className="flex flex-col p-6 space-y-4 sm:p-10 dark:bg-gray-900 dark:text-gray-100">
        <ul className="flex flex-col divide-y dark:divide-gray-700">
          {cartService?.map((item, idx) => (
            <li
              key={idx}
              className="flex flex-col py-6 sm:flex-row sm:justify-between"
            >
              <div className="flex w-full space-x-2 sm:space-x-4">
                <img
                  className="flex-shrink-0 object-cover w-20 h-20 dark:border-transparent rounded outline-none sm:w-32 sm:h-32 dark:bg-gray-500"
                  src={item.img}
                  alt="Polaroid camera"
                />
                <div className="flex flex-col justify-between w-full pb-4">
                  {item.title}
                  <div className="flex justify-between w-full pb-2 space-x-2">
                    <div className="space-y-1">
                      <h3 className="text-lg font-semibold leadi sm:pr-8"></h3>
                      <p className="text-sm dark:text-blue-900">Pending</p>
                    </div>
                    <div className="text-right">
                      <p className="text-lg font-semibold">{item.price}</p>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
        <div className="h[2px] w-full bg-black text-white p-2 font-semibold flex justify-between">
          <span>Total Price:</span>
          {totalPrice}$
        </div>
      </div>
    </div>
  );
};

export default MySchedule;
