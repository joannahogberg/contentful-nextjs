import React, { Component } from 'react';
import Link from 'next/link'
import Router from 'next/router'
import { getPostsPagination } from '../helpers/contentful';

class Pagination extends Component {
  render() {
    return (
      <div>
        <ul>
          {this.props.posts.map((p) => (
            <li key={p.sys.id}>{p.fields.name}</li>
          ))}
        </ul>
        <button
          onClick={() => Router.push(`/pagination?page=${this.props.page - 1}`)}
          disabled={this.props.page <= 1}
        >
          PREV
        </button>
        <button onClick={() => Router.push(`/pagination?page=${this.props.page + 1}`)}>
          NEXT
        </button>
        <Link href="/pagination?page=1">
          <a>First page</a>
        </Link>
      </div>
    )
  }
}

Pagination.getInitialProps = async ({ query: { page = 1 } }) => {
	const posts = await getPostsPagination(page);
	return { posts, page: parseInt(page, 10) };
};

export default Pagination
