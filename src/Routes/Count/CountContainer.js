import React from 'react';
import CountPresenter from './CountPresenter';
import { bookApi } from '../../api';

export default class extends React.Component {
	state = {
		popular: null,
		error: null,
		loading: true
	};

	async componentDidMount() {
		try {
			const {data: {results: popular}} = await bookApi.popular();
			this.setState({
				popular: popular
			})
		} catch {
			this.setState({
				error: "Cat't find infomation"
			})
		} finally {
			this.setState({
				loading: false
			})
		}
	}

	// render things to CountPresenter
	render() {
		const { popular, error, loading } = this.state;
		return <CountPresenter popular={popular} error={error} loading={loading} />;
	}
}
