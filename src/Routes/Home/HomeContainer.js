import React from 'react';
import HomePresenter from './HomePresenter';
import { bookApi } from '../../api';

export default class extends React.Component {
	state = {
		popular: null,
		upcoming: null,
		error: null,
		loading: true
	};

	async componentDidMount() {
		try {
			const {data: {results: popular}} = await bookApi.popular();
			const {data: {results: upcoming}} = await bookApi.upcoming();
			this.setState({
				popular: popular,
				upcoming: upcoming
			})
		} catch {
			this.setState({
				error: "CAN'T FIND INFOMATION"
			})
		} finally {
			this.setState({
				loading: false
			})
		}
	}

	// render things to HomePresenter
	render() {
		const { popular, upcoming, error, loading } = this.state;
		return <HomePresenter popular={popular} upcoming={upcoming} error={error} loading={loading} />;
	}
}
