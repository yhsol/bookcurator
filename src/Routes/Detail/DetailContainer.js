import React from 'react';
import DetailPresenter from './DetailPresenter';
import { bookApi } from '../../api';

export default class extends React.Component {
	constructor(props) {
		super(props);
		const { location: { pathname } } = props;
		this.state = {
			result: null,
			error: null,
			loading: true,
			isDetail: pathname.includes('/detail/')
		};
	}

	// 위에서 constructor 메서드를 쓴 이유는 componentDidMount 메서드를 사용했기 때문인가? 

	async componentDidMount() {
		const { match: { params: { id } }, history: { push } } = this.props;
		const { isDetail } = this.state;
		const parsedID = parseInt(id);
		if (isNaN(parsedID)) {
			return push('/');
		}
		let result = null;
		try {
			if(isDetail) {
				({data: result} = await bookApi.detail(parsedID));
			}
			console.log(result);
		} catch {
			this.setState({ error: "Cat't find infomation" })
		} finally {
			this.setState({ loading: false, result })
		}
	}

	// render things to DetailPresenter
	render() {
		const { result, error, loading } = this.state;
		return <DetailPresenter result={result} error={error} loading={loading} />;
	}
}
