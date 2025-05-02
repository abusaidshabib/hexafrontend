import { Button, Form, Input } from "@heroui/react";
import Image from "../../assets/login_bg.png";

const Login = () => {



    return (
        <div className="font-dmsans min-h-screen flex items-center justify-center bg-gray-100 px-4">
            <div className="bg-white rounded-2xl shadow-2xl w-full max-w-5xl flex flex-col md:flex-row overflow-hidden">
                {/* Login Form Section */}
                <div className="w-full md:w-1/2 p-10 flex flex-col justify-center">
                    <h1 className="text-4xl font-bold leading-tight mb-8">
                        SIGN IN TO <br /> ACCOUNT
                    </h1>

                    <Form className="space-y-5">

                        <Input label="Email" type="email" variant="underlined" />
                        <Input label="Password" type="password" variant="underlined" />

                        <div className="text-sm text-right">
                            <a href="#" className="text-gray-600 hover:underline">
                                FORGOT YOUR PASSWORD?
                            </a>
                        </div>

                        <Button type="submit" className="w-full font-mono bg-black text-white hover:bg-gray-900">
                            SIGN IN
                        </Button>
                    </Form>

                    <div className="mt-8 text-center">
                        <p className="text-sm mb-3">NEW CUSTOMER?</p>
                        <Button variant="flat" className="w-full bg-gray-800 text-white font-mono hover:bg-black">
                            CREATE ACCOUNT
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

export default Login;
