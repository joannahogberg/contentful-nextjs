import Link from 'next/link';
import Head from 'next/head';

export default ({
	children,
	title = 'Editorials',
	desc = 'This is an example of a meta description',
	img = '',
	url = ''
}) => (
	<div>
		<Head>
			<title>{title}</title>
			<meta charSet="utf-8" />
			<meta name="viewport" content="initial-scale=1.0, width=device-width" />
			<meta name="description" content={desc} />
			<meta property="og:title" content={title} />
			<meta property="og:type" content="Blog post" />
			<meta property="og:url" content={url} />
			<meta property="og:image" content={img} />
			<meta property="og:description" content={desc} />
		</Head>
		<header>
			<nav>
				<Link href="/">
					<a>Home</a>
				</Link>
			</nav>
		</header>

		{children}

		<footer>{'Footer'}</footer>
	</div>
);
