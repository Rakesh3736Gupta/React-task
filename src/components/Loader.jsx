import React from "react";
import { grid } from "ldrs";

grid.register();

const Loader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-100 bg-opacity-75 z-50">
      <l-grid size="60" speed="1.5" color="black"></l-grid>
    </div>
  );
};

export default Loader;
