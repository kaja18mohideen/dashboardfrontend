import React, { useState } from "react";
import Menubar from "../Components/Menubar";
import MenuToggle from "../Components/MenuToggle";
import Navbar from "../Components/Navbar";

const CustomerManagement = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleMenuToggle = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="flex">
      {/* Sidebar */}
      <div
        className={`w-1/4 h-screen bg-gray-300 text-gray-700 ${
          showMenu ? "" : "hidden"
        } lg:block`}
      >
        <Menubar />
      </div>
      
      {/* Main Content */}
      <div className="w-3/4 h-screen bg-gray-100">
        {/* Navbar */}
        <Navbar pagename="Web Code" />
        
        {/* Menu Toggle Button */}
        <MenuToggle showMenu={showMenu} handleMenuToggle={handleMenuToggle} />
        
        {/* Task List */}
        <div className="p-6">
          <h1 className="text-3xl font-bold mb-4 text-gray-800">Web Code Task Completion List</h1>
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-200 text-gray-700">
                <th className="border px-4 py-2">NAME</th>
                <th className="border px-4 py-2">URL</th>
                <th className="border px-4 py-2">MARK</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-4 py-2">John Doe</td>
                <td className="border px-4 py-2">http://example.com</td>
                <td className="border px-4 py-2">8</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">Jane Doe</td>
                <td className="border px-4 py-2">http://example.com</td>
                <td className="border px-4 py-2">5</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CustomerManagement;
