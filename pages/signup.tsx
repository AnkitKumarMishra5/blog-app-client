import { useState, FormEvent } from 'react';
import { useRouter } from 'next/router';
import api from '../utils/api';
import styles from '../styles/Auth.module.css';
import Image from 'next/image'

const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            await api.post('/signup', { email, password });
            router.push('/login');
        } catch (error) {
            console.error('Error signing up:', error);
        }
    };

    return (
        <div className={styles.container}>
            <Image src='/images/logo.png' alt='logo' width={100} height={100} />
            <h2 className={styles.title}>Sign Up</h2>
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
                <button type="submit" className={styles.button}>Sign Up</button>
            </form>
            <p className={styles.redirectText}>
                Already have an account? <a onClick={() => router.push('/login')}>Login</a>
            </p>
        </div>
    );
};

export default Signup;