import { React, useEffect, useState } from "react";
import axios from "axios";
function Profile() {
  const [token, setToken] = useState("");
  const [user, setUser] = useState({});
  // const [password, changePassword] = useState(false);
  useEffect(() => {
    setToken(localStorage.getItem("token"));
    if (token) {
      axios
        .get("http://localhost:3001/api/user", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          setUser(res.data[0]);
        });
    }
  }, [token]);

  const date1 = new Date(user.date);
  const date2 = new Date();
  const diffTime = Math.abs(date2 - date1);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return (
    <>
      <div className="px-24 h-screen flex flex-col justify-center items-center space-y-5">
        <div className="bg-white rounded-xl shadow-2xl">
          <div className="flex">
            <img
              src={`https://ui-avatars.com/api/?name=${
                user.name ? user.name : "John Doe"
              }`}
              alt="logo"
              className="hidden lg:block rounded-tl-xl w-60 object-cover"
              title="profile"
            />
            <div className="p-8">
              <h3 className="font-bold text-2xl mb-5">Name: {user.name}</h3>
              <p className="font-mono leading-relaxed">Email: {user.email}</p>
              <button
                className="mt-5 rounded-lg px-4 py-2 bg-blue-500 text-blue-50 shadow hover:shadow-xl duration-300"
                // onClick={() => changePassword(true)}
              >
                {" "}
                Change Password
              </button>
            </div>
          </div>
          <div class="flex justify-evenly mt-6 py-6 border border-neutral border-r-0 border-b-0 border-l-0">
            <div class="text-center">
              <h3 class="font-bold text-secondary"> Some data</h3>
              <p class="text-xs text-text tracking-widest w-20">data result</p>
            </div>
            <div class="text-center">
              <h3 class="font-bold text-secondary">some data</h3>
              <p class="w-20 lg:text-xs text-text tracking-widest">
                Data result
              </p>
            </div>
          </div>
          <footer className="rounded-b-lg bg-gray-100 text-sm text-gray-500 px-8 py-3 text-right">
            Profile Created {diffDays === 1 ? "Today " : diffDays + " days ago"}
          </footer>
        </div>
      </div>
    </>
  );
}

export default Profile;
