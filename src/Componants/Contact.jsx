const Contact = () => {
  return (
    <div className="w-4/5 mx-auto mt-24">
      <div className="bg-gray-800 flex text-gray-100 p-16 rounded-md">
        <div className=" w-1/2">
          <section>
            <div className="mx-auto">
              <div className="grid gap-4 mx-4">
                <div className="relative">
                  <div className="">
                    <div className="">
                      <h3 className="text-xl font-semibold">Contact With Us</h3>
                      <p className="mt-3 w-2/3">
                        I apologize for the inconvenience your experiencing.
                        Could you please provide more details about the error
                        you encountered? This will help us investigate and
                        resolve the issue more efficiently.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        <div className="w-1/2 space-y-7">
          <div>
            <form action="" className="flex space-x-6">
              <div className="space-y-5">
                <div>
                  <label className="block text-sm">Name</label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Name"
                    className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100"
                  />
                </div>
                <div>
                  <div className="flex justify-between">
                    <label className="text-sm">Phone Number</label>
                  </div>
                  <input
                    type="number"
                    name="phon"
                    id=""
                    placeholder="Phone Number"
                    className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100"
                  />
                </div>
              </div>
              <div className="w-1/2 space-y-5">
                <div>
                  <label className="block text-sm">Email address</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="leroy@jenkins.com"
                    className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100"
                  />
                </div>
                <div>
                  <div className="flex justify-between">
                    <label className="text-sm">Password</label>
                  </div>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="*****"
                    className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100"
                  />
                </div>
              </div>
            </form>
          </div>
          <button className="btn rounded-lg bg-violet-600 px-5 py-3 mx-auto items-center flex justify-center">
            Contact Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
