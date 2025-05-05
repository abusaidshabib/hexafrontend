import { useState } from "react";


const QuantityIncrease = () => {
    const [quantity, setQuantity] = useState(1);

    const decrease = () => {
        if (quantity > 1) setQuantity(quantity - 1);
    };

    const increase = () => setQuantity(quantity + 1);
    return (
        <>
            <div className="flex gap-3 items-center border border-gray-300 rounded-md px-2 py-1 space-x-3 w-fit mt-2">
                <button
                    onClick={decrease}
                    className="w-8 h-8 flex items-center justify-center bg-black text-white rounded-full text-xl"
                >
                    −
                </button>
                <span className="text-lg font-medium">{quantity}</span>
                <button
                    onClick={increase}
                    className="w-8 h-8 flex items-center justify-center bg-black text-white rounded-full text-xl"
                >
                    +
                </button>
            </div>
        </>
    );
};

export default QuantityIncrease;