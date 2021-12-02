import React from "react";
import { Timeline } from "antd";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-400">
      <h1 className="text-2xl ml-2 font-semibold text-blue-100 text-center m-5 p-5 lg:w-1/3">
        Welcome to Basic FullStack React App with{" "}
        <span className="text-pink-600">TailwindCSS and Ant Design</span>
        as FrontEnd; <span className="text-green-600">Node and Express</span> as
        Backend; and <span className="text-blue-600">MongoDB</span> as Database
      </h1>
      <h1 className="text-2xl ml-2 font-semibold text-red-600 text-center m-5 p-5">
        ---{">"} Pre Built Components
      </h1>
      <Timeline>
        <Timeline.Item>
          <h1 className="text-2xl ml-2 font-semibold text-indigo-600 text-center m-5 p-5">
            <Link to="/login">Login Page</Link>
          </h1>
        </Timeline.Item>
        <Timeline.Item>
          <h1 className="text-2xl ml-2 font-semibold text-indigo-600 text-center m-5 p-5">
            <Link to="/register">Register Page</Link>
          </h1>
        </Timeline.Item>
        <Timeline.Item>
          <h1 className="text-2xl ml-2 font-semibold text-indigo-600 text-center m-5 p-5">
            <Link to="/profile">Profile Page</Link>
          </h1>
        </Timeline.Item>
      </Timeline>
    </div>
  );
}

export default HomePage;
