"use client";
import { Avatar, Button, Dropdown, Spinner } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';

import { IoMdMenu } from 'react-icons/io';
import { Moon, Sun, Car, CalendarDays, PlusCircle, LogOut, User } from 'lucide-react';
import { useEffect, useState } from 'react';
import NavLinks from './NavLinks';
import { authClient } from '@/lib/auth-client';
import { FaChevronCircleDown } from 'react-icons/fa';

const Navbar = () => {
    const {
        data: session,
        isPending,
    } = authClient.useSession();

    const user = session?.user;

    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        if (isDark) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [isDark]);

    const handleSignOut = async () => {
        await authClient.signOut();
    };

    return (
        <nav className='bg-white dark:bg-gray-900 shadow-xl dark:shadow-none border-b border-transparent dark:border-gray-800 py-2 transition-colors duration-300 sticky top-0 z-50'>
            <div className='container mx-auto px-4 flex justify-between items-center'>

                <Link href="/" className='flex items-center'>
                    <Image src={'/logo.png'} width={50} height={50} alt='car logo' />
                    <span className='text-3xl text-blue-800 dark:text-blue-400 font-bold'>Drive</span>
                    <span className='text-3xl text-red-600 dark:text-red-400 font-bold'>Fleet</span>
                </Link>

                <ul className='hidden md:flex items-center gap-3 text-gray-700 dark:text-gray-200 font-medium'>
                    <li><NavLinks href={'/'}>Home</NavLinks></li>
                    <li><NavLinks href={'/explore-cars'}>Explore Cars</NavLinks></li>
                    {user && (
                        <li><NavLinks href={'/add-car'}>Add Car</NavLinks></li>
                    )}
                    {user && (
                        <li><NavLinks href={'/my-bookings'}>My Bookings</NavLinks></li>
                    )}
                </ul>


                <div className='flex items-center gap-2'>

                    <div className='hidden md:flex gap-2 items-center'>

                        {isPending && (
                            <p className='flex gap-1 items-center'><Spinner size="sm" /> Loading...</p>
                        )}

                        {!isPending && user && (
                            <Dropdown>
                                <Button
                                    variant="ghost"
                                    className="flex items-center gap-2 px-2"
                                    aria-label="Profile menu"
                                >
                                    <Avatar>
                                        <Avatar.Image alt="Profile" src={user?.image} />
                                        <Avatar.Fallback>{user.name?.charAt(0)}</Avatar.Fallback>
                                    </Avatar>
                                    <span className='text-sm font-medium flex items-center gap-2 text-gray-700 dark:text-gray-200'>
                                        {user?.name} <FaChevronCircleDown />
                                    </span>
                                </Button>

                                <Dropdown.Popover>
                                    <Dropdown.Menu>

                                        <Dropdown.Item id="add-car" asChild>
                                            <NavLinks href={'/add-car'}>
                                                <span className='flex items-center gap-2'>
                                                    <PlusCircle className="w-4 h-4" />
                                                    Add Car
                                                </span>
                                            </NavLinks>
                                        </Dropdown.Item>

                                        <Dropdown.Item id="my-bookings" asChild>
                                            <NavLinks href={'/my-bookings'}>
                                                <span className='flex items-center gap-2'>
                                                    <CalendarDays className="w-4 h-4" />
                                                    My Bookings
                                                </span>
                                            </NavLinks>
                                        </Dropdown.Item>

                                        <Dropdown.Item id="my-added-cars" asChild>
                                            <NavLinks href={'/my-added-cars'}>
                                                <span className='flex items-center gap-2'>
                                                    <Car className="w-4 h-4" />
                                                    My Added Cars
                                                </span>
                                            </NavLinks>
                                        </Dropdown.Item>

                                        <Dropdown.Item id="logout" asChild>
                                            <NavLinks href={'/'} onClick={handleSignOut}>
                                                <span className='flex items-center gap-2 text-red-500'>
                                                    <LogOut className="w-4 h-4" />
                                                    Logout
                                                </span>
                                            </NavLinks>
                                        </Dropdown.Item>

                                    </Dropdown.Menu>
                                </Dropdown.Popover>

                            </Dropdown>
                        )}

                        {!isPending && !user && (
                            <div className='flex items-center gap-2'>
                                <Link href={'/login'}>
                                    <Button variant="primary">Login</Button>
                                </Link>
                                <Link href={'/register'}>
                                    <Button variant="primary">Register</Button>
                                </Link>
                            </div>
                        )}
                    </div>

                    <button
                        onClick={() => setIsDark(!isDark)}
                        className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                        aria-label="Toggle theme"
                    >
                        {isDark ? (
                            <Sun className="w-5 h-5 text-yellow-500" />
                        ) : (
                            <Moon className="w-5 h-5 text-gray-700" />
                        )}
                    </button>


                    <div className='block md:hidden pl-2'>
                        <Dropdown>
                            <div className='flex items-center gap-3'>
                                {!isPending && user && (
                                    <Avatar>
                                        <Avatar.Image
                                            alt="Profile"
                                            src={user?.image || ""}
                                        />

                                        <Avatar.Fallback>
                                            {user?.name?.charAt(0)}
                                        </Avatar.Fallback>
                                    </Avatar>
                                )}

                                <Button aria-label="Menu" variant="secondary">
                                    <IoMdMenu />
                                </Button>

                            </div>

                            <Dropdown.Popover>
                                <Dropdown.Menu>

                                    <Dropdown.Item id="home" asChild>
                                        <NavLinks href={'/'}>Home</NavLinks>
                                    </Dropdown.Item>

                                    <Dropdown.Item id="explore-cars" asChild>
                                        <NavLinks href={'/explore-cars'}>Explore Cars</NavLinks>
                                    </Dropdown.Item>

                                    {isPending && (
                                        <Dropdown.Item id="loading">
                                            <div className="flex justify-center py-1">
                                                <Spinner size="sm" />
                                            </div>
                                        </Dropdown.Item>
                                    )}

                                    {!isPending && user && (
                                        <>
                                            <Dropdown.Item id="mob-add-car" asChild>
                                                <NavLinks href={'/add-car'}>
                                                    <span className="flex items-center gap-2">
                                                        <PlusCircle className="w-4 h-4" /> Add Car
                                                    </span>
                                                </NavLinks>
                                            </Dropdown.Item>

                                            <Dropdown.Item id="mob-my-bookings" asChild>
                                                <NavLinks href={'/my-bookings'}>
                                                    <span className="flex items-center gap-2">
                                                        <CalendarDays className="w-4 h-4" /> My Bookings
                                                    </span>
                                                </NavLinks>
                                            </Dropdown.Item>

                                            <Dropdown.Item id="mob-my-added-cars" asChild>
                                                <NavLinks href={'/my-added-cars'}>
                                                    <span className="flex items-center gap-2">
                                                        <Car className="w-4 h-4" /> My Added Cars
                                                    </span>
                                                </NavLinks>
                                            </Dropdown.Item>

                                            <Dropdown.Item id="mob-logout">
                                                <button
                                                    onClick={handleSignOut}
                                                    className="flex items-center gap-2 text-red-500 w-full"
                                                >
                                                    <LogOut className="w-4 h-4" /> Logout
                                                </button>
                                            </Dropdown.Item>
                                        </>
                                    )}

                                    {!isPending && !user && (
                                        <>
                                            <Dropdown.Item id="sign-in" asChild>
                                                <Link href="/login">
                                                    <Button className="w-full">Login / Register</Button>
                                                </Link>
                                            </Dropdown.Item>
                                        </>
                                    )}

                                </Dropdown.Menu>
                            </Dropdown.Popover>
                        </Dropdown>
                    </div>

                </div>
            </div>
        </nav>
    );
};

export default Navbar;