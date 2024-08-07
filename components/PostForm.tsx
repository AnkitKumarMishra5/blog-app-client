import { useState, FormEvent } from 'react';
import { useRouter } from 'next/router';
import api from '../utils/api';
import Cookies from 'js-cookie';
import styles from '../styles/PostForm.module.css';

const PostForm = ({ fetchPosts }: any) => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const token = Cookies.get('token');
            await api.post('/post', { title, content }, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            fetchPosts()
            setTitle('')
            setContent('')
        } catch (error) {
            console.error('Error posting the article:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit} className={styles.form}>
            <input
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
                className={styles.input}
            />
            <textarea
                placeholder="Content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                required
                className={styles.textarea}
            />
            <button type="submit" className={styles.button}>Post</button>
        </form>
    );
};

export default PostForm;
