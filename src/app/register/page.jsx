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
import { FcGoogle } from "react-icons/fc";

const RegistrationPage = () => {
    const onSubmit = async (e)=>{
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        const user = Object.fromEntries(formData.entries());
        const {data, error} = await authClient.signUp.email({
            email: user.email,
            name: user.name,
            password: user.password,
            image: user.image

        })
        console.log({data, error})
    }

    const handleSignInGoogle = async () => {
        await authClient.signIn.social({
            provider: "google"
        });
    };


    return (
        <div className="min-h-screen flex items-center justify-center py-12 px-4">
            <Card className="w-full max-w-md p-6">

                <CardHeader className="flex flex-col gap-2">
                    <h1 className="text-3xl font-bold text-center text-gray-800">
                        Create Account
                    </h1>
                    <p className="text-gray-500 text-center">Please register to get started</p>
                </CardHeader>

                <Form onSubmit={onSubmit}
                 className="flex w-full flex-col gap-4">
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
                        <Input placeholder="Masudur Rahman" />
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
                        <Input placeholder="hafezmasudranamn@gmail.com" />
                        <FieldError />
                    </TextField>

                    
                    <TextField
                        name="image"
                        type="url"
                        validate={(value) => {
                            if (value && !/^https?:\/\/.+\.(jpg|jpeg|png|webp|gif)$/i.test(value)) {
                                return "Please enter a valid image URL";
                            }
                            return null;
                        }}
                    >
                        <Label>Photo URL (Optional)</Label>
                        <Input placeholder="https://example.com/photo.jpg" />
                        <Description>Upload your profile picture URL</Description>
                        <FieldError />
                    </TextField>

                    
                    <TextField
                        isRequired
                        minLength={8}
                        name="password"
                        type="password"
                        validate={(value) => {
                            if (value.length < 8) {
                                return "Password must be at least 6 characters";
                            }
                            if (!/[A-Z]/.test(value)) {
                                return "Password must contain at least one uppercase letter";
                            }
                            if (!/[a-z]/.test(value)) {
                                return "Password must contain at least one lowercase letter";
                            }
                            return null;
                        }}
                    >
                        <Label>Password</Label>
                        <Input placeholder="Enter your password" />
                        <Description>Must be at least 6 characters with 1 uppercase and 1 lowercase</Description>
                        <FieldError />
                    </TextField>

                    
                    <div className="flex gap-2 mt-2">
                        <Button type="submit" color="primary">
                            <Check />
                            Register
                        </Button>
                        <Button type="reset" variant="secondary">
                            Reset
                        </Button>
                    </div>
                </Form>

                <div className="my-4 text-center">
                    <span className="px-2 text-gray-400 text-sm">OR</span>
                </div>

                <Button onClick={handleSignInGoogle}
                    className="w-full bg-white border border-gray-300 text-gray-700 hover:bg-gray-50"
                    size="lg"
                >
                    <FcGoogle /> Login with Google
                </Button>

                <div className="text-center mt-6">
                    <p className="text-gray-600">
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