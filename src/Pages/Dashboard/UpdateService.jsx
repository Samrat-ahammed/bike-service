const UpdateService = () => {
  return (
    <div>
      <div className="my-24">
        <div>
          <section className="p-6 bg-gradient-to-r from-purple-200 to-blue-200 text-gray-50 rounded-md">
            <p className="bg-purple-500 w-1/4 font-bold text-3xl rounded-t-md p-2">
              Update Your Service
            </p>
            <form
              action=""
              className="container flex flex-col mx-auto space-y-12"
            >
              <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-b-md rounded-tr-lg shadow-sm bg-gradient-to-r from-purple-500 to-blue-500">
                <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                  <div className="col-span-full sm:col-span-3 space-y-2">
                    <label className="text-sm">Service-Name</label>
                    <input
                      id="firstname"
                      type="text"
                      placeholder="Service Name"
                      className="w-full p-3 rounded-md focus:ring focus:ri focus:ri border-gray-700 text-gray-900"
                    />
                  </div>
                  <div className="col-span-full sm:col-span-3 space-y-2">
                    <label className="text-sm">Service-Price</label>
                    <input
                      id="lastname"
                      type="text"
                      placeholder="Price"
                      className="w-full p-3 rounded-md focus:ring focus:ri focus:ri border-gray-700 text-gray-900"
                    />
                  </div>
                  <div className="col-span-full sm:col-span-3 space-y-2">
                    <label className="text-sm">Service-Image</label>
                    <input
                      type="text"
                      placeholder="Service Image"
                      className="w-full p-3 rounded-md focus:ring focus:ri focus:ri border-gray-700 text-gray-900"
                    />
                  </div>
                  <div className="col-span-full">
                    <label className="text-sm">Service-Description</label>
                    <textarea
                      id="bio"
                      placeholder="Service Description"
                      className="w-full p-3 rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900"
                    ></textarea>
                  </div>

                  <div className="col-span-full sm:col-span-2 space-y-2">
                    <select className="w-full max-w-xs text-black p-2 rounded-md">
                      <option disabled selected>
                        Select Your Service_Area?
                      </option>
                      <option>United States</option>
                      <option>Australia</option>
                      <option>Germany</option>
                      <option>Japan</option>
                      <option>Brazil</option>
                      <option>South Africa</option>
                      <option>Italy</option>
                      <option>Russia</option>
                    </select>
                  </div>
                </div>
              </fieldset>
            </form>
            <button className="bg-purple-500 font-bold text-2xl p-2 flex justify-center items-center mx-auto mt-6 rounded-md">
              Update Service
            </button>
          </section>
        </div>
      </div>
    </div>
  );
};

export default UpdateService;
