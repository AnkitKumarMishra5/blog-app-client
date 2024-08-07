import { FC } from 'react';
import styles from '../styles/PostList.module.css';
import Image from 'next/image'
import { formatDistanceToNow } from 'date-fns';

interface Post {
    id: string;
    title: string;
    content: string;
    authorId: { email: string };
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
                    <div className={styles.postMeta}>
                        <span className={styles.postAuthor}>
                            <Image src='/images/avatar.png' alt='avatar' width={15} height={15} id={styles.avatar} />
                            {post.authorId.email}
                        </span>
                        <span className={styles.postDate}>
                            {formatDistanceToNow(new Date(post.createdAt), { addSuffix: true })}
                        </span>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default PostList;
