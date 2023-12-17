import { useEffect, useState } from "react";
import { AiFillDelete } from "react-icons/ai";
import useAxiosSecure from "../../useServiceHook/useAxiosSecure";
const ManageUser = () => {
  const axiosSecure = useAxiosSecure();
  const [users, setUsers] = useState();

  const fetchUsers = () => {
    axiosSecure.get("/user").then((res) => setUsers(res.data));
  };

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  const handleAdminRole = (id) => {
    console.log(id);
    axiosSecure.put(`/userRole/${id}`).then((res) => {
      console.log(res.data);
      fetchUsers();
    });
  };
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
        {users?.map((item) => (
          <tbody key={item._id}>
            <tr className="border-b border-opacity-20 dark:border-gray-700 dark:bg-gray-900">
              <td className="p-3">
                <p>{item.name}</p>
                <p>{item.email}</p>
              </td>
              <td className="p-3">
                <button
                  onClick={() => handleAdminRole(item._id)}
                  className="bg-blue-600 rounded-lg p-2 text-white font-semibold"
                >
                  {item?.role ? "Admin" : "User"}
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
        ))}
      </div>
    </div>
  );
};

export default ManageUser;
