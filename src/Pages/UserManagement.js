import React, { useState } from "react";
import Menubar from "../Components/Menubar";
import MenuToggle from "../Components/MenuToggle";
import Navbar from "../Components/Navbar";

const UserManagement = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [viewType, setViewType] = useState("grid");

  const handleMenuToggle = () => {
    setShowMenu(!showMenu);
  };

  const toggleViewType = () => {
    setViewType(viewType === "grid" ? "list" : "grid");
  };

  return (
    <div className="flex">
      <div
        className={`w-1/4 h-auto h-screen bg-gray-200 text-gray-700 ${
          showMenu ? "" : "hidden"
        } lg:block`}
      >
        <Menubar />
      </div>
      <div className="w-3/4 h-screen bg-gray-100">
        <Navbar pagename={"User Management"} />
        <MenuToggle showMenu={showMenu} handleMenuToggle={handleMenuToggle} />
        <div className="p-6">
          <div className="flex justify-end mb-4">
            {/* Toggle view button */}
            <button
              onClick={toggleViewType}
              className="px-4 py-2 bg-blue-500 text-white rounded-md"
            >
              {viewType === "grid" ? "Switch to List View" : "Switch to Grid View"}
            </button>
          </div>
          {/* Render tasks based on view type */}
          {viewType === "grid" ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {taskList.map((task, index) => (
                <div key={index} className="bg-white p-4 shadow-md rounded-md border border-gray-200">
                  <p className="text-lg font-semibold">{task}</p>
                </div>
              ))}
            </div>
          ) : (
            <ul className="list-disc list-inside text-lg">
              {taskList.map((task, index) => (
                <li key={index}>{task}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

const taskList = [
  "Complete the user management feature",
  "Review user access levels",
  "Update user information",
  "Add new users to the system",
  "Remove inactive users",
  "Monitor user activity",
  "Assign tasks to team members",
];

export default UserManagement;
