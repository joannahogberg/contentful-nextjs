const contentful = require('contentful');

const client = contentful.createClient({
	space: process.env.CONTENTFUL_SPACE_ID,
	accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
});

export const getPosts = async () => {
	const entries = await client.getEntries({
		content_type: 'post'
	});
	if (entries.items) return entries.items;
	console.log(`Error getting Entries for ${contentType.name}.`);
};

export const getPostBySlug = async (slug) => {
	const entry = await client.getEntries({
		content_type: 'post',
		'fields.slug[in]': slug
	});
	if (entry.items) return entry.items[0];
	console.log(`Error getting Entries for ${contentType.name}.`);
};
