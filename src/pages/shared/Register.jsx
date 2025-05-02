import { Button, Form, Input, Checkbox } from "@heroui/react";
import Image from "../../assets/login_bg.png"



const Register = () => {

    return (
        <div className="font-dmsans min-h-screen flex items-center justify-center bg-gray-100 px-4">
            <div className="bg-white rounded-2xl shadow-2xl w-full max-w-5xl flex flex-col md:flex-row overflow-hidden">
                {/* Login Form Section */}
                <div className="w-full md:w-1/2 p-10 flex flex-col justify-center">
                    <h1 className="text-4xl font-bold leading-tight mb-8">
                        SIGN UP TO <br /> ACCOUNT
                    </h1>

                    <Form className="space-y-5">
                        <Input label="Name" type="text" variant="underlined" />

                        <Input label="Email" type="email" variant="underlined" />
                        <Input label="Password" type="password" variant="underlined" />

                        <div className="text-sm text-right">
                            <Checkbox color="secondary">
                                ACCEPT TERMS & CONDITIONS
                            </Checkbox>
                        </div>

                        <Button type="submit" className="w-full font-mono bg-black text-white hover:bg-gray-900">
                            SIGN UP
                        </Button>
                    </Form>

                    <div className="mt-8 text-center">
                        <p className="text-sm mb-3">ALREADY HAVE AN ACCOUNT?</p>
                        <Button variant="flat" className="w-full bg-gray-800 text-white font-mono hover:bg-black">
                            SIGN IN
                        </Button>
                    </div>
                </div>

                {/* Image Section */}
                <div className="md:w-1/2 hidden md:block">
                    <img
                        src={Image}
                        alt="Login illustration"
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>
        </div>
    );
};

export default Register;