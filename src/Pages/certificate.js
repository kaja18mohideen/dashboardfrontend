import React, { useState } from "react";
import Menubar from "../Components/Menubar";
import MenuToggle from "../Components/MenuToggle";
import Navbar from "../Components/Navbar";

const ShowcaseManagement = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleMenuToggle = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="flex">
      <div
        className={`w-1/4 h-auto h-screen bg-blue-200 text-blue-700 ${
          showMenu ? "" : "hidden"
        } lg:block`}
      >
        <Menubar />
      </div>
      <div className="w-3/4 h-screen bg-gray-100">
        <Navbar pagename={"Certificate"} />
        <MenuToggle showMenu={showMenu} handleMenuToggle={handleMenuToggle} />
        <div className="p-6">
          <h1 className="text-3xl font-bold mb-4 text-gray-800">Certificate of Completion</h1>
          <p className="text-gray-700">Congratulations on completing your showcase project!</p>
        </div>
      </div>
    </div>
  );
};

export default ShowcaseManagement;
