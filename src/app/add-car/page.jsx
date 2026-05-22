"use client"

import { authClient } from "@/lib/auth-client";
import { Button, Card, FieldError, Input, Label, ListBox, Select, TextArea, TextField } from "@heroui/react";
import { toast } from "sonner";

const AddCarPage = () => {
    const { data: session } = authClient.useSession();

    const onSubmit = async (e) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        const carAdd = Object.fromEntries(formData.entries())

        if(carAdd.seatCapacity){
            carAdd.seatCapacity = Number(carAdd.seatCapacity);
        }

        if (carAdd.price) {
        carAdd.price = Number(carAdd.price); 
    }

        carAdd.userEmail = session?.user?.email
        carAdd.userName = session?.user?.name
        
        carAdd.bookingCount = 0

        const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/add-car`, {
            method: "POST",
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify(carAdd)
        });

        const data = await res.json()
        if (data?.insertedId) {
            toast.success("Car added successfully!");
            e.target.reset();
        } else {
            toast.error("Something went wrong. Please try again.");
        }
    }

    return (
        <div className="bg-slate-50 dark:bg-slate-950 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto bg-white dark:bg-slate-900 rounded-2xl shadow-md border border-gray-100 dark:border-slate-800 p-6 md:p-8">

                <div className="mb-8">
                    <h1 className="text-2xl font-bold text-gray-950 text-center dark:text-white">Add a New Car Listing</h1>
                    <p className="text-gray-500 text-center dark:text-slate-400 text-sm mt-1">Please fill in the fields below to list your vehicle on the platform.</p>
                </div>

                <Card>
                    <form onSubmit={onSubmit} className="p-10 space-y-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                            <div className="md:col-span-2">
                                <TextField name="carName" isRequired>
                                    <Label>Car Name</Label>
                                    <Input placeholder="Tesla Model S, Toyota RAV4" className="rounded-2xl" />
                                    <FieldError />
                                </TextField>
                            </div>

                            <TextField name="price" type="number" isRequired>
                                <Label>Daily Rent Price ($)</Label>
                                <Input placeholder="100" className="rounded-2xl" />
                                <FieldError />
                            </TextField>

                            <div>
                                <Select name="carType" isRequired className="w-full" placeholder="Select category">
                                    <Label>Car Type</Label>
                                    <Select.Trigger className="rounded-2xl">
                                        <Select.Value />
                                        <Select.Indicator />
                                    </Select.Trigger>
                                    <Select.Popover>
                                        <ListBox>
                                            <ListBox.Item id="SUV" textValue="SUV">SUV<ListBox.ItemIndicator /></ListBox.Item>
                                            <ListBox.Item id="Sedan" textValue="Sedan">Sedan<ListBox.ItemIndicator /></ListBox.Item>
                                            <ListBox.Item id="Hatchback" textValue="Hatchback">Hatchback<ListBox.ItemIndicator /></ListBox.Item>
                                            <ListBox.Item id="Luxury" textValue="Luxury">Luxury<ListBox.ItemIndicator /></ListBox.Item>
                                            <ListBox.Item id="Truck" textValue="Truck">Truck<ListBox.ItemIndicator /></ListBox.Item>
                                            <ListBox.Item id="Van" textValue="Van">Van<ListBox.ItemIndicator /></ListBox.Item>
                                        </ListBox>
                                    </Select.Popover>
                                </Select>
                            </div>

                            <TextField name="imageUrl" type="text" isRequired>
                                <Label>Image URL</Label>
                                <Input placeholder="https://imgbb.com/your-image-link" className="rounded-2xl" />
                                <FieldError />
                            </TextField>

                            <TextField name="seatCapacity" type="number" isRequired>
                                <Label>Seat Capacity</Label>
                                <Input type="number" placeholder="e.g., 5" className="rounded-2xl" />
                                <FieldError />
                            </TextField>

                            <div className="md:col-span-2">
                                <TextField name="pickupLocation" type="text" isRequired>
                                    <Label>Pickup Location</Label>
                                    <Input placeholder="Dhaka Uddan, Dhaka 1207" type="text" className="rounded-2xl" />
                                    <FieldError />
                                </TextField>
                            </div>

                            <div>
                                <Select name="availabilityStatus" isRequired className="w-full" placeholder="Availability Status">
                                    <Label>Availability Status</Label>
                                    <Select.Trigger className="rounded-2xl">
                                        <Select.Value />
                                        <Select.Indicator />
                                    </Select.Trigger>
                                    <Select.Popover>
                                        <ListBox>
                                            <ListBox.Item id="Available" textValue="Available">Available<ListBox.ItemIndicator /></ListBox.Item>
                                            <ListBox.Item id="Unavailable" textValue="Unavailable">Unavailable<ListBox.ItemIndicator /></ListBox.Item>
                                        </ListBox>
                                    </Select.Popover>
                                </Select>
                            </div>

                            <div className="md:col-span-2">
                                <TextField name="description" isRequired>
                                    <Label>Description</Label>
                                    <TextArea placeholder="Describe the travel experience..." className="rounded-3xl" />
                                    <FieldError />
                                </TextField>
                            </div>

                        </div>

                        <Button type="submit" variant="primary" className="w-full">
                            Add Car
                        </Button>
                    </form>
                </Card>

            </div>
        </div>
    );
};

export default AddCarPage;