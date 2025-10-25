import { use, useContext, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider"; 
import { toast, ToastContainer } from "react-toastify";

const MyProfile = () => {
  const { user, updateUser, setUser } = use(AuthContext);

  const [name, setName] = useState(user?.displayName || "");
  const [photo, setPhoto] = useState(user?.photoURL || "");
  const [message, setMessage] = useState("");

  const handleUpdate = () => {
    if (!user) return;

    updateUser({
      displayName: name,
      photoURL: photo,
    })
      .then(() => {
        setUser({ ...user, displayName: name, photoURL: photo });
        toast.success("✅ Profile updated successfully!");
      })
      .catch((error) => {
        toast.error("❌ " + error.message);
      });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] bg-green-50 p-4">
      <div className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-md">
        <h2 className="text-2xl font-semibold text-center text-green-700 mb-4">
          My Profile
        </h2>

        <div className="flex flex-col items-center gap-4">
          <img
            src={
              user?.photoURL ||
              "https://i.postimg.cc/3JmM6C0G/default-avatar.png"
            }
            alt="profile"
            className="w-24 h-24 rounded-full object-cover shadow-md"
          />

          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter new name"
            className="border border-green-300 p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-green-400"
          />

          <input
            type="text"
            value={photo}
            onChange={(e) => setPhoto(e.target.value)}
            placeholder="Enter photo URL"
            className="border border-green-300 p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-green-400"
          />

          <button
            onClick={handleUpdate}
            className="bg-green-600 text-white font-medium px-5 py-2 rounded hover:bg-green-700 transition"
          >
            Update Profile
          </button>

          <ToastContainer></ToastContainer>
        </div>

        <div className="mt-6 border-t pt-4 text-center text-gray-700">
            
          <p>
            <strong>Name:</strong> {user?.displayName || "N/A"}
          </p>
          <p>
            <strong>Email:</strong> {user?.email}
          </p>
          
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
