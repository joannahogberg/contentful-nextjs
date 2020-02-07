import { useEffect, useState } from 'react';
import PostCard from '../components/PostCard/PostCard';
import { getPosts } from '../helpers/contentful';

import Layout from '../components/layout'

import '../styles/style.scss';

function HomePage() {
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		async function getAllPosts() {
			const allPosts = await getPosts();
			setPosts([...allPosts]);
		}
		getAllPosts();
	}, []);

	return (
			<Layout title="Editorials">
				<div className="wrapper">
					{posts.length > 0 ? posts.map((p) => <PostCard post={p} key={p.fields.slug} />) : null}
				</div>
			</Layout>
	);
}

export default HomePage;
