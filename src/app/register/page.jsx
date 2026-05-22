"use client";

import { authClient } from "@/lib/auth-client";
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
import { Check } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FcGoogle } from "react-icons/fc";
import { toast } from "sonner";

const RegistrationPage = () => {
    const router = useRouter();

    const onSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const user = Object.fromEntries(formData.entries());

        if (!user.email || !user.password || !user.name) {
            return toast.error("Please fill in all required fields.");
        }

        try {
            const { data, error } = await authClient.signUp.email({
                email: user.email,
                name: user.name,
                password: user.password,
                image: user.image || "",
            });

            if (error) {
                return toast.error(error.message || "Registration failed!");
            }

            if (data) {
                toast.success("Registration successful!");
                router.push('/')
            }
        } catch (err) {
            toast.error("Something went wrong. Please try again.");
        }
    };

    const handleSignInGoogle = async () => {
        try {
            await authClient.signIn.social({
                provider: "google",
            });
            toast.success("Redirecting to Google...");
        } catch (err) {
            toast.error("Google sign-in failed. Please try again.");
        }
    };

    return (

        <div className="min-h-screen flex items-center justify-center py-8 px-4 sm:px-6 lg:px-8">
            <Card className="w-full max-w-md p-4 sm:p-6">

                <CardHeader className="flex flex-col gap-2 pb-4">
                    <h1 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 dark:text-gray-100">
                        Create Account
                    </h1>
                    <p className="text-gray-500 text-center text-sm sm:text-base">
                        Please register to get started
                    </p>
                </CardHeader>

                <Form onSubmit={onSubmit} className="flex w-full flex-col gap-4">

                    <TextField
                        isRequired
                        name="name"
                        type="text"
                        validate={(value) => {
                            if (value.length < 3) {
                                return "Name must be at least 3 characters";
                            }
                            return null;
                        }}
                    >
                        <Label>Full Name</Label>
                        <Input placeholder="Masudur Rahman" className="w-full" />
                        <FieldError />
                    </TextField>

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
                        <Input placeholder="example@gmail.com" className="w-full" />
                        <FieldError />
                    </TextField>

                    <TextField
                        name="image"
                        type="url"
                        validate={(value) => {
                            if (value && !/^https?:\/\/.+\.(jpg|jpeg|png|webp|gif)$/i.test(value)) {
                                return "Please enter a valid image URL (.jpg, .png, .webp)";
                            }
                            return null;
                        }}
                    >
                        <Label>Photo URL <span className="text-gray-400 font-normal">(Optional)</span></Label>
                        <Input placeholder="https://example.com/photo.jpg" className="w-full" />
                        <Description className="text-xs">Direct image link ending with .jpg, .png, .webp etc.</Description>
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
                            if (!/[a-z]/.test(value)) {
                                return "Password must contain at least one lowercase letter";
                            }
                            if (!/[0-9]/.test(value)) {
                                return "Password must contain at least one number";
                            }
                            return null;
                        }}
                    >
                        <Label>Password</Label>
                        <Input placeholder="Enter your password" className="w-full" />
                        <Description className="text-xs">
                            Min 8 characters with uppercase, lowercase & number
                        </Description>
                        <FieldError />
                    </TextField>

                    <div className="flex flex-col sm:flex-row gap-2 mt-2">
                        <Button type="submit" color="primary" className="w-full sm:flex-1">
                            <Check className="w-4 h-4" />
                            Register
                        </Button>
                        <Button type="reset" variant="secondary" className="w-full sm:w-auto">
                            Reset
                        </Button>
                    </div>
                </Form>

                
                <div className="relative my-6">
                    <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-gray-300"></div>
                    </div>
                    <div className="relative flex justify-center text-sm">
                        <span className="px-2 bg-white dark:bg-gray-900 text-gray-500">OR</span>
                    </div>
                </div>

                <Button
                    onClick={handleSignInGoogle}
                    className="w-full bg-white border border-gray-300 text-gray-700 hover:bg-gray-50"
                    size="lg"
                >
                    <FcGoogle className="text-xl" /> Register with Google
                </Button>

                <div className="text-center mt-6">
                    <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base">
                        Already have an account?{" "}
                        <Link href="/login" className="text-blue-600 hover:text-blue-700 font-semibold">
                            Login
                        </Link>
                    </p>
                </div>

            </Card>
        </div>
    );
};

export default RegistrationPage;