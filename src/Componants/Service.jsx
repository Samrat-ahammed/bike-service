import { Link } from "react-router-dom";

const Service = ({ item }) => {
  const { _id, title, price, img, description } = item || {};
  return (
    <div className="flex mx-auto justify-center items-center w-full">
      <div className="max-w-xs rounded-md shadow-md dark:bg-gray-900 dark:text-gray-100">
        <img
          src={img}
          alt=""
          className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500 relative"
        />
        <div className="absolute">
          <h2 className="font-semibold tracki -mt-10 ml-4 bg-slate-500 rounded-lg p-1 text-white">
            Price:${price}
          </h2>
        </div>
        <div className="flex flex-col justify-between p-6 space-y-8">
          <div className="space-y-2">
            <h2 className="text-xl font-semibold tracki">{title}</h2>
            <p className="dark:text-gray-100">{description}</p>
          </div>
          <Link
            to={`/SingleServices/${_id}`}
            type="button"
            className="px-8 py-3 font-semibold rounded-full bg-rose-300 dark:text-gray-800 text-center"
          >
            Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Service;
