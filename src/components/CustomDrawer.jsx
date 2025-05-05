import {
    Drawer,
    DrawerContent,
    DrawerHeader,
    DrawerBody,
    DrawerFooter,
    Button,
} from "@heroui/react";
import { FaFacebookF, FaPinterestP, FaTwitter  } from "react-icons/fa";
import SizeSelector from "./SizeSelector";
import QuantityIncrease from "./QuantityIncrease";
import SelectColor from "./SelectColor";

const CustomDrawer = ({ isOpen, onClose, product }) => {

    return (
        <Drawer isOpen={isOpen} onClose={onClose} size="md">
            <DrawerContent>
                {() => (
                    <>
                        <DrawerHeader className="flex flex-col gap-1 font-bold">
                            <p className="text-2xl font-bold py-6">
                                Quick View
                            </p>
                            <hr />
                        </DrawerHeader>
                        <DrawerBody>
                            {product ? (
                                <div className="">
                                    <div className="w-full bg-gradient-to-b from-gray-100 to-gray-300 items-center p-6 rounded-md">
                                        <img src={product?.images[0]} alt={product?.name} />
                                    </div>
                                    <div className="flex flex-col gap-3 py-6">
                                        <h3 className="text-xl font-bold">{product?.name}</h3>
                                        <p className="text-3xl font-bold">${product?.price}</p>
                                        <div>
                                            <p className="text-sm">Quantity</p>
                                            <QuantityIncrease />
                                        </div>
                                        <div>
                                            <p className="text-sm">Select size</p>
                                            <div className="flex gap-3 items-center border border-none rounded-md  py-1 space-x-3 w-fit mt-2">
                                                <SizeSelector />
                                            </div>
                                        </div>
                                        <div>
                                            <SelectColor />
                                        </div>
                                        <p className="text-sm">{product?.description}</p>
                                    </div>
                                    <div className="flex gap-2">
                                        <button className="w-1/2 bg-black text-white py-3 rounded-md">
                                            Add to Cart
                                        </button>
                                        <button className="w-1/2 bg-white border border-gray-300 py-3 rounded-md">
                                            Add to Wishlist
                                        </button>
                                    </div>
                                    <div className="flex gap-2 pt-6">
                                        <FaFacebookF className="bg-gray-200 text-black p-1 rounded-full w-6 h-6" />
                                        <FaTwitter className="bg-gray-200 text-black p-1 rounded-full w-6 h-6" />
                                        <FaPinterestP className="bg-gray-200 text-black p-1 rounded-full w-6 h-6" />
                                    </div>
                                </div>
                            ) : null}

                        </DrawerBody>

                    </>
                )}
            </DrawerContent>
        </Drawer>
    );
};

export default CustomDrawer;
