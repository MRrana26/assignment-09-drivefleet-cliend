"use client";
import { Button, FieldError, Input, Label, ListBox, Modal, Select, Surface, TextArea, TextField } from "@heroui/react";
import { FaEdit } from "react-icons/fa";

const EditCarsDetails = ({ car }) => {
    return (
        <Modal>
            <Button
                variant="primary"
                className="flex items-center justify-center gap-2 w-full py-2 rounded-xl text-sm font-semibold"
            >
                <FaEdit className="text-base" />
                Edit
            </Button>

            <Modal.Backdrop>
                <Modal.Container placement="auto">
                    <Modal.Dialog className="sm:max-w-xl">
                        <Modal.CloseTrigger />
                        <Modal.Header>
                            <Modal.Heading>Edit Car Details</Modal.Heading>
                        </Modal.Header>
                        <Modal.Body className="p-6">
                            <Surface variant="default">
                                <div className="p-6 space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                                        <div className="md:col-span-2">
                                            <TextField defaultValue={car?.carName} name="carName" isRequired>
                                                <Label>Car Name</Label>
                                                <Input placeholder="Toyota Corolla" className="rounded-2xl" />
                                                <FieldError />
                                            </TextField>
                                        </div>

                                        <div>
                                            <Select defaultSelectedKey={car?.carType} name="carType" isRequired className="w-full">
                                                <Label>Car Type</Label>
                                                <Select.Trigger className="rounded-2xl">
                                                    <Select.Value />
                                                    <Select.Indicator />
                                                </Select.Trigger>
                                                <Select.Popover>
                                                    <ListBox>
                                                        {["SUV", "Sedan", "Hatchback", "Luxury", "Truck", "Van"].map(type => (
                                                            <ListBox.Item key={type} id={type} textValue={type}>
                                                                {type}
                                                                <ListBox.ItemIndicator />
                                                            </ListBox.Item>
                                                        ))}
                                                    </ListBox>
                                                </Select.Popover>
                                            </Select>
                                        </div>

                                        <div>
                                            <Select defaultSelectedKey={car?.availabilityStatus} name="availabilityStatus" isRequired className="w-full">
                                                <Label>Availability</Label>
                                                <Select.Trigger className="rounded-2xl">
                                                    <Select.Value />
                                                    <Select.Indicator />
                                                </Select.Trigger>
                                                <Select.Popover>
                                                    <ListBox>
                                                        <ListBox.Item id="Available" textValue="Available">
                                                            Available <ListBox.ItemIndicator />
                                                        </ListBox.Item>
                                                        <ListBox.Item id="Unavailable" textValue="Unavailable">
                                                            Unavailable <ListBox.ItemIndicator />
                                                        </ListBox.Item>
                                                    </ListBox>
                                                </Select.Popover>
                                            </Select>
                                        </div>

                                        <TextField defaultValue={car?.price} name="price" type="number" isRequired>
                                            <Label>Daily Rent Price (USD)</Label>
                                            <Input type="number" placeholder="99" className="rounded-2xl" />
                                            <FieldError />
                                        </TextField>

                                        <TextField defaultValue={car?.seatCapacity} name="seatCapacity" isRequired>
                                            <Label>Seat Capacity</Label>
                                            <Input placeholder="5" className="rounded-2xl" />
                                            <FieldError />
                                        </TextField>

                                        <div className="md:col-span-2">
                                            <TextField defaultValue={car?.pickupLocation} name="pickupLocation" isRequired>
                                                <Label>Pickup Location</Label>
                                                <Input placeholder="Dhaka, Bangladesh" className="rounded-2xl" />
                                                <FieldError />
                                            </TextField>
                                        </div>

                                        <div className="md:col-span-2">
                                            <TextField defaultValue={car?.imageUrl} name="imageUrl" isRequired>
                                                <Label>Image URL</Label>
                                                <Input type="url" placeholder="https://example.com/car.jpg" className="rounded-2xl" />
                                                <FieldError />
                                            </TextField>
                                        </div>

                                        <div className="md:col-span-2">
                                            <TextField defaultValue={car?.description} name="description" isRequired>
                                                <Label>Description</Label>
                                                <TextArea placeholder="Describe the car..." className="rounded-3xl" />
                                                <FieldError />
                                            </TextField>
                                        </div>

                                    </div>

                                    <Modal.Footer>
                                        <Button type="submit" slot="close" variant="primary">
                                            Save Changes
                                        </Button>
                                    </Modal.Footer>
                                </div>
                            </Surface>
                        </Modal.Body>
                    </Modal.Dialog>
                </Modal.Container>
            </Modal.Backdrop>
        </Modal>
    );
};

export default EditCarsDetails;