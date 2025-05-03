import React from "react";
import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    Link,
    Button,
    Input,
    Drawer,
    DrawerContent,
    DrawerBody,
    useDisclosure
} from "@heroui/react";
import { FaRegSmile, FaSearch, FaUser } from "react-icons/fa";
import { MdOutlineShoppingBag } from "react-icons/md";
import { AiOutlineGlobal } from "react-icons/ai";
import { RxCross1 } from "react-icons/rx";

export const AcmeLogo = () => (
    <svg fill="none" height="36" viewBox="0 0 32 32" width="36">
        <path
            clipRule="evenodd"
            d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
            fill="currentColor"
            fillRule="evenodd"
        />
    </svg>
);

const Menubar = () => {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    return (
        <div>
            {/* Main Navbar */}
            <Navbar shouldHideOnScroll maxWidth="full" className="relative justify-between text-black border-b border-gray-400 font-bold">
                <NavbarContent className="hidden sm:flex gap-4" justify="start">
                    <NavbarItem><Link href="#" className="text-black">CAMERAS</Link></NavbarItem>
                    <NavbarItem><Link href="#" className="text-black">LAPTOP</Link></NavbarItem>
                    <NavbarItem><Link href="#" className="text-black">WATCHES</Link></NavbarItem>
                </NavbarContent>

                <div className="absolute left-1/2 transform -translate-x-1/2">
                    <NavbarBrand>
                        <AcmeLogo />
                        <p className="font-bold text-inherit">ACME</p>
                    </NavbarBrand>
                </div>

                <NavbarContent justify="end" className="items-center">
                    <NavbarItem className="hidden lg:flex">
                        <Link onPress={onOpen} className="border-none bg-white p-0 text-black hover:text-orange-600">
                            <FaSearch />
                        </Link>
                    </NavbarItem>
                    <NavbarItem><FaUser title="User Account" /></NavbarItem>
                    <NavbarItem><MdOutlineShoppingBag title="Cart" /></NavbarItem>
                </NavbarContent>
            </Navbar>

            {/* Submenu Navbar */}
            <Navbar shouldHideOnScroll maxWidth="full" height="36px" className="relative justify-between text-black border-b border-gray-400">
                <NavbarContent justify="start" className="text-sm">
                    {[
                        "Home", "Catalog", "New arrivals", "About", "Contacts",
                        "Blog", "Shop", "Smart Watches", "New Products"
                    ].map((item, index) => (
                        <NavbarItem key={index}>
                            <p className="text-sm">{item}</p>
                        </NavbarItem>
                    ))}
                </NavbarContent>

                <NavbarContent justify="end" className="text-sm">
                    <NavbarItem className="hidden lg:flex items-center gap-2">
                        <AiOutlineGlobal />
                        <p>Shipping & Return</p>
                    </NavbarItem>
                    <NavbarItem className="hidden lg:flex items-center gap-2">
                        <FaRegSmile />
                        <p>All categories</p>
                    </NavbarItem>
                </NavbarContent>
            </Navbar>

            {/* Search Drawer */}
            <Drawer
                isOpen={isOpen}
                placement="top"
                onOpenChange={onOpenChange}
                radius="none"
                size="lg"
                hideCloseButton
                backdrop="opaque"
                motionProps={{
                    transition: { duration: 0.8 },
                }}
                
            >
                <DrawerContent>
                    {(onClose) => (
                        <DrawerBody className="p-5">
                            <div className="flex items-center gap-2">
                                <Input
                                    classNames={{
                                        base: "flex-1",
                                        mainWrapper: "h-full",
                                        input: "text-lg py-4 px-4",
                                        inputWrapper:
                                            "!bg-transparent !hover:bg-transparent !focus:bg-transparent !ring-0 !border-none !shadow-none text-default-500 min-h-[56px] px-4",
                                    }}
                                    placeholder="Type to search..."
                                    size="lg"
                                    startContent={<FaSearch size={18} />}
                                    type="search"
                                />
                                <Button
                                    isIconOnly
                                    variant="light"
                                    onPress={onClose}
                                    className="text-default-500"
                                    aria-label="Close Search"
                                >
                                    <RxCross1 size={20} />
                                </Button>
                            </div>
                        </DrawerBody>
                    )}
                </DrawerContent>
            </Drawer>
        </div>
    );
};

export default Menubar;
