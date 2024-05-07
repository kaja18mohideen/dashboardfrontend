import React, { useState } from "react";
import Menubar from "../Components/Menubar";
import MenuToggle from "../Components/MenuToggle";
import Navbar from "../Components/Navbar";

const ContentManagement = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleMenuToggle = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <div className={`w-1/4 bg-gray-900 text-white ${showMenu ? "" : "hidden"} lg:block`}>
        <Menubar />
      </div>

      {/* Main Content */}
      <div className="w-full flex flex-col h-screen bg-gray-50">
        {/* Navbar */}
        <Navbar pagename="Capstone" />

        {/* Content Area */}
        <div className="flex-grow flex flex-col justify-center items-center">
          {/* Task Details */}
          <div className="p-6 text-center">
            <h1 className="text-3xl font-bold mb-4 text-gray-900">Capstone Task</h1>
            <p className="text-lg text-gray-700">
              <b>Create a responsive web application using React.js and submit the URL in this form.</b>
            </p>
          </div>

          {/* Table */}
          <div className="p-6 w-full max-w-3xl overflow-x-auto">
            <table className="w-full bg-white rounded-lg shadow-md">
              <thead className="bg-gray-200">
                <tr>
                  <th className="border px-4 py-2">NAME</th>
                  <th className="border px-4 py-2">URL</th>
                  <th className="border px-4 py-2">MARK</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border px-4 py-2">John Doe</td>
                  <td className="border px-4 py-2"><a href="http://example.com" className="text-blue-600 underline">http://example.com</a></td>
                  <td className="border px-4 py-2">8</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Menu Toggle Button */}
      <MenuToggle showMenu={showMenu} handleMenuToggle={handleMenuToggle} />
    </div>
  );
};

export default ContentManagement;
