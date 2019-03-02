import React from 'react';
import RecentPresenter from './RecentPresenter';
import { bookApi } from '../../api';

export default class extends React.Component {
	state = {
		upcoming: null,
		error: null,
		loading: true
	};

	async componentDidMount() {
		try {
			const {data: {results: upcoming}} = await bookApi.upcoming();
			this.setState({
				upcoming: upcoming
			})
		} catch {
			this.setState({
				error: "Can't find infomation"
			})
		} finally {
			this.setState({
				loading: false
			})
		}
	}

	// render things to HomePresenter
	render() {
		const { upcoming, error, loading } = this.state;
		console.log(this.state);
		return <RecentPresenter upcoming={upcoming} error={error} loading={loading} />;
	}
}
