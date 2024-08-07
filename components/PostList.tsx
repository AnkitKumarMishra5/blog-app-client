import { FC } from 'react';
import styles from '../styles/PostList.module.css';

interface Post {
    id: string;
    title: string;
    content: string;
    authorId: string;
    createdAt: string;
}

interface PostListProps {
    posts: Post[];
}

const PostList: FC<PostListProps> = ({ posts }) => {
    return (
        <div className={styles.postList}>
            {posts.map((post) => (
                <div key={post.id} className={styles.postItem}>
                    <h2 className={styles.postTitle}>{post.title}</h2>
                    <p className={styles.postContent}>{post.content}</p>
                </div>
            ))}
        </div>
    );
};

export default PostList;
