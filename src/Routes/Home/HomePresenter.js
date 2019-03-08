import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import SectionColumn from '../../Components/SectionColumn';
import Loader from '../../Components/Loader';
import ErrorMessage from '../../Components/ErrorMessage';
import PosterSmall from '../../Components/PosterSmall';
import Helmet from 'react-helmet';

const Container = styled.div`
	width: 75%;
	margin: 20px auto;
`;

const HomePresenter = ({ popular, upcoming, error, loading }) => (
	<React.Fragment>
		<Helmet>
			<title>Bookcurator</title>
		</Helmet>
		{loading ? (
			<Loader />
		) : (
			<Container>
				{popular &&
				popular.length > 0 && (
					<SectionColumn title="Popular">
						{popular.map((movie) => (
							<PosterSmall
								key={movie.id}
								id={movie.id}
								title={movie.title}
								imageUrl={movie.poster_path}
								rating={movie.vote_average}
								// 아래와 같은 경우, substring 이나 slice 같은 메서드를 쓰는 경우 앞의 값이 null일 경우 에러가 생길 수 있어서 그 값을 확인하는 것이 필요.
								year={movie.release_date}
								isBook={true}
							/>
						))}
					</SectionColumn>
				)}
				{upcoming &&
				upcoming.length > 0 && (
					<SectionColumn title="Upcoming">
						{upcoming.map((movie) => (
							<PosterSmall
								key={movie.id}
								id={movie.id}
								title={
									movie.title && movie.title.length > 8 ? (
										`${movie.title.substring(0, 8)}...`
									) : (
										movie.title
									)
								}
								imageUrl={movie.poster_path}
								rating={movie.vote_average}
								// 아래와 같은 경우, substring 이나 slice 같은 메서드를 쓰는 경우 앞의 값이 null일 경우 에러가 생길 수 있어서 그 값을 확인하는 것이 필요.
								year={movie.release_date && movie.release_date.substring(0, 4)}
								isBook={true}
							/>
						))}
					</SectionColumn>
				)}
				{error && <ErrorMessage text={error} color="#ff8906" />}
			</Container>
		)};
	</React.Fragment>
);

HomePresenter.propTypes = {
	popular: PropTypes.array,
	upcoming: PropTypes.array,
	error: PropTypes.string,
	loading: PropTypes.bool.isRequired
};

export default HomePresenter;
