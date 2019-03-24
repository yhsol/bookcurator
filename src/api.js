import axios from 'axios';

const api = axios.create({
	baseURL: 'https://api.themoviedb.org/3',
	params: {
		api_key: 'fb2398f0003757361045d72497fe13c3',
		language: 'ko-KR'
	}
});

// api 호출 시 앞에 movie 를 붙이는 것은 api 정보가 그렇게 구성되어 있기 때문이다. 이름을 바꾸면 에러가 난다.

export const bookApi = {
	popular: () => api.get('movie/popular'),
	upcoming: () => api.get('movie/upcoming'),
	detail: (id) =>
		api.get(`movie/${id}`, {
			params: {
				append_to_response: 'videos similar'
			}
		}),
	search: (term) =>
		api.get('search/movie', {
			params: {
				query: encodeURI(term)
			}
		})
};
