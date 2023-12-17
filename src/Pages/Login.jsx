import { useContext } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";

const Login = () => {
  const { login } = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();

    const from = e.target;
    const email = from.email.value;
    const password = from.password.value;

    login(email, password)
      .then((result) => {
        console.log(result.user);
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "User Login successfully.",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((err) => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${err}`,
          showConfirmButton: false,
          timer: 1500,
        });
      });
  };
  return (
    <div className="bg-teal-100 mx-auto items-center flex justify-center mt-14">
      <Helmet>
        <title>Bike-Service || Login</title>
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
              onSubmit={handleLogin}
              action=""
              className="self-stretch space-y-3 mb-10"
            >
              <label className="text-2xl font-bold text-slate-400">
                Login Now !
              </label>
              <div>
                <label className="text-sm sr-only">Email address</label>
                <input
                  name="email"
                  id="lastName"
                  type="text"
                  placeholder="Email address"
                  className="w-full px-6 h-14 rounded-md focus:ring focus:ri dark:border-gray-700"
                />
              </div>
              <div>
                <label className="text-sm sr-only">Your Password</label>
                <input
                  name="password"
                  id="Password"
                  type="text"
                  placeholder="Password"
                  className="w-full px-6 h-14 rounded-md focus:ring focus:ri dark:border-gray-700"
                />
              </div>
              <input
                type="submit"
                value="Login"
                className="px-8 bg-blue-400 py-3 font-semibold rounded-lg dark:bg-gray-100 dark:text-gray-800"
              />
            </form>
            <label className="mt-10 text-xl font-semibold">
              New Here? Please-
              <Link
                className="mt-10 text-xl font-semibold text-blue-800"
                to={"/register"}
              >
                Register
              </Link>
            </label>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
