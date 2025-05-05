import React, { useState } from 'react';

const SelectColor = () => {
    const [selected, setSelected] = useState("Orange");

    const colors = ["Orange", "Black", "Gray"];

    const colorMap = {
        Orange: "bg-orange-500",
        Black: "bg-black",
        Gray: "bg-gray-400",
    };

    return (
        <div className="space-y-2">
            <h3 className="text-sm font-medium text-gray-600">Select Color: {selected}</h3>
            <div className="flex space-x-3">
                {colors.map((color) => (
                    <button
                        key={color}
                        onClick={() => setSelected(color)}
                        className={`w-6 h-6 rounded-full border-2 
                            ${colorMap[color]} 
                            ${selected === color ? "ring-2 ring-offset-2 ring-gray-700" : ""}
                        `}
                        title={color}
                    />
                ))}
            </div>
        </div>
    );
};

export default SelectColor;
