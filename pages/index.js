import React, { Component } from 'react';
import Link from 'next/link';
import Router from 'next/router';
import { getPostsPagination } from '../helpers/contentful';

// Components
import Layout from '../components/layout';
import PostCard from '../components/PostCard/PostCard';

// Styles
import '../styles/style.scss';

class HomePage extends Component {
	render() {
		return (
			<Layout title="Contentful Next.js">
				<div className="wrapper">
					{this.props.posts.length > 0
						? this.props.posts.map((p) => <PostCard post={p} key={p.fields.slug} />)
						: null}
				</div>
				<div className="pagination-navigation">
					<button
						onClick={() => Router.push(`/?page=${this.props.page - 1}`)}
						disabled={this.props.page <= 1}
					>
						PREV
					</button>
					<button onClick={() => Router.push(`/?page=${this.props.page + 1}`)}>
						NEXT
					</button>
					<Link href="/?page=1">
						<a>First page</a>
					</Link>
				</div>
			</Layout>
		);
	}
}

HomePage.getInitialProps = async ({ query: { page = 1 } }) => {
	const posts = await getPostsPagination(page);
	return { posts, page: parseInt(page, 10) };
};

export default HomePage;
