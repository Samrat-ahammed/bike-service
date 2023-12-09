const MySchedule = () => {
  return (
    <div>
      <div className="flex flex-col p-6 space-y-4 sm:p-10 dark:bg-gray-900 dark:text-gray-100">
        <ul className="flex flex-col divide-y dark:divide-gray-700">
          <li className="flex flex-col py-6 sm:flex-row sm:justify-between">
            <div className="flex w-full space-x-2 sm:space-x-4">
              <img
                className="flex-shrink-0 object-cover w-20 h-20 dark:border-transparent rounded outline-none sm:w-32 sm:h-32 dark:bg-gray-500"
                src="https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?ixlib=rb-1.2.1&amp;ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;auto=format&amp;fit=crop&amp;w=1350&amp;q=80"
                alt="Polaroid camera"
              />
              <div className="flex flex-col justify-between w-full pb-4">
                <div className="flex justify-between w-full pb-2 space-x-2">
                  <div className="space-y-1">
                    <h3 className="text-lg font-semibold leadi sm:pr-8">
                      Polaroid camera
                    </h3>
                    <p className="text-sm dark:text-blue-900">Pending</p>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-semibold">$ 59.99</p>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MySchedule;
