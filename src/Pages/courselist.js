import React, { useState } from "react";
import Menubar from "../Components/Menubar";
import MenuToggle from "../Components/MenuToggle";
import Navbar from "../Components/Navbar";

const MarketPlace = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleMenuToggle = () => {
    setShowMenu(!showMenu);
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
        <Navbar pagename={"Course List"} />
        <MenuToggle showMenu={showMenu} handleMenuToggle={handleMenuToggle} />
        <div className="p-6">
          <h1 className="text-3xl font-bold mb-4 text-gray-800">Explore Courses</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {courseList.map((course, index) => (
              <div
                key={index}
                className="bg-white p-4 shadow-md rounded-md border border-gray-200"
              >
                <p className="text-lg font-semibold">{course}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const courseList = [
  "Introduction to Computer Science",
  "Data Structures and Algorithms",
  "Web Development with HTML, CSS, and JavaScript",
  "Machine Learning Fundamentals",
  "Mobile App Development with React Native",
  "Introduction to Artificial Intelligence",
  "Database Management Systems",
  "Software Engineering Principles",
  "Computer Networks",
  "Cybersecurity Fundamentals",
  "Operating Systems",
  "Introduction to Data Science",
  "Full-Stack Web Development",
  "Digital Marketing Strategies",
  "Game Development with Unity",
  "Cloud Computing Essentials",
  "Ethical Hacking and Penetration Testing",
  "Business Analysis and Management",
  "Internet of Things (IoT)",
  "Advanced Python Programming",
];

export default MarketPlace;
