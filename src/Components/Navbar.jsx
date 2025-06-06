// components/Navbar.jsx
import { useState } from "react";
import { Link } from "react-router-dom";
import Form from "../Auth/components/Form";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeModal, setActiveModal] = useState(null); // track which modal to show

    const openLogin = () => setActiveModal("login");  // show login modal
    const openRegister = () => setActiveModal("register");  // show register modal
    const closeModal = () => setActiveModal(null);  // close the modal

    return (
        <>
            <nav className="bg-white border-gray-200 dark:bg-gray-900">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    {/* Logo */}
                    <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Logo" />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                            BlogCMS
                        </span>
                    </Link>

                    {/* Hamburger icon */}
                    <button
                        onClick={() => setIsMenuOpen((prev) => !prev)}
                        type="button"
                        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>

                    {/* Collapsible menu */}
                    <div
                        className={`${isMenuOpen ? "block" : "hidden"} w-full md:flex md:w-auto md:order-1 md:mt-0`}
                        id="navbar-menu"
                    >
                        <div className="flex flex-col space-y-4 md:flex-row md:space-y-0 md:items-center md:space-x-6 mt-4 md:mt-0 bg-gray-50 md:bg-transparent p-4 rounded-lg dark:bg-gray-800 md:dark:bg-transparent">
                            {/* Search (mobile) */}
                            <div className="relative md:hidden">
                                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                    <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M10 18a8 8 0 100-16 8 8 0 000 16z" />
                                    </svg>
                                </div>
                                <input
                                    type="text"
                                    placeholder="Search..."
                                    className="w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                                />
                            </div>

                            {/* Nav Links */}
                            <ul className="flex flex-col space-y-2 md:space-y-0 md:flex-row md:space-x-6 font-medium text-sm">
                                <li>
                                    <Link to="/blog/add" className="text-blue-700 dark:text-blue-500 hover:underline">Create Blog</Link>
                                </li>
                                <li>
                                    <Link to='/register' className="text-gray-700 dark:text-white hover:underline">Register</Link>
                                </li>
                                <li>
                                    <Link to="/login" className="text-gray-700 dark:text-white hover:underline">Login</Link>
                                </li>
                            </ul>

                            {/* Search (desktop) */}
                            <div className="relative hidden md:block md:absolute md:left-1/2 md:-translate-x-1/2">
                                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                    <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M10 18a8 8 0 100-16 8 8 0 000 16z" />
                                    </svg>
                                </div>
                                <input
                                    type="text"
                                    placeholder="Search..."
                                    className="w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Show the Modal if activeModal is set */}
            {activeModal && (
                <ModalWrapper onClose={closeModal}>
                    <Form type={activeModal === "login" ? "Login" : "Register"} />
                </ModalWrapper>
            )}
        </>
    );
};

export default Navbar;