import { AiOutlineDelete } from "react-icons/ai";
import { RxUpdate } from "react-icons/rx";
import { Link } from "react-router-dom";

const ManageServices = () => {
  return (
    <div className="bg-rose-200 p-6">
      <div className="grid grid-cols-4 gap-5">
        <div className="rounded-md shadow-md bg-gradient-to-r from-purple-300">
          <img
            src="https://source.unsplash.com/random/300x300/?2"
            alt=""
            className="object-cover object-center w-full rounded-t-md h-72 dark:dark:bg-gray-500"
          />
          <div className="flex flex-col justify-between p-6 space-y-8">
            <div className="space-y-2">
              <h2 className="text-3xl font-semibold tracki">
                Donec lectus leo
              </h2>
              <p className="dark:dark:text-gray-100">
                Curabitur luctus erat nunc, sed ullamcorper erat vestibulum
                eget.
              </p>
            </div>
            <div className="flex justify-between space-x-3">
              <Link
                to={"/dashboard/updateService"}
                type="button"
                className="flex items-center justify-center w-full p-3 font-semibold bg-white rounded-md"
              >
                Update <RxUpdate className="text-2xl ml-3" />
              </Link>
              <button
                type="button"
                className="flex items-center justify-center text-red-900 w-full p-3 font-semibold bg-white rounded-md"
              >
                Delete
                <AiOutlineDelete className="text-2xl ml-3" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageServices;
