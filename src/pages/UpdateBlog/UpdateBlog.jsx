
import BlogForm from '../CreateBlog/component/BlogFrom'
import Layout from '../../Components/Layout/Layout'
import { useParams } from 'react-router-dom';

const UpdateBlog = () => {

    const { id } = useParams();

    return (
        <Layout>
            <BlogForm type="Update" blogId={id} />
        </Layout>
    )
}

export default UpdateBlog