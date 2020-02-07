import Link from 'next/link';
import './postcard.scss';

function PostCard({ post }) {
	console.log(post)
	return (
		<div className="post-card">
			<Link href={{ pathname: '/posts', query: { id: post.fields.slug } }} as={`/posts/${post.fields.slug}`}>
					<div className="post-card__content">
					<img alt={post.fields.image.fields.file.fileName} src={post.fields.image.fields.file.url} className="post-card__image" />
						<div className="post__date">
							{/* {formatDate(date || createdAt)} */}
						</div>
						{ post.fields.name ? (
							<h2 className="post-card__title">
								{post.fields.name}
							</h2>
						) : null}
					</div>
			</Link>
		</div>
	);
}

export default PostCard;
