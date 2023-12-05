import { Helmet } from "react-helmet";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="bg-teal-100 mx-auto items-center flex justify-center mt-14">
      <Helmet>
        <title>Bike-Service || Register</title>
      </Helmet>
      <section className="p-6 dark:bg-gray-800 dark:text-gray-100 flex justify-center mx-auto items-center">
        <div className="mx-auto text-center">
          <div className="w-full px-6 py-16 rounded-md sm:px-12 md:px-16 xl:col-span-2 dark:bg-gray-900">
            <span className="block mb-2 dark:text-violet-400">
              Moto-Bike Service system
            </span>
            <h1 className="text-5xl font-extrabold dark:text-gray-50">
              Build it with This Service
            </h1>
            <p className="my-8">
              <span className="font-medium dark:text-gray-50">Moto-Bike-</span>
              Bike service refers to the maintenance and repair activities
              performed on motorcycles to ensure they remain in good working
              condition.
            </p>
            <form
              onSubmit={handleSubmit(onSubmit)}
              action=""
              className="self-stretch space-y-3 mb-10"
            >
              <label className="text-2xl font-bold text-slate-400">
                Register Now !
              </label>
              <div>
                <label className="text-sm sr-only">Your Name</label>
                <input
                  {...register("name", { required: true })}
                  id="name"
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-6 h-14 rounded-md focus:ring focus:ri dark:border-gray-700"
                />
              </div>
              {errors.name && (
                <span className="text-red-800 mt-2">
                  Name field is required
                </span>
              )}
              <div>
                <label className="text-sm sr-only">Email address</label>
                <input
                  {...register("email", { required: true })}
                  id="email"
                  type="text"
                  placeholder="Email address"
                  className="w-full px-6 h-14 rounded-md focus:ring focus:ri dark:border-gray-700"
                />
              </div>
              {errors.name && (
                <span className="text-red-800 mt-2">
                  Email field is required
                </span>
              )}
              <div>
                <label className="text-sm sr-only">Your Password</label>
                <input
                  {...register("password", { required: true })}
                  id="password"
                  type="text"
                  placeholder="Password"
                  className="w-full px-6 h-14 rounded-md focus:ring focus:ri dark:border-gray-700"
                />
              </div>
              {errors.password && (
                <span className="text-red-800 mt-2">
                  Password field is required
                </span>
              )}
              <div>
                <label className="text-sm sr-only">Photo Url</label>
                <input
                  {...register("photoUrl", { required: true })}
                  id="photoUrl"
                  type="text"
                  placeholder="Photo URL"
                  className="w-full px-6 h-14 rounded-md focus:ring focus:ri dark:border-gray-700"
                />
              </div>
              {errors.photoUrl && (
                <span className="text-red-800 mt-2">
                  photoUrl field is required
                </span>
              )}
              <input
                className="px-8 bg-blue-400 py-3 font-semibold rounded-lg dark:bg-gray-100 dark:text-gray-800"
                type="submit"
                value="Login"
              />
              {/* <button
                type="button"
                className="px-8 bg-blue-400 py-3 font-semibold rounded-lg dark:bg-gray-100 dark:text-gray-800"
              >
                Login
              </button> */}
            </form>
            <label className="mt-10 text-xl font-semibold">
              Already Have An Account -
              <Link
                className="mt-10 text-xl font-semibold text-blue-800"
                to={"/login"}
              >
                Login
              </Link>
            </label>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Register;
