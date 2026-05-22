"use client"
import { AlertDialog, Button } from "@heroui/react";


const BookingCancelAlert = ({bookingId}) => {
    const handleCancelBooking = async () => {
        const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/bookings/${bookingId}`, {
            method: "DELETE",
            headers: {
                "Content-type": "application/json"
            }
        })
        const data = await res.json()
        window.location.reload()
    }
    return (
        <AlertDialog>
            <Button
                size="sm"
                variant="bordered"
                className="flex-1 sm:w-32 border-danger text-danger hover:bg-danger/10 font-medium rounded-xl transition-all"
            >
                Cancel Booking
            </Button>
            <AlertDialog.Backdrop>
                <AlertDialog.Container>
                    <AlertDialog.Dialog className="sm:max-w-100">
                        <AlertDialog.CloseTrigger />
                        <AlertDialog.Header>
                            <AlertDialog.Icon status="danger" />
                            <AlertDialog.Heading>Delete booking permanently?</AlertDialog.Heading>
                        </AlertDialog.Header>
                        <AlertDialog.Body>
                            <p>
                                This will permanently delete <strong>My Booking</strong> and all of its
                                data. This action cannot be undone.
                            </p>
                        </AlertDialog.Body>
                        <AlertDialog.Footer>
                            <Button slot="close" variant="tertiary">
                                Cancel
                            </Button>
                            <Button onClick={handleCancelBooking} slot="close" variant="danger">
                                Delete Booking
                            </Button>
                        </AlertDialog.Footer>
                    </AlertDialog.Dialog>
                </AlertDialog.Container>
            </AlertDialog.Backdrop>
        </AlertDialog>
    );
};

export default BookingCancelAlert;