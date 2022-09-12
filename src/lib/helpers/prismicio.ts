import * as prismic from '@prismicio/client';

const repoName = 'tribe-visitekaartje'; // Fill in your repository name
const accessToken = ''; // If your repository is private, add an access token

const createClient = ({ request, fetch }: { request?: Request; fetch?: prismic.FetchLike }) => {
	const clientOptions = {
		fetch,
		accessToken
	};
	const client = prismic.createClient(repoName, clientOptions);

	if (request) {
		client.enableAutoPreviewsFromReq(request);
	}

	return client;
};

export default createClient;
