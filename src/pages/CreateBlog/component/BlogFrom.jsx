import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const BlogForm = ({ type }) => {
    const navigate = useNavigate();
    const [title, setTitle] = useState("");
    const [subtitle, setSubTitle] = useState("");
    const [description, setDescription] = useState("");

    const hanldeSubmit = async (e) => {
        e.preventDefault();
        const data = {
            title: title,
            subTitle: subtitle,
            description: description,
        }

        // Api call to create a new blog

        const response = await axios.post("http://localhost:3000/createBlog", data)
        console.log(response);

        if (response.status === 201) {
            navigate("/")
        }
    }

    return (
        <section>
            <div className="py-8 px-4 mx-auto max-w-2xl lg:py-5">
                <form onSubmit={hanldeSubmit} className="bg-red-50 px-6 py-6 rounded-lg shadow-md dark:bg-gray-800">
                    <h2 className="mb-6 text-2xl font-bold text-gray-800 dark:text-white">
                        {type === "Create" ? "Create a new blog" : "Update your Blog"}
                    </h2>
                    <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
                        <div className="sm:col-span-2">
                            <label htmlFor="title" className="block mb-2 text-base font-medium text-gray-800 dark:text-white">Title</label>
                            <input
                                type="text"
                                name="title"
                                id="title"
                                className="bg-white border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                placeholder="Type product name"
                                required
                                // onChange={handleChange}
                                onChange={(e) => { setTitle(e.target.value) }}
                            />
                        </div>
                        <div className="w-full">
                            <label htmlFor="subtitle" className="block mb-2 text-base font-medium text-gray-800 dark:text-white">Subtitle</label>
                            <input
                                type="text"
                                name="subtitle"
                                id="subtitle"
                                className="bg-white border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                placeholder="Subtitle"
                                required
                                // onChange={handleChange}
                                onChange={(e) => { setSubTitle(e.target.value) }}
                            />
                        </div>
                        {/* <div className="w-full">
                            <label htmlFor="category" className="block mb-2 text-base font-medium text-gray-800 dark:text-white">Category</label>
                            <input
                                type="text"
                                name="category"
                                id="category"
                                className="bg-white border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                placeholder="Category"
                                required
                            />
                        </div> */}
                        {/* <div>
                            <label htmlFor="image" className="block mb-2 text-base font-medium text-gray-800 dark:text-white">Image</label>
                            <input
                                type="file"
                                name="image"
                                id="image"
                                className="bg-white border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                required
                            />
                        </div> */}
                        <div className="sm:col-span-2">
                            <label htmlFor="description" className="block mb-2 text-base font-medium text-gray-800 dark:text-white">Description</label>
                            <textarea
                                id="description"
                                rows="6"
                                className="block p-2.5 w-full text-base text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                                placeholder="Your description here"
                                // onChange={handleChange}
                                onChange={(e) => { setDescription(e.target.value) }}
                            ></textarea>
                        </div>
                    </div>
                    <div className='flex justify-center'>
                        <button
                            type="submit"
                            className="w-full mt-6 text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-semibold rounded-lg text-base px-6 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                            {type === "Create" ? "Create Blog" : "Update Blog"}
                        </button>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default BlogForm
