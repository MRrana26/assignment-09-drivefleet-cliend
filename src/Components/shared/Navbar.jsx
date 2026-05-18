"use client";
import { Button, Dropdown, Label } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { IoMdMenu } from 'react-icons/io';

const Navbar = () => {
    return (
        <nav className='bg-white shadow-xl py-2'>
            <div className='container mx-auto px-4 flex justify-between items-center'>
                <div className='flex items-center'>
                    <Image src={'/logo.png'} width={50} height={50} alt='car logo' />
                    <span className='text-3xl text-blue-800 font-bold'>Drive</span>
                    <span className='text-3xl text-red-600 font-bold'>Fleet</span>
                </div>

                <ul className='hidden md:flex items-center gap-3'>
                    <li><Link href={'/'}>Home</Link></li>
                    <li><Link href={'/explore-cars'}>Explore Cars</Link></li>
                    <li><Link href={'/about'}>Add Car</Link></li>
                    <li><Link href={'/my-bookings'}>My Bookings</Link></li>
                </ul>

                <div className='hidden md:flex gap-2'>
                    <Link href={'/'}><Button variant="tertiary">Sign In</Button></Link>
                    <Link href={'/'}><Button variant="tertiary">Sign Up</Button></Link>
                </div>

                <div className='block md:hidden'>
                    <Dropdown>
                        <Button aria-label="Menu" variant="secondary">
                            <IoMdMenu />
                        </Button>
                        <Dropdown.Popover>
                            <Dropdown.Menu onAction={(key) => console.log(`Selected: ${key}`)}>
                                <Dropdown.Item id="home" textValue="Home">
                                    <Label><Link href={'/'}>Home</Link></Label>
                                </Dropdown.Item>
                                <Dropdown.Item id="explore-cars" textValue="Explore cars">
                                    <Label><Link href={'/'}>Explore Cars</Link></Label>
                                </Dropdown.Item>
                                <Dropdown.Item id="add-car" textValue="Add car">
                                    <Label><Link href={'/'}>Add Car</Link></Label>
                                </Dropdown.Item>
                                <Dropdown.Item id="my-bookings" textValue="My bookings">
                                    <Label><Link href={'/'}>My Bookings</Link></Label>
                                </Dropdown.Item>

                                <Dropdown.Item id="sign-in" textValue="Sign In">
                                    <Label><Link href={'/'}><Button variant="primary">Sign In</Button></Link></Label>
                                </Dropdown.Item>

                                <Dropdown.Item id="sign-up" textValue="Sign Up">
                                    <Label><Link href={'/'}><Button variant="primary">Sign Up</Button></Link></Label>
                                </Dropdown.Item>

                            </Dropdown.Menu>
                        </Dropdown.Popover>
                    </Dropdown>
                </div>

            </div>
        </nav>
    );
};

export default Navbar;