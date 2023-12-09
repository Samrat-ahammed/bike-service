import { AiFillDelete } from "react-icons/ai";
const ManageUser = () => {
  return (
    <div className="bg-rose-200 p-2">
      <div className="w-full">
        <thead className="dark:bg-gray-700 w-full">
          <tr className="text-left w-full">
            <th className="p-3 w-full">Name</th>

            <th className="p-3 w-full">Role</th>
            <th className="p-3">Option</th>
            <th className="p-3">Status</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b border-opacity-20 dark:border-gray-700 dark:bg-gray-900">
            <td className="p-3">
              <p>Mojibur</p>
              <p>Mojibur@gmail.com</p>
            </td>
            <td className="p-3">
              <button className="bg-blue-600 rounded-lg p-2 text-white font-semibold">
                Admin
              </button>
            </td>
            <td className="p-3">
              <button>
                <AiFillDelete className="text-2xl" />
              </button>
            </td>
            <td className="p-3">
              <p>MemberShip</p>
            </td>
          </tr>
        </tbody>
      </div>
    </div>
  );
};

export default ManageUser;
