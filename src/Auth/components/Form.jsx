import React from 'react'
import { Link } from 'react-router-dom'

const Form = ({ type, submit }) => {
    return (
        <section className="flex items-center justify-center min-h-screen">
            <div className="w-full bg-white rounded-lg shadow dark:border sm:max-w-md md:mt-0 xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                <div className="p-6 space-y-4 sm:p-8 md:space-y-6">
                    <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                        {type === "Register" ? "Create an account" : "Sign in to your account"}
                    </h1>
                    <form className="space-y-4 md:space-y-6 w-full" method="POST">
                        {type === "Register" && (
                            <div>
                                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                                <input type="text" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Adam@gmail.com" required />
                            </div>
                        )}
                        <div>
                            <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Username</label>
                            <input type="text" name="username" id="username" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="adam123" required />
                        </div>
                        <div>
                            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                            <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                        </div>
                        <div>
                            <button type="submit" className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mb-2"> {type} </button>

                            {type === "Register" ? (
                                <div className="flex flex-col items-center justify-center pt-2 space-y-1 sm:flex-row sm:space-y-0 sm:gap-x-1">
                                    <p className="text-sm font-light text-gray-500 dark:text-gray-400 text-center sm:text-left">
                                        Already have an account?
                                    </p>
                                    <Link to="/login" className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">
                                        Login here
                                    </Link>
                                </div>
                            ) : (
                                <div className="flex flex-col items-center justify-center pt-2 space-y-1 sm:flex-row sm:space-y-0 sm:gap-x-1">
                                    <p className="text-sm font-light text-gray-500 dark:text-gray-400 text-center sm:text-left">
                                        Don't have an account?
                                    </p>
                                    <Link to='/register' className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">
                                        Sign Up here
                                    </Link>
                                </div>
                            )}
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Form
