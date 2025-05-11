import React, { useEffect, useState } from "react";
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
    useDisclosure,
} from "@heroui/react";

import {
    Dropdown,
    DropdownTrigger,
    DropdownMenu,
    DropdownItem,
} from "@heroui/react";

import { FaRegSmile, FaSearch, FaUser } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import { MdOutlineShoppingBag } from "react-icons/md";
import { AiOutlineGlobal } from "react-icons/ai";
import { RxCross1 } from "react-icons/rx";

import { menu } from "../json/main";

import "../styles/mega_menu.css"
import CatalogMegaMenu from "./CatalogMegaMenu";
import NewArrivalsMegaMenu from "./NewArrivalsMegaMenu";

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
    const [showNavbar, setShowNavbar] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            if (currentScrollY > lastScrollY && currentScrollY > 80) {
                setShowNavbar(false);
            } else {
                setShowNavbar(true);
            }
            setLastScrollY(currentScrollY);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);
    return (
        <div>
            <div className={`transition-transform duration-300 ${showNavbar ? "translate-y-0" : "-translate-y-full"}`}>
                <Navbar maxWidth="full" className="relative justify-between text-black border-b border-gray-400 font-bold">
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
                <Navbar maxWidth="full" height="36px" className="relative justify-between text-black border-b border-gray-400">
                    <NavbarContent justify="start" className="text-sm">
                        {menu.map((item) => (
                            <NavbarItem key={item.id}>
                                {item.children ? (
                                    <li className="hoverable hover:bg-transparent hover:text-black">
                                        <a href="#" className="capitalize relative block text-sm lg:text-base">
                                            {item.name}
                                        </a>
                                        <div className="absolute left-0 top-full opacity-0 invisible group-hover:visible group-hover:translate-y-2 transition-all duration-300 ease-in-out z-50 p-6 mega-menu mb-16 sm:mb-0 shadow-xl bg-white">
                                            {item.name === "catalog" && <CatalogMegaMenu data={item.children} />}
                                            {item.name === "new arrivals" && <NewArrivalsMegaMenu data={item.children} />}
                                        </div>
                                    </li>
                                ) : (
                                    <a className="capitalize" href={item.url}>{item.name}</a>
                                )}
                            </NavbarItem>
                        ))}
                    </NavbarContent>

                    <NavbarContent justify="end" className="text-sm">
                        <NavbarItem className="hidden lg:flex items-center gap-2">
                            <AiOutlineGlobal /><p>Shipping & Return</p>
                        </NavbarItem>
                        <NavbarItem className="hidden lg:flex items-center gap-2">
                            <FaRegSmile /><p>All categories</p>
                        </NavbarItem>
                    </NavbarContent>
                </Navbar>
            </div>

            <Drawer
                isOpen={isOpen}
                placement="top"
                onOpenChange={onOpenChange}
                radius="none"
                size="lg"
                hideCloseButton
                backdrop="opaque"
                motionProps={{ transition: { duration: 0.8 } }}
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
