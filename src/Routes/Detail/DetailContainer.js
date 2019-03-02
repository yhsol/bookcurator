import React from 'react';
import DetailPresenter from './DetailPresenter';

export default class extends React.Component {
	state = {
		result: null,
		error: null,
		loading: true
	};

	async componentDidMount() {
		const { match: { params: { id } }, history: { push } } = this.props;
		const parsedID = parseInt(id);
		if (isNaN(parsedID)) {
			return push('/');
		}
	}

	// render things to HomePresenter
	render() {
		const { result, error, loading } = this.state;
		return <DetailPresenter result={result} error={error} loading={loading} />;
	}
}
