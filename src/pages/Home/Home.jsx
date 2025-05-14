
import Layout from '../../Components/Layout/Layout'

const Home = () => {
    return (
        <Layout>
            <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
                <h1 className="text-4xl font-bold text-gray-800">Welcome to the Home Page</h1>
                <p className="mt-4 text-lg text-gray-600">This is a simple home page.</p>
            </div>
        </Layout>

    )
}

export default Home