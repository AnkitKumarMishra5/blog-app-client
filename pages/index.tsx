import { GetServerSideProps } from 'next';
import PostList from '../components/PostList';
import styles from '../styles/Home.module.css';
import api from '../utils/api';
import Image from 'next/image'

const Home = ({ posts }: any) => {
    return (
        <div className={styles.dashboardContainer}>
            <Image src='/images/logo.png' alt='logo' width={100} height={100} />
            <h1 className={styles.header}>Welcome to Blogit ✍️</h1>
            <PostList posts={posts} />
        </div>
    );
};

export const getServerSideProps: GetServerSideProps = async () => {
    const res = await api.get('/posts');
    const posts = res.data;

    return {
        props: { posts }
    };
};

export default Home;
