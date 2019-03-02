import axios from 'axios';

const api = axios.create({
	baseURL: 'https://api.themoviedb.org/3',
	params: {
		api_key: 'fb2398f0003757361045d72497fe13c3',
		language: 'ko-KR'
	}
});

export const bookApi = {
	popular: () => api.get('movie/popular'),
	upcoming: () => api.get('movie/upcoming'),
	detail: (id) =>
		api.get(`movie/${id}`, {
			params: {
				append_to_response: 'videos, similar'
			}
		}),
	search: (term) =>
		api.get('search/movie', {
			params: {
				query: encodeURI(term)
			}
		})
};
