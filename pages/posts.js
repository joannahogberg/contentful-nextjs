import { getPostBySlug } from '../helpers/contentful';
import Layout from '../components/layout';

const Post = (props) => {
	console.log(props);
	return (
		<Layout title={props.post.fields.name} img={props.post.fields.image.fields.file.url}>
			<h1>{props.post.fields.name}</h1>
			<img
				alt={props.post.fields.image.fields.file.fileName}
				src={props.post.fields.image.fields.file.url}
				className="post-card__image"
			/>
		</Layout>
	);
};

Post.getInitialProps = async (query) => {
	const { id } = query;
	const post = await getPostBySlug(id);
	return { post };
};

export default Post;
