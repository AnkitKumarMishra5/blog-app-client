import { useState, FormEvent } from 'react';
import { useRouter } from 'next/router';
import api from '../utils/api';
import Cookies from 'js-cookie';
import styles from '../styles/Auth.module.css';
import Image from 'next/image'

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const res = await api.post('/login', { email, password });
            Cookies.set('token', res.data.token, { expires: 1 });
            router.push('/dashboard');
        } catch (error) {
            console.error('Error logging in:', error);
        }
    };

    return (
        <div className={styles.container}>
            <Image src='/images/logo.png' alt='logo' width={100} height={100} />
            <h2 className={styles.title}>Login</h2>
            <form onSubmit={handleSubmit} className={styles.form}>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className={styles.input}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className={styles.input}
                />
                <button type="submit" className={styles.button}>Login</button>
            </form>
            <p className={styles.redirectText}>
                Don't have an account? <a onClick={() => router.push('/signup')}>Sign Up</a>
            </p>
        </div>
    );
};

export default Login;