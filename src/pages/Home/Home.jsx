
import Cards from '../../Components/cards/Cards'
import Layout from '../../Components/Layout/Layout'

const Home = () => {
    return (
        <Layout>
            <div className='flex flex-wrap gap-4 justify-center'>
                <Cards />
                <Cards />
                <Cards />
                <Cards />
                <Cards />
                <Cards />
            </div>
        </Layout>

    )
}

export default Home