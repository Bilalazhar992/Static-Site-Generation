// pages/index.js
import { getPostData } from '../lib/posts';

export default function Home({ post }) {
    return (
        <div>
            <h1>{post.data.title}</h1>
            <p>{post.data.date}</p>
            <article>{post.content}</article>
        </div>
    );
}

export async function getStaticProps() {
    const post = getPostData('hello-world.md'); // Pass the filename
    return {
        props: { post }, // Pass the parsed data as props
    };
}
