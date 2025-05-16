import Cards from '../../Components/cards/Cards'
import Layout from '../../Components/Layout/Layout'
import axios from 'axios';
import { useEffect, useState } from 'react';

const Home = () => {

    const [blogs, setBlogs] = useState([]);

    // FETCTHING DATA FROM API
    const fetchData = async () => {
        try {
            const response = await axios.get("http://localhost:3000/blogs");
            if (response.status === 200) {
                setBlogs(response.data.data.reverse());
            } else {
                console.error("Error fetching data:", response.status);
            }
        } catch (error) {

        }
    }
    useEffect(() => {
        fetchData();
    }, []);

    console.log(blogs, "Blogs");


    return (
        <Layout>
            <div className='flex flex-wrap gap-4 justify-center'>

                {
                    blogs.length > 0 ? (
                        blogs.map((blogs) => {
                            return <Cards blog={blogs} />
                        })
                    ) : (
                        <div className='flex justify-center items-center'>
                            <h1 className='text-2xl font-bold'>No Blogs Found</h1>
                        </div>
                    )
                }
            </div>
        </Layout>

    )
}

export default Home