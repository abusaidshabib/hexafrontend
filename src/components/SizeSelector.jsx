import React, { useState } from "react";

const sizes = ["XS", "S", "M", "L"];

const SizeSelector = () => {
  const [selected, setSelected] = useState("XS");

  return (
    <div className="space-y-2">
      <div className="flex space-x-3">
        {sizes.map((size) => (
          <button
            key={size}
            onClick={() => setSelected(size)}
            className={`w-10 h-10 rounded-md border text-sm font-medium
              ${
                selected === size
                  ? "bg-black text-white border-black"
                  : "bg-white text-black border-gray-300"
              }`}
          >
            {size}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SizeSelector;
