
import { useEffect, useState } from 'react';
import Layout from '../../Components/Layout/Layout'
import { Link, useNavigate, useParams } from 'react-router-dom'
import axios from 'axios';

const SingleBlog = () => {

    const { id } = useParams();
    const [blog, setBlog] = useState({});
    console.log(id)

    const navigate = useNavigate();

    const fetchSingleBlog = async () => {
        try {
            const response = await axios.get(`http://localhost:3000/blogs/${id}`);

            if (response.status === 200) {
                setBlog(response.data.data);
            }

        } catch (error) {
            console.error("Error fetching single blog:", error);

        }
    }

    useEffect(() => {
        fetchSingleBlog();
    }, [])

    const handleDelete = async () => {
        const response = await axios.delete(`http://localhost:3000/deleteBlog/${id}`);

        if (response.status === 200) {
            alert("Blog Deleted Sucessfully");
            navigate("/");
        } else {
            alert("Error Deleting Blog");
        }
    }


    return (
        <Layout>

            <div className="max-w-screen-xl mx-auto">

                <main className="mt-10">
                    <div className="mb-4 md:mb-0 w-full max-w-screen-md mx-auto relative" style={{ height: '24em' }}>
                        <div className="absolute left-0 bottom-0 w-full h-full z-10" style={{ backgroundImage: 'linear-gradient(180deg,transparent,rgba(0,0,0,.7))' }} />
                        <img src="https://images.unsplash.com/photo-1493770348161-369560ae357d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80" className="absolute left-0 top-0 w-full h-full z-0 object-cover" />
                        <div className="p-4 absolute bottom-0 left-0 z-20">
                            <a href="#" className="px-4 py-1 bg-black text-gray-200 inline-flex items-center justify-center mb-2">Nutrition</a>
                            <h2 className="text-4xl font-semibold text-gray-100 leading-tight">
                                {blog.title}
                            </h2>
                            <h2 className="text-3xl font-light text-gray-100 leading-tight">
                                {blog.subTitle}
                            </h2>
                            <div className="flex mt-3 justify-between items-center w-full max-w-screen-md">
                                <div className="flex mt-3 justify-between items-center w-full max-w-screen-md">
                                    {/* Author Info */}
                                    {/* <div className="flex items-center">
                                        <img
                                            src="https://randomuser.me/api/portraits/men/97.jpg"
                                            className="h-10 w-10 rounded-full mr-2 object-cover"
                                        />
                                        <div>
                                            <p className="font-semibold text-gray-200 text-sm"> Mike Sullivan </p>
                                            <p className="font-semibold text-gray-400 text-xs"> 14 Aug </p>
                                        </div>
                                    </div> */}

                                    {/* Edit & Delete Buttons */}
                                    <div className="flex space-x-2">
                                        <Link to={`/blog/update/${id}`} className="px-4 py-1 bg-blue-600 text-white text-sm rounded hover:bg-blue-700 transition duration-200">
                                            Edit
                                        </Link>
                                        <button onClick={handleDelete} className="px-4 py-1 bg-red-600 text-white text-sm rounded hover:bg-red-700 transition duration-200">
                                            Delete
                                        </button>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>
                    <div className="px-4 lg:px-0 mt-12 text-gray-700 max-w-screen-md mx-auto text-lg leading-relaxed">
                        <p className="pb-6">
                            {blog.description}
                        </p>

                    </div>
                </main>

            </div>

        </Layout>
    )
}

export default SingleBlog