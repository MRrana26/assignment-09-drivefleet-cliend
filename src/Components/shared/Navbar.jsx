"use client";
import { Button, Dropdown, Label } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';

import { IoMdMenu } from 'react-icons/io';

import { Moon, Sun } from 'lucide-react';
import { useEffect, useState } from 'react';
import NavLinks from './NavLinks';

const Navbar = () => {
    const [isDark, setIsDark] = useState(false);
    useEffect(() => {
        if (isDark) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [isDark]);

    return (

        <nav className='bg-white dark:bg-gray-900 shadow-xl dark:shadow-none border-b border-transparent dark:border-gray-800 py-2 transition-colors duration-300 sticky top-0 z-50'>

            <div className='container mx-auto px-4 flex justify-between items-center'>

                <div className='flex items-center'>
                    <Image src={'/logo.png'} width={50} height={50} alt='car logo' />
                    <span className='text-3xl text-blue-800 dark:text-blue-400 font-bold'>Drive</span>
                    <span className='text-3xl text-red-600 dark:text-red-400 font-bold'>Fleet</span>
                </div>

                <ul className='hidden md:flex items-center gap-3 text-gray-700 dark:text-gray-200 font-medium'>
                    <li>
                        <NavLinks href={'/'}>Home</NavLinks>
                    </li>
                    <li>
                        <NavLinks href={'/explore-cars'}>Explore Cars</NavLinks>
                    </li>
                    <li>
                        <NavLinks href={'/add-car'}>Add Car</NavLinks>
                    </li>
                    <li>
                        <NavLinks href={'/my-bookings'}>My Bookings</NavLinks>
                    </li>
                </ul>

                <div className='flex items-center gap-2'>

                    <div className='hidden md:flex gap-2 items-center'>
                        <Link href={'/login'}><Button variant="primary">Sign In</Button></Link>
                        <Link href={'/register'}><Button variant="primary">Sign Up</Button></Link>
                    </div>

                    <div>
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
                    </div>


                    <div className='block md:hidden pl-2'>
                        <Dropdown>
                            <Button aria-label="Menu" variant="secondary">
                                <IoMdMenu />
                            </Button>

                            <Dropdown.Popover>
                                <Dropdown.Menu>

                                    <Dropdown.Item id="home" asChild>
                                        <NavLinks href={'/'}>Home</NavLinks>
                                    </Dropdown.Item>

                                    <Dropdown.Item id="explore-cars" asChild>
                                        <NavLinks href={'/explore-cars'}>Explore Cars</NavLinks>
                                    </Dropdown.Item>

                                    <Dropdown.Item id="add-car" asChild>
                                        <NavLinks href={'/add-car'}>Add Car</NavLinks>
                                    </Dropdown.Item>

                                    <Dropdown.Item id="my-bookings" asChild>
                                        <NavLinks href={'/my-bookings'}>My Bookings</NavLinks>
                                    </Dropdown.Item>

                                    <Dropdown.Item id="sign-in" asChild>
                                        <Link href="/login"><Button>Sign In</Button></Link>
                                    </Dropdown.Item>

                                    <Dropdown.Item id="sign-up" asChild>
                                        <Link href="/register"><Button>Sign Up</Button></Link>
                                    </Dropdown.Item>

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