"use client";
import { 
    Button, 
    Card, 
    CardHeader, 
    Description, 
    FieldError, 
    Form, 
    Input, 
    Label, 
    TextField 
} from "@heroui/react";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";

const LoginPage = () => {
    return (
        <div className="min-h-screen flex items-center justify-center py-12 px-4">
            <Card className="w-full max-w-md p-6">

                <CardHeader className="flex flex-col gap-2">
                    <h1 className="text-3xl font-bold text-center text-gray-800">
                        Welcome Back
                    </h1>
                    <p className="text-gray-500 text-center">Please login to your account</p>
                </CardHeader>

                <Form className="flex w-full flex-col gap-4">
                    <TextField
                        isRequired
                        name="email"
                        type="email"
                        validate={(value) => {
                            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                                return "Please enter a valid email address";
                            }
                            return null;
                        }}
                    >
                        <Label>Email</Label>
                        <Input placeholder="hafezmasudranamn@gmail.com" />
                        <FieldError />
                    </TextField>

                    <TextField
                        isRequired
                        minLength={8}
                        name="password"
                        type="password"
                        validate={(value) => {
                            if (value.length < 8) {
                                return "Password must be at least 8 characters";
                            }
                            if (!/[A-Z]/.test(value)) {
                                return "Password must contain at least one uppercase letter";
                            }
                            if (!/[0-9]/.test(value)) {
                                return "Password must contain at least one number";
                            }
                            return null;
                        }}
                    >
                        <Label>Password</Label>
                        <Input placeholder="Enter your password" />
                        <Description>Must be at least 8 characters with 1 uppercase and 1 number</Description>
                        <FieldError />
                    </TextField>

                    <Button type="submit" color="primary" className="w-full mt-2">
                        Login
                    </Button>
                </Form>

                
                <div className="relative my-6">
                    <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-gray-300"></div>
                    </div>
                    <div className="relative flex justify-center text-sm">
                        <span className="px-2 bg-white text-gray-500">OR</span>
                    </div>
                </div>

                <Button
                    className="w-full bg-white border border-gray-300 text-gray-700 hover:bg-gray-50"
                    size="lg"
                >
                    <FcGoogle className="text-xl" /> Login with Google
                </Button>

                <div className="text-center mt-6">
                    <p className="text-gray-600">
                        Do not have an account?{" "}
                        <Link href="/register" className="text-blue-600 hover:text-blue-700 font-semibold">
                            Register
                        </Link>
                    </p>
                </div>
            </Card>
        </div>
    );
};

export default LoginPage;