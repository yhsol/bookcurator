import React from 'react';
import SearchPresenter from './SearchPresenter';
import { bookApi } from '../../api';

export default class extends React.Component {
	state = {
		searchResults: null,
		searchTerm: '',
		error: null,
		loading: false
	};

	handleSubmit = (event) => {
		event.preventDefault();
		const { searchTerm } = this.state;
		if (searchTerm !== '') {
			this.searchByTerm();
		}
	};
	
	updateTerm = (event) => {
		const { target: { value } } = event;
		console.log(value);
		this.setState({
			searchTerm: value
		})
	};

	searchByTerm = async () => {
		const { searchTerm } = this.state;
		this.setState({
			loading: true
		})
		try {
			const {data: {results: searchResults}} = await bookApi.search(searchTerm);
			this.setState({
				searchResults: searchResults
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
	// maybe componentDidMount 에서 location.reload 나 history 를 이용해서 refresh 할 수 있지 않을까.

	// render things to SearchPresenter
	render() {
		const { searchResults, searchTerm, error, loading } = this.state;
		return <SearchPresenter 
			searchResults={searchResults} 
			searchTerm={searchTerm} 
			error={error} 
			loading={loading} 
			handleSubmit={this.handleSubmit}
			updateTerm={this.updateTerm}
		/>;
	}
}
