import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import api from '../utils/api';
import PostForm from '../components/PostForm';
import PostList from '../components/PostList';
import Cookies from 'js-cookie';
import styles from '../styles/Dashboard.module.css';
import Image from 'next/image'

const Dashboard = () => {
    const [posts, setPosts] = useState([]);
    const router = useRouter();

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const token = Cookies.get('token');
                const res = await api.get('/posts/user', {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                setPosts(res.data);
            } catch (error) {
                console.error('Error fetching posts:', error);
                router.push('/login');
            }
        };

        fetchPosts();
    }, []);

    return (
        <div className={styles.dashboardContainer}>
            <Image src='/images/logo.png' alt='logo' width={100} height={100} />
            <h1 className={styles.header}>Welcome to Blogit ✍️</h1>
            <PostForm />
            <PostList posts={posts} />
        </div>
    );
};

export default Dashboard;
