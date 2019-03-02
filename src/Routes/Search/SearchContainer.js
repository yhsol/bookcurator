import React from 'react';
import SearchPresenter from './SearchPresenter';
import { bookApi } from '../../api';

export default class extends React.Component {
	state = {
		movieResults: null,
		searchTerm: '',
		error: null,
		loading: false
	};

	handleSubmit = () => {
		const { searchTerm } = this.state;
		if (searchTerm !== '') {
			this.searchByTerm();
		}
	};

	searchByTerm = async () => {
		const { searchTerm } = this.state;
		this.setState({
			loading: true
		})
		try {
			const {data: {results: movieResults}} = await bookApi.search(searchTerm);
			this.setState({
				movieResults: movieResults
			})
		} catch {
			this.setState({
				error: "Can't find infomation"
			})
		} finally {
			this.setState({
				loading: false
			});
		}
	};

	// render things to HomePresenter
	render() {
		const { movieResults, searchTerm, error, loading } = this.state;
		return <SearchPresenter 
			movieResults={movieResults} 
			searchTerm={searchTerm} 
			error={error} 
			loading={loading} 
			handleSubmit={this.handleSubmit} 
		/>;
	}
}
