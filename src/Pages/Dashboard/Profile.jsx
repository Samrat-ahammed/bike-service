const Profile = () => {
  return (
    <div className="bg-rose-200 p-6">
      <div className="">
        <div className="flex flex-col items-center justify-center">
          <div className="flex space-x-5">
            <img
              alt=""
              className="w-[150px] rounded-full ri ri dark:bg-gray-500 ri ri"
              src="https://source.unsplash.com/40x40/?portrait?1"
            />
          </div>
          <div className="text-center mt-5">
            <h2 className="text-2xl font-bold text-black">Jabbar hoq anamul</h2>
            <h2 className="font-semibold text-black">Jabbar@gmail.com</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
